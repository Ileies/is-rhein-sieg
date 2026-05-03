import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { runWithLocale, cookieName } from '$lib/messages';

const handleLocale: Handle = ({ event, resolve }) => {
	const locale = event.cookies.get(cookieName) ?? 'de';
	event.locals.locale = locale;
	return runWithLocale(locale, () =>
		resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%lang%', locale)
		})
	);
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

export const handle = sequence(handleLocale, handleSecurity);
