import { getReferencesData } from '$lib/server/references';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	const data = getReferencesData();
	const locale = locals.locale as 'de' | 'en' | 'tr';

	return {
		categories: data.categories.map((cat) => ({
			id: cat.id,
			label: cat[locale] ?? cat.de
		})),
		images: data.images.map((img) => ({
			filename: img.filename,
			categoryId: img.categoryId,
			alt: img.alt
		}))
	};
};
