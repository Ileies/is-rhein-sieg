import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { runWithLocale, cookieName } from '$lib/messages';
import { env } from '$env/dynamic/private';

const handleLocale: Handle = ({ event, resolve }) => {
	const locale = event.cookies.get(cookieName) ?? 'de';
	event.locals.locale = locale;
	return runWithLocale(locale, () =>
		resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%lang%', locale)
		})
	);
};

const handleAdmin: Handle = ({ event, resolve }) => {
	if (!event.url.pathname.startsWith('/admin')) return resolve(event);

	const password = env.ADMIN_PASSWORD;
	if (!password) return new Response('ADMIN_PASSWORD not configured', { status: 500 });

	const auth = event.request.headers.get('Authorization');
	if (!auth?.startsWith('Basic ')) {
		return new Response('Unauthorized', {
			status: 401,
			headers: { 'WWW-Authenticate': 'Basic realm="Admin"' }
		});
	}

	const decoded = Buffer.from(auth.slice(6), 'base64').toString('utf-8');
	const submitted = decoded.slice(decoded.indexOf(':') + 1);

	if (submitted !== password) {
		return new Response('Unauthorized', {
			status: 401,
			headers: { 'WWW-Authenticate': 'Basic realm="Admin"' }
		});
	}

	return resolve(event);
};

const CSRF_SAFE_METHODS = new Set(['GET', 'HEAD', 'OPTIONS']);

const handleSecurity: Handle = async ({ event, resolve }) => {
	const { method } = event.request;
	const { pathname, origin } = event.url;

	if (!CSRF_SAFE_METHODS.has(method) && pathname.startsWith('/api/')) {
		const requestOrigin = event.request.headers.get('origin');
		if (requestOrigin !== origin) {
			return new Response('Forbidden', { status: 403 });
		}
	}

	const response = await resolve(event);
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	return response;
};

export const handle = sequence(handleAdmin, handleLocale, handleSecurity);
