import { $ } from 'bun';

const SSH_HOST = 'hosting212287@202.61.233.108';
const REMOTE_DIR = '~/insektenschutz-rhein-sieg.de';

try {
	// Create restart.txt to trigger app restart on Plesk
	console.log('Creating restart.txt...');
	await $`touch ./build/restart.txt`;

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
