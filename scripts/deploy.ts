import { $ } from 'bun';
import { access, writeFile } from 'fs/promises';

const SSH_HOST = 'hosting212287@202.61.233.108';
const REMOTE_DIR = '/insektenschutz-rhein-sieg.de';
const LOCAL_ARCHIVE = './build.tar.gz';
const REMOTE_ARCHIVE = '/tmp/insektenschutz-build.tar.gz';

async function remote(command: string) {
	await $`ssh ${SSH_HOST} ${command}`;
}

try {
	try {
		await access('build/index.js');
	} catch {
		throw new Error('Build output not found at build/index.js — run bun run build first');
	}

	console.log('Preparing build directory...');
	await writeFile(
		'build/app.js',
		"try { process.loadEnvFile('.env'); } catch {}\nimport('./index.js');\n"
	);
	await writeFile(
		'build/package.json',
		JSON.stringify({ main: 'app.js', type: 'module' }, null, '\t') + '\n'
	);

	console.log('Compressing build directory...');
	await $`tar -czf ${LOCAL_ARCHIVE} -C build .`;

	console.log('Uploading compressed build...');
	await $`scp ${LOCAL_ARCHIVE} ${SSH_HOST}:${REMOTE_ARCHIVE}`;

	console.log('Cleaning remote directory (preserving data/)...');
	await remote(`mkdir -p ${REMOTE_DIR}`);
	await remote(`find ${REMOTE_DIR} -mindepth 1 -maxdepth 1 ! -name 'data' -exec rm -rf {} +`);

	console.log('Extracting build on server...');
	await remote(`tar -xzf ${REMOTE_ARCHIVE} -C ${REMOTE_DIR}`);

	console.log('Uploading environment file...');
	await $`scp .env ${SSH_HOST}:${REMOTE_DIR}/.env`;

	console.log('Cleaning up temporary files...');
	await remote(`rm -f ${REMOTE_ARCHIVE}`);
	await $`rm -f ${LOCAL_ARCHIVE}`;

	console.log('Restarting application...');
	await remote(`mkdir -p ${REMOTE_DIR}/tmp && touch ${REMOTE_DIR}/tmp/restart.txt`);

	console.log('Deployment completed successfully!');
} catch (error) {
	console.error('Deployment failed:', error instanceof Error ? error.message : String(error));
	await $`rm -f ${LOCAL_ARCHIVE}`.nothrow();
	process.exit(1);
}
