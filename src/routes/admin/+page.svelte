<script lang="ts">
	import { Check, X, Pencil, Trash2, Upload, Plus, Download } from '@lucide/svelte';
	import type { ActionData, PageData } from './$types';

	let { data, form }: { data: PageData; form: ActionData } = $props();

	let editingId = $state<string | null>(null);
	let editingName = $state('');

	function startEdit(cat: { id: string; de: string }) {
		editingId = cat.id;
		editingName = cat.de;
	}

	function cancelEdit() {
		editingId = null;
		editingName = '';
	}

	let selectedFileName = $state('');
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
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
	<title>Admin</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<div class="mx-auto max-w-3xl px-4 py-10">
		<h1 class="mb-8 text-xl font-bold text-gray-900">Referenzen verwalten</h1>

		{#if form?.error}
			<div class="mb-4 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
				{form.error}
			</div>
		{/if}
		{#if form?.success}
			<div
				class="mb-4 rounded border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
			>
				Gespeichert.
			</div>
		{/if}

		<!-- KATEGORIEN -->
		<section class="mb-10">
			<h2 class="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
				Kategorien
			</h2>

			<div class="divide-y rounded border bg-white">
				{#each data.categories as cat (cat.id)}
					<div class="flex min-h-[48px] items-center gap-3 px-4 py-2">
						<span class="w-5 shrink-0 text-center text-xs text-gray-400">{imageCount(cat.id)}</span>

						{#if editingId === cat.id}
							<form method="POST" action="?/renameCategory" class="flex flex-1 items-center gap-2">
								<input type="hidden" name="id" value={cat.id} />
								<input
									type="text"
									name="name"
									bind:value={editingName}
									required
									class="flex-1 rounded border px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
								/>
								<button
									type="submit"
									disabled={!editingName.trim() || editingName === cat.de}
									class="flex size-7 items-center justify-center rounded text-green-600 hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-30"
									title="Speichern"
								>
									<Check class="size-4" />
								</button>
								<button
									type="button"
									onclick={cancelEdit}
									class="flex size-7 items-center justify-center rounded text-gray-500 hover:bg-gray-100"
									title="Abbrechen"
								>
									<X class="size-4" />
								</button>
							</form>
						{:else}
							<span class="flex-1 text-sm text-gray-800">{cat.de}</span>
							<button
								type="button"
								onclick={() => startEdit(cat)}
								class="flex size-7 items-center justify-center rounded text-gray-400 hover:bg-gray-100 hover:text-gray-700"
								title="Umbenennen"
							>
								<Pencil class="size-4" />
							</button>
							<form
								method="POST"
								action="?/deleteCategory"
								onsubmit={(e) => {
									const count = imageCount(cat.id);
									const msg =
										count > 0
											? `Kategorie "${cat.de}" und ${count} Bild(er) löschen?`
											: `Kategorie "${cat.de}" löschen?`;
									if (!confirm(msg)) e.preventDefault();
								}}
							>
								<input type="hidden" name="id" value={cat.id} />
								<button
									type="submit"
									class="flex size-7 items-center justify-center rounded text-gray-400 hover:bg-red-50 hover:text-red-600"
									title="Löschen"
								>
									<Trash2 class="size-4" />
								</button>
							</form>
						{/if}
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
					class="flex shrink-0 items-center gap-1.5 rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
				>
					<Plus class="size-4" />
					Hinzufügen
				</button>
			</form>
		</section>

		<!-- BILDER -->
		<section>
			<h2 class="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">Bilder</h2>

			<!-- Upload -->
			<div class="mb-6 rounded border bg-white p-4">
				<form method="POST" action="?/uploadImage" enctype="multipart/form-data">
					<div class="grid gap-3 sm:grid-cols-2">
						<div class="sm:col-span-2">
							<p class="mb-1.5 text-xs font-medium text-gray-600">Datei</p>
							<div class="flex items-center gap-3">
								<label
									for="upload-file"
									class="inline-flex cursor-pointer items-center gap-1.5 rounded border border-gray-300 bg-white px-3 py-1.5 text-sm hover:bg-gray-50"
								>
									<Upload class="size-4 text-gray-500" />
									Datei wählen
								</label>
								<span class="text-sm text-gray-500">
									{selectedFileName || 'Keine Datei ausgewählt'}
								</span>
								<input
									id="upload-file"
									type="file"
									name="file"
									accept="image/*"
									class="hidden"
									onchange={(e) => {
										selectedFileName = e.currentTarget.files?.[0]?.name ?? '';
									}}
								/>
							</div>
						</div>
						<div>
							<label for="upload-category" class="mb-1 block text-xs font-medium text-gray-600"
								>Kategorie</label
							>
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
							<label for="upload-alt" class="mb-1 block text-xs font-medium text-gray-600">
								Alt-Text <span class="text-gray-400">(optional)</span>
							</label>
							<input
								id="upload-alt"
								type="text"
								name="alt"
								placeholder="Bildbeschreibung"
								class="w-full rounded border px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
							/>
						</div>
					</div>
					<div class="mt-3">
						<button
							type="submit"
							class="flex items-center gap-1.5 rounded bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
						>
							<Upload class="size-4" />
							Hochladen
						</button>
					</div>
				</form>
			</div>

			<!-- Filter -->
			<div class="mb-4">
				<select
					bind:value={filterCategoryId}
					class="rounded border px-2 py-1.5 text-sm focus:border-blue-500 focus:outline-none"
				>
					<option value="">Alle ({data.images.length})</option>
					{#each data.categories as cat}
						<option value={cat.id}>{cat.de} ({imageCount(cat.id)})</option>
					{/each}
				</select>
			</div>

			<!-- Image grid -->
			{#if filteredImages.length > 0}
				<div class="grid grid-cols-3 gap-3 sm:grid-cols-4">
					{#each filteredImages as img (img.filename)}
						<div class="group relative overflow-hidden rounded border bg-white">
							<div class="aspect-square overflow-hidden bg-gray-100">
								<img
									src="/api/references/image/{img.filename}"
									alt={img.alt}
									class="h-full w-full object-cover"
									loading="lazy"
								/>
							</div>
							<div class="px-2 py-1.5">
								<p class="truncate text-xs text-gray-600" title={img.filename}>{img.filename}</p>
								<p class="text-xs text-gray-400">{categoryName(img.categoryId)}</p>
							</div>
							<div
								class="absolute top-1 right-1 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100"
							>
								<a
									href="/api/references/image/{img.filename}"
									download={img.filename}
									class="flex size-6 items-center justify-center rounded bg-gray-700 text-white"
									title="Herunterladen"
								>
									<Download class="size-3.5" />
								</a>
								<form
									method="POST"
									action="?/deleteImage"
									onsubmit={(e) => {
										if (!confirm(`"${img.filename}" löschen?`)) e.preventDefault();
									}}
								>
									<input type="hidden" name="filename" value={img.filename} />
									<button
										type="submit"
										class="flex size-6 items-center justify-center rounded bg-red-600 text-white"
										title="Löschen"
									>
										<X class="size-3.5" />
									</button>
								</form>
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<p class="text-sm text-gray-400">Keine Bilder vorhanden.</p>
			{/if}
		</section>
	</div>
</div>
