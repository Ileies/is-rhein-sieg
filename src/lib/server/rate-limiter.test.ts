import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { checkRateLimit } from './rate-limiter';

describe('checkRateLimit', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('allows the first request', () => {
		expect(checkRateLimit('rl-first', 3, 60_000)).toBe(true);
	});

	it('allows requests up to maxRequests within a window', () => {
		const key = 'rl-up-to-max';
		expect(checkRateLimit(key, 3, 60_000)).toBe(true);
		expect(checkRateLimit(key, 3, 60_000)).toBe(true);
		expect(checkRateLimit(key, 3, 60_000)).toBe(true);
	});

	it('blocks the request that exceeds maxRequests', () => {
		const key = 'rl-block';
		checkRateLimit(key, 2, 60_000);
		checkRateLimit(key, 2, 60_000);
		expect(checkRateLimit(key, 2, 60_000)).toBe(false);
	});

	it('stays blocked within the same window', () => {
		const key = 'rl-stays-blocked';
		checkRateLimit(key, 1, 60_000);
		expect(checkRateLimit(key, 1, 60_000)).toBe(false);
		vi.advanceTimersByTime(30_000);
		expect(checkRateLimit(key, 1, 60_000)).toBe(false);
	});

	it('resets after the window expires', () => {
		const key = 'rl-reset';
		checkRateLimit(key, 1, 60_000);
		expect(checkRateLimit(key, 1, 60_000)).toBe(false);
		vi.advanceTimersByTime(60_001);
		expect(checkRateLimit(key, 1, 60_000)).toBe(true);
	});

	it('uses independent windows per key', () => {
		checkRateLimit('rl-key-a', 1, 60_000);
		expect(checkRateLimit('rl-key-b', 1, 60_000)).toBe(true);
	});
});
