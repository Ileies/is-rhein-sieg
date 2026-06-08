import { env } from '$env/dynamic/private';

export async function load({ request }: { request: Request }) {
	const password = env.ADMIN_PASSWORD;

	if (!password) {
		throw new Response('ADMIN_PASSWORD not configured', { status: 500 });
	}

	const authHeader = request.headers.get('Authorization');

	if (!authHeader?.startsWith('Basic ')) {
		throw new Response('Unauthorized', {
			status: 401,
			headers: { 'WWW-Authenticate': 'Basic realm="Admin"' }
		});
	}

	let decoded: string;
	try {
		decoded = Buffer.from(authHeader.slice(6), 'base64').toString('utf-8');
	} catch {
		throw new Response('Unauthorized', {
			status: 401,
			headers: { 'WWW-Authenticate': 'Basic realm="Admin"' }
		});
	}

	const colonIndex = decoded.indexOf(':');
	const submitted = colonIndex >= 0 ? decoded.slice(colonIndex + 1) : decoded;

	if (submitted !== password) {
		throw new Response('Unauthorized', {
			status: 401,
			headers: { 'WWW-Authenticate': 'Basic realm="Admin"' }
		});
	}
}
