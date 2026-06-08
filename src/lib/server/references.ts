import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

export type Category = {
	id: string;
	de: string;
	en: string;
	tr: string;
};

export type ReferenceImage = {
	filename: string;
	categoryId: string;
	alt: string;
};

export type ReferencesData = {
	categories: Category[];
	images: ReferenceImage[];
};

export function imagesDir(): string {
	return join(process.cwd(), 'data', 'references');
}

function dataFilePath(): string {
	return join(process.cwd(), 'data', 'references.json');
}

export function getReferencesData(): ReferencesData {
	const path = dataFilePath();
	if (!existsSync(path)) return { categories: [], images: [] };
	return JSON.parse(readFileSync(path, 'utf-8')) as ReferencesData;
}

export function saveReferencesData(data: ReferencesData): void {
	const path = dataFilePath();
	const dir = dirname(path);
	if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
	writeFileSync(path, JSON.stringify(data, null, 2));
}
