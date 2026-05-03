import type { RequestHandler } from './$types';

const pages = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/leistungen', priority: '0.9', changefreq: 'monthly' },
	{ path: '/kontakt', priority: '0.8', changefreq: 'monthly' },
	{ path: '/referenzen', priority: '0.7', changefreq: 'monthly' },
	{ path: '/ueber-uns', priority: '0.7', changefreq: 'monthly' }
];

export const GET: RequestHandler = ({ url }) => {
	const origin = url.origin;
	const lastmod = new Date().toISOString().split('T')[0];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		({ path, priority, changefreq }) => `  <url>
    <loc>${origin}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
