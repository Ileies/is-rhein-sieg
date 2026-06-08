<script lang="ts">
	import type { ActionData, PageData } from './$types';

	let { data, form }: { data: PageData; form: ActionData } = $props();

	let filterCategoryId = $state('');

	const filteredImages = $derived(
		filterCategoryId
			? data.images.filter((img) => img.categoryId === filterCategoryId)
			: data.images
	);

	function categoryName(id: string): string {
		return data.categories.find((c) => c.id === id)?.de ?? id;
	}

	function imageCount(categoryId: string): number {
		return data.images.filter((img) => img.categoryId === categoryId).length;
	}

	function confirmDeleteCategory(catName: string, count: number, form: HTMLFormElement) {
		const msg =
			count > 0
				? `Kategorie "${catName}" und ${count} Bild(er) endgültig löschen?`
				: `Kategorie "${catName}" löschen?`;
		if (confirm(msg)) form.submit();
	}

	function confirmDeleteImage(filename: string, form: HTMLFormElement) {
		if (confirm(`Bild "${filename}" endgültig löschen?`)) form.submit();
	}
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
	<title>Admin - Referenzen</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 py-10">
	<div class="mx-auto max-w-4xl px-4">
		<h1 class="mb-8 text-2xl font-bold text-gray-900">Admin - Referenzen Galerie</h1>

		{#if form?.error}
			<div class="mb-4 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
				{form.error}
			</div>
		{/if}
		{#if form?.success}
			<div class="mb-4 rounded border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
				Gespeichert.
			</div>
		{/if}

		<!-- KATEGORIEN -->
		<section class="mb-10">
			<h2 class="mb-3 text-base font-semibold text-gray-700 uppercase tracking-wide">Kategorien</h2>

			<div class="divide-y rounded border bg-white">
				{#each data.categories as cat (cat.id)}
					<div class="flex items-center gap-3 px-4 py-3">
						<span class="w-6 shrink-0 text-center text-xs font-medium text-gray-400">
							{imageCount(cat.id)}
						</span>
						<form
							method="POST"
							action="?/renameCategory"
							class="flex flex-1 items-center gap-2"
						>
							<input type="hidden" name="id" value={cat.id} />
							<input
								type="text"
								name="name"
								value={cat.de}
								required
								class="flex-1 border-b border-transparent bg-transparent px-1 py-0.5 text-sm text-gray-800 focus:border-gray-400 focus:outline-none"
							/>
							<button
								type="submit"
								class="shrink-0 text-xs text-blue-600 hover:text-blue-800"
							>
								Speichern
							</button>
						</form>
						<form
							method="POST"
							action="?/deleteCategory"
							onsubmit={(e) => {
								e.preventDefault();
								confirmDeleteCategory(cat.de, imageCount(cat.id), e.currentTarget as HTMLFormElement);
							}}
						>
							<input type="hidden" name="id" value={cat.id} />
							<button type="submit" class="shrink-0 text-xs text-red-500 hover:text-red-700">
								Löschen
							</button>
						</form>
					</div>
				{/each}

				{#if data.categories.length === 0}
					<p class="px-4 py-3 text-sm text-gray-400">Keine Kategorien vorhanden.</p>
				{/if}
			</div>

			<form method="POST" action="?/addCategory" class="mt-3 flex gap-2">
				<input
					type="text"
					name="name"
					placeholder="Neue Kategorie"
					required
					class="flex-1 rounded border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
				/>
				<button
					type="submit"
					class="shrink-0 rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
				>
					Hinzufügen
				</button>
			</form>
		</section>

		<!-- BILDER -->
		<section>
			<h2 class="mb-3 text-base font-semibold text-gray-700 uppercase tracking-wide">Bilder</h2>

			<!-- Upload form -->
			<div class="mb-6 rounded border bg-white p-4">
				<h3 class="mb-3 text-sm font-semibold text-gray-700">Bild hochladen</h3>
				<form
					method="POST"
					action="?/uploadImage"
					enctype="multipart/form-data"
					class="grid gap-3 sm:grid-cols-3"
				>
					<div>
						<label for="upload-file" class="mb-1 block text-xs font-medium text-gray-600">Datei</label>
						<input
							id="upload-file"
							type="file"
							name="file"
							accept="image/*"
							required
							class="w-full text-sm text-gray-700"
						/>
					</div>
					<div>
						<label for="upload-category" class="mb-1 block text-xs font-medium text-gray-600">Kategorie</label>
						<select
							id="upload-category"
							name="categoryId"
							required
							class="w-full rounded border px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
						>
							{#each data.categories as cat}
								<option value={cat.id}>{cat.de}</option>
							{/each}
						</select>
					</div>
					<div>
						<label for="upload-alt" class="mb-1 block text-xs font-medium text-gray-600"
							>Alt-Text <span class="text-gray-400">(optional)</span></label
						>
						<input
							id="upload-alt"
							type="text"
							name="alt"
							placeholder="Bildbeschreibung"
							class="w-full rounded border px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
						/>
					</div>
					<div class="sm:col-span-3">
						<button
							type="submit"
							class="rounded bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
						>
							Hochladen
						</button>
					</div>
				</form>
			</div>

			<!-- Filter -->
			<div class="mb-4 flex items-center gap-3">
				<label for="filter-cat" class="text-sm font-medium text-gray-700">Filter:</label>
				<select
					id="filter-cat"
					bind:value={filterCategoryId}
					class="rounded border px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
				>
					<option value="">Alle Kategorien ({data.images.length})</option>
					{#each data.categories as cat}
						<option value={cat.id}>{cat.de} ({imageCount(cat.id)})</option>
					{/each}
				</select>
			</div>

			<!-- Image grid -->
			{#if filteredImages.length > 0}
				<div class="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
					{#each filteredImages as img (img.filename)}
						<div class="group relative overflow-hidden rounded border bg-white">
							<div class="aspect-square overflow-hidden">
								<img
									src="/api/references/image/{img.filename}"
									alt={img.alt}
									class="h-full w-full object-cover"
									loading="lazy"
								/>
							</div>
							<div class="p-2">
								<p class="truncate text-xs text-gray-600" title={img.filename}>{img.filename}</p>
								<p class="text-xs text-gray-400">{categoryName(img.categoryId)}</p>
							</div>
							<form
								method="POST"
								action="?/deleteImage"
								class="absolute top-1 right-1"
								onsubmit={(e) => {
									e.preventDefault();
									confirmDeleteImage(img.filename, e.currentTarget as HTMLFormElement);
								}}
							>
								<input type="hidden" name="filename" value={img.filename} />
								<button
									type="submit"
									class="flex size-6 items-center justify-center bg-red-600 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100"
									title="Löschen"
								>
									&times;
								</button>
							</form>
						</div>
					{/each}
				</div>
			{:else}
				<p class="text-sm text-gray-400">Keine Bilder vorhanden.</p>
			{/if}
		</section>
	</div>
</div>
