import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { cookieName, cookieMaxAge, locales } from '$lib/messages';

export const POST: RequestHandler = async ({ request, cookies }) => {
	let raw: unknown;
	try {
		raw = await request.json();
	} catch {
		return json({ error: 'Invalid locale' }, { status: 400 });
	}
	const locale = (raw as Record<string, unknown>)?.locale;
	if (typeof locale !== 'string' || !(locales as readonly string[]).includes(locale)) {
		return json({ error: 'Invalid locale' }, { status: 400 });
	}
	cookies.set(cookieName, locale, { path: '/', maxAge: cookieMaxAge, sameSite: 'lax' });
	return json({ ok: true });
};
