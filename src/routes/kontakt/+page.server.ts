import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import {
	SMTP_HOST,
	SMTP_PORT,
	SMTP_USER,
	SMTP_PASS,
	MAIL_FROM,
	MAIL_TO
} from '$env/static/private';
import { checkRateLimit } from '$lib/server/rate-limiter';
import type { Actions } from './$types';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: Number(SMTP_PORT),
	secure: Number(SMTP_PORT) === 465,
	auth: { user: SMTP_USER, pass: SMTP_PASS }
});

export const actions: Actions = {
	default: async ({ request, getClientAddress }) => {
		const data = await request.formData();
		const name = (data.get('name') as string | null)?.trim() ?? '';
		const email = (data.get('email') as string | null)?.trim() ?? '';
		const phone = (data.get('phone') as string | null)?.trim() || null;
		const message = (data.get('message') as string | null)?.trim() ?? '';

		type FormErrors = { name?: string; email?: string; message?: string; _?: string };
		const values = { name, email, phone, message };

		const errors: FormErrors = {};
		if (name.length < 2) errors.name = 'Bitte geben Sie Ihren Namen ein.';
		if (!EMAIL_RE.test(email)) errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
		if (message.length < 10)
			errors.message = 'Bitte schreiben Sie eine Nachricht (mind. 10 Zeichen).';

		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, values });
		}

		if (!checkRateLimit(`contact:${getClientAddress()}`, 3, 60 * 60 * 1000)) {
			const rateLimitErrors: FormErrors = {
				_: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.'
			};
			return fail(429, { errors: rateLimitErrors, values });
		}

		await transporter.sendMail({
			from: MAIL_FROM,
			to: MAIL_TO,
			replyTo: `"${name}" <${email}>`,
			subject: `Kontaktanfrage von ${name}`,
			text: [`Name: ${name}`, `E-Mail: ${email}`, phone ? `Telefon: ${phone}` : null, ``, message]
				.filter((l) => l !== null)
				.join('\n'),
			html: `
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
				${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
				<hr />
				<p style="white-space:pre-wrap">${message.replace(/</g, '&lt;')}</p>
			`
		});

		return { success: true };
	}
};
