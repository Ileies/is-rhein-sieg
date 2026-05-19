import { describe, expect, it } from 'vitest';
import { cn } from './utils';

describe('cn', () => {
	it('merges class names', () => {
		expect(cn('foo', 'bar')).toBe('foo bar');
	});

	it('resolves Tailwind conflicts, last wins', () => {
		expect(cn('p-4', 'p-8')).toBe('p-8');
	});

	it('handles conditional classes', () => {
		expect(cn('base', false && 'skip', 'end')).toBe('base end');
	});

	it('flattens arrays and objects', () => {
		expect(cn(['a', 'b'], { c: true, d: false })).toBe('a b c');
	});

	it('returns an empty string for no input', () => {
		expect(cn()).toBe('');
	});
});
