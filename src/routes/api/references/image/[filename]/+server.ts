import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { error } from '@sveltejs/kit';
import { imagesDir } from '$lib/server/references';

const MIME: Record<string, string> = {
	jpg: 'image/jpeg',
	jpeg: 'image/jpeg',
	png: 'image/png',
	webp: 'image/webp',
	gif: 'image/gif',
	avif: 'image/avif'
};

export function GET({ params }: { params: { filename: string } }) {
	const { filename } = params;

	if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
		error(400, 'Invalid filename');
	}

	const filepath = join(imagesDir(), filename);

	if (!existsSync(filepath)) {
		error(404, 'Image not found');
	}

	const buffer = readFileSync(filepath);
	const ext = filename.split('.').pop()?.toLowerCase() ?? '';
	const contentType = MIME[ext] ?? 'application/octet-stream';

	return new Response(buffer, {
		headers: {
			'Content-Type': contentType,
			'Cache-Control': 'public, max-age=31536000, immutable'
		}
	});
}
