import { fail } from '@sveltejs/kit';
import { existsSync, mkdirSync, unlinkSync, writeFileSync } from 'fs';
import { join } from 'path';
import { getReferencesData, saveReferencesData, imagesDir } from '$lib/server/references';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return getReferencesData();
};

function slugify(name: string): string {
	return name
		.toLowerCase()
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export const actions: Actions = {
	addCategory: async ({ request }) => {
		const fd = await request.formData();
		const name = (fd.get('name') as string | null)?.trim();

		if (!name) return fail(400, { error: 'Name ist erforderlich.' });

		const data = getReferencesData();
		let id = slugify(name) || `cat-${Date.now()}`;
		if (data.categories.some((c) => c.id === id)) id = `${id}-${Date.now()}`;

		data.categories.push({ id, de: name, en: name, tr: name });
		saveReferencesData(data);
		return { success: true };
	},

	renameCategory: async ({ request }) => {
		const fd = await request.formData();
		const id = (fd.get('id') as string | null)?.trim();
		const name = (fd.get('name') as string | null)?.trim();

		if (!id || !name) return fail(400, { error: 'ID und Name sind erforderlich.' });

		const data = getReferencesData();
		const cat = data.categories.find((c) => c.id === id);
		if (!cat) return fail(404, { error: 'Kategorie nicht gefunden.' });

		cat.de = name;
		cat.en = name;
		cat.tr = name;
		saveReferencesData(data);
		return { success: true };
	},

	deleteCategory: async ({ request }) => {
		const fd = await request.formData();
		const id = (fd.get('id') as string | null)?.trim();

		if (!id) return fail(400, { error: 'ID ist erforderlich.' });

		const data = getReferencesData();
		const dir = imagesDir();

		for (const img of data.images.filter((i) => i.categoryId === id)) {
			const fp = join(dir, img.filename);
			if (existsSync(fp)) {
				try {
					unlinkSync(fp);
				} catch {
					// non-fatal
				}
			}
		}

		data.images = data.images.filter((i) => i.categoryId !== id);
		data.categories = data.categories.filter((c) => c.id !== id);
		saveReferencesData(data);
		return { success: true };
	},

	uploadImage: async ({ request }) => {
		const fd = await request.formData();
		const file = fd.get('file') as File | null;
		const categoryId = (fd.get('categoryId') as string | null)?.trim();
		const alt = (fd.get('alt') as string | null)?.trim();

		if (!file || file.size === 0) return fail(400, { error: 'Keine Datei ausgewählt.' });
		if (file.size > 10 * 1024 * 1024) return fail(400, { error: 'Datei zu groß (max. 10 MB).' });
		if (!file.type.startsWith('image/')) return fail(400, { error: 'Nur Bilddateien erlaubt.' });

		const data = getReferencesData();
		if (!categoryId || !data.categories.some((c) => c.id === categoryId)) {
			return fail(400, { error: 'Ungültige Kategorie.' });
		}

		const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
		const filename = `${Date.now()}_${safeName}`;

		const dir = imagesDir();
		mkdirSync(dir, { recursive: true });
		writeFileSync(join(dir, filename), Buffer.from(await file.arrayBuffer()));

		data.images.push({ filename, categoryId, alt: alt || safeName });
		saveReferencesData(data);
		return { success: true };
	},

	deleteImage: async ({ request }) => {
		const fd = await request.formData();
		const filename = (fd.get('filename') as string | null)?.trim();

		if (!filename) return fail(400, { error: 'Dateiname ist erforderlich.' });
		if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
			return fail(400, { error: 'Ungültiger Dateiname.' });
		}

		const fp = join(imagesDir(), filename);
		if (existsSync(fp)) {
			try {
				unlinkSync(fp);
			} catch {
				// non-fatal
			}
		}

		const data = getReferencesData();
		data.images = data.images.filter((i) => i.filename !== filename);
		saveReferencesData(data);
		return { success: true };
	}
};
