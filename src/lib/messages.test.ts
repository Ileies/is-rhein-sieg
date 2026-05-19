import { describe, expect, it } from 'vitest';
import {
	cta_call_now,
	cta_learn_more,
	getLocale,
	getLocales,
	getTextDirection,
	runWithLocale
} from './messages';

describe('getLocale', () => {
	it('returns "de" as the default locale in a Node.js context', () => {
		expect(getLocale()).toBe('de');
	});
});

describe('getLocales', () => {
	it('returns the full list of supported locales', () => {
		expect(getLocales()).toEqual(['de', 'en', 'tr']);
	});
});

describe('getTextDirection', () => {
	it('returns "ltr" for supported locales', () => {
		expect(getTextDirection('de')).toBe('ltr');
		expect(getTextDirection('en')).toBe('ltr');
		expect(getTextDirection('tr')).toBe('ltr');
	});

	it('returns "rtl" for RTL locales', () => {
		expect(getTextDirection('ar')).toBe('rtl');
		expect(getTextDirection('he')).toBe('rtl');
	});
});

describe('runWithLocale + message functions', () => {
	it('returns German strings for locale "de"', async () => {
		const result = await runWithLocale('de', () => cta_call_now());
		expect(result).toBe('Jetzt anrufen');
	});

	it('returns English strings for locale "en"', async () => {
		const result = await runWithLocale('en', () => cta_learn_more());
		expect(result).toBe('Learn more');
	});

	it('returns Turkish strings for locale "tr"', async () => {
		const result = await runWithLocale('tr', () => cta_call_now());
		expect(result).toBe('Şimdi ara');
	});

	it('isolates locale per async context', async () => {
		const [de, en, tr] = await Promise.all([
			runWithLocale('de', () => cta_call_now()),
			runWithLocale('en', () => cta_call_now()),
			runWithLocale('tr', () => cta_call_now())
		]);
		expect(de).toBe('Jetzt anrufen');
		expect(en).toBe('Call now');
		expect(tr).toBe('Şimdi ara');
	});
});
