import { $ } from 'bun';

const SSH_HOST = 'hosting212287@202.61.233.108';
const REMOTE_DIR = '~/insektenschutz-rhein-sieg.de';

try {
	// app.js: CJS wrapper so Passenger finds the default startup file without needing package.json
	await Bun.write('./build/app.js', `import('./index.js');\n`);
	// package.json still needed for "type: module" when Passenger does read it
	await Bun.write('./build/package.json', JSON.stringify({ main: 'app.js', type: 'module' }, null, '\t') + '\n');

	// Create tmp/restart.txt to trigger Passenger app restart
	console.log('Creating tmp/restart.txt...');
	await $`mkdir -p ./build/tmp && touch ./build/tmp/restart.txt`;

	// Compress build directory
	console.log('Compressing build directory...');
	await $`tar -czf ./build.tar.gz -C ./build .`;

	// Upload compressed build
	console.log('Uploading compressed build...');
	await $`scp ./build.tar.gz ${SSH_HOST}:/tmp/build.tar.gz`;

	// Clean remote directory and extract build
	console.log('Deploying on server...');
	await $`ssh ${SSH_HOST} "rm -rf ${REMOTE_DIR}/* && tar -xzf /tmp/build.tar.gz -C ${REMOTE_DIR} && rm /tmp/build.tar.gz"`;

	// Clean up local archive
	console.log('Cleaning up...');
	await $`rm ./build.tar.gz`;

	console.log('Deployment completed successfully!');
} catch (error) {
	console.error('Deployment failed:', error instanceof Error ? error.message : String(error));
	// Clean up local archive if it exists
	await $`rm -f ./build.tar.gz`.nothrow();
	process.exit(1);
}
