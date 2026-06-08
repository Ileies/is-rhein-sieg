export const BUSINESS_NAME = 'Insektenschutz Rhein-Sieg';

export const OWNER_NAME = 'Taner Özyurt';

export const ADDRESS = {
	street: 'Ringstr. 7',
	city: 'Sankt Augustin',
	zip: '53757',
	state: 'Nordrhein-Westfalen',
	country: 'Germany',
	countryCode: 'DE',
	full: 'Ringstr. 7, 53757 Sankt Augustin',
} as const;

export const PHONE = {
	e164: '+4915565097031',
	display: '015565 097031',
	href: 'tel:+4915565097031',
} as const;

export const PHONE_ALT = {
	e164: '+4917661646603',
	display: '0176 61646603',
	href: 'tel:+4917661646603',
} as const;

export const EMAIL = 'info@insektenschutz-rhein-sieg.de';

export const WHATSAPP_HREF = `https://wa.me/${PHONE.e164.replace('+', '')}`;

export const INSTAGRAM_URL = 'https://www.instagram.com/insekten.schutz/';

export const GEO = {
	lat: 50.7563,
	lon: 7.1844,
} as const;

export const SERVICE_AREAS = [
	'Sankt Augustin',
	'Bonn',
	'Siegburg',
	'Troisdorf',
	'Hennef',
	'Königswinter',
	'Bad Honnef',
	'Niederkassel',
	'Lohmar',
	'Neunkirchen-Seelscheid',
] as const;
