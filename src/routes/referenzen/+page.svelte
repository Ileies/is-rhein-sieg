<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { Phone, X, ChevronLeft, ChevronRight } from '@lucide/svelte';
	import { resolve } from '$app/paths';

	type Image = { src: string; alt: string; category: string };

	const allImages: Image[] = [
		{
			src: `/references/verschiebbareFliegengitter-1-scaled.jpeg`,
			alt: 'Verschiebbares Fliegengitter – Projekt 1',
			category: 'Verschiebare Fliegengitter'
		},
		{
			src: `/references/verschiebbareFliegengitter-2-scaled.jpeg`,
			alt: 'Verschiebbares Fliegengitter – Projekt 2',
			category: 'Verschiebare Fliegengitter'
		},
		{
			src: `/references/FliegengitterMass-1-scaled.jpeg`,
			alt: 'Fliegengitter nach Maß – Projekt 1',
			category: 'Fliegengitter nach Maß'
		},
		{
			src: `/references/FliegengitterMass-2-scaled.jpeg`,
			alt: 'Fliegengitter nach Maß – Projekt 2',
			category: 'Fliegengitter nach Maß'
		},
		{
			src: `/references/Fliegengitter-1-scaled.jpeg`,
			alt: 'Fliegengitter – Projekt 1',
			category: 'Fliegengitter'
		},
		{
			src: `/references/Fliegengitter-2-scaled.jpeg`,
			alt: 'Fliegengitter – Projekt 2',
			category: 'Fliegengitter'
		},
		{
			src: `/references/FliegengitterSanktaugustin-1-scaled.jpeg`,
			alt: 'Fliegengitter Sankt Augustin – Projekt 1',
			category: 'Sankt Augustin'
		},
		{
			src: `/references/FliegengitterSanktaugustin-2-scaled.jpeg`,
			alt: 'Fliegengitter Sankt Augustin – Projekt 2',
			category: 'Sankt Augustin'
		},
		{
			src: `/references/FliegengitterSanktaugustin-3-scaled.jpeg`,
			alt: 'Fliegengitter Sankt Augustin – Projekt 3',
			category: 'Sankt Augustin'
		},
		{
			src: `/references/FliegengitterSanktaugustin-4-scaled.jpeg`,
			alt: 'Fliegengitter Sankt Augustin – Projekt 4',
			category: 'Sankt Augustin'
		},
		{
			src: `/references/FliegengitterSanktaugustin-5-scaled.jpeg`,
			alt: 'Fliegengitter Sankt Augustin – Projekt 5',
			category: 'Sankt Augustin'
		},
		{
			src: `/references/FliegengitterSanktaugustin-6-scaled.jpeg`,
			alt: 'Fliegengitter Sankt Augustin – Projekt 6',
			category: 'Sankt Augustin'
		},
		{
			src: `/references/FliegengitterSanktaugustin-7-scaled.jpeg`,
			alt: 'Fliegengitter Sankt Augustin – Projekt 7',
			category: 'Sankt Augustin'
		},
		{
			src: `/references/FliegengitterSanktaugustin-8-scaled.jpeg`,
			alt: 'Fliegengitter Sankt Augustin – Projekt 8',
			category: 'Sankt Augustin'
		},
		{
			src: `/references/FliegengitterSanktaugustin-9-scaled.jpeg`,
			alt: 'Fliegengitter Sankt Augustin – Projekt 9',
			category: 'Sankt Augustin'
		},
		{
			src: `/references/FliegengitterSanktaugustin-10-scaled.jpeg`,
			alt: 'Fliegengitter Sankt Augustin – Projekt 10',
			category: 'Sankt Augustin'
		}
	];

	const categories = [
		'Alle',
		'Verschiebare Fliegengitter',
		'Fliegengitter nach Maß',
		'Fliegengitter',
		'Sankt Augustin'
	];

	let activeCategory = $state('Alle');
	let lightboxIndex = $state<number | null>(null);

	const filtered = $derived(
		activeCategory === 'Alle'
			? allImages
			: allImages.filter((img) => img.category === activeCategory)
	);

	function openLightbox(index: number) {
		lightboxIndex = index;
	}

	function closeLightbox() {
		lightboxIndex = null;
	}

	function prev() {
		if (lightboxIndex === null) return;
		lightboxIndex = (lightboxIndex - 1 + filtered.length) % filtered.length;
	}

	function next() {
		if (lightboxIndex === null) return;
		lightboxIndex = (lightboxIndex + 1) % filtered.length;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (lightboxIndex === null) return;
		if (e.key === 'Escape') closeLightbox();
		if (e.key === 'ArrowLeft') prev();
		if (e.key === 'ArrowRight') next();
	}
</script>

<svelte:head>
	<title>Referenzen – Insektenschutz Rhein-Sieg</title>
	<meta
		name="description"
		content="Referenzbilder von Insektenschutz Rhein-Sieg in Sankt Augustin – Fliegengitter, Maßanfertigung und verschiebbare Systeme in der Praxis."
	/>
	<meta property="og:title" content="Referenzen – Insektenschutz Rhein-Sieg" />
	<meta
		property="og:description"
		content="Referenzbilder von Insektenschutz Rhein-Sieg in Sankt Augustin – Fliegengitter, Maßanfertigung und verschiebbare Systeme in der Praxis."
	/>
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<!-- Hero -->
<section class="dark bg-background text-foreground">
	<div class="mx-auto max-w-315 px-6 py-20 md:py-28">
		<p class="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">Referenzen</p>
		<h1 class="mb-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
			Unsere Arbeiten<br />
			<span class="text-primary">in der Praxis</span>
		</h1>
		<p class="max-w-xl text-lg leading-relaxed text-secondary-foreground">
			Einblicke in abgeschlossene Projekte – von Standardfenstern bis hin zu großen Terrassenfronten
			und maßgefertigten Sonderlösungen in Sankt Augustin und der Rhein-Sieg-Region.
		</p>
	</div>
</section>

<!-- Gallery -->
<section class="bg-background">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-24">
		<!-- Filter tabs -->
		<div class="mb-10 flex flex-wrap gap-2">
			{#each categories as cat (cat)}
				<button
					onclick={() => (activeCategory = cat)}
					class="border px-4 py-2 text-sm font-medium transition-colors {activeCategory === cat
						? 'border-primary bg-primary text-primary-foreground'
						: 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'}"
				>
					{cat}
					{#if cat !== 'Alle'}
						<span class="ml-1.5 text-xs opacity-60">
							({allImages.filter((img) => img.category === cat).length})
						</span>
					{:else}
						<span class="ml-1.5 text-xs opacity-60">({allImages.length})</span>
					{/if}
				</button>
			{/each}
		</div>

		<!-- Image grid -->
		<div class="grid gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each filtered as img, i (img.src)}
				<button
					onclick={() => openLightbox(i)}
					class="group relative aspect-square overflow-hidden bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					aria-label="Bild vergrößern: {img.alt}"
				>
					<img
						src={img.src}
						alt={img.alt}
						class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
						loading="lazy"
					/>
					<div
						class="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20"
					></div>
					<div
						class="absolute right-0 bottom-0 left-0 translate-y-full bg-foreground/70 px-3 py-2 text-xs font-medium text-white transition-transform duration-300 group-hover:translate-y-0"
					>
						{img.category}
					</div>
				</button>
			{/each}
		</div>

		<p class="mt-6 text-sm text-muted-foreground">
			{filtered.length}
			{filtered.length === 1 ? 'Bild' : 'Bilder'} angezeigt
		</p>
	</div>
</section>

<!-- Lightbox -->
{#if lightboxIndex !== null}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
		onclick={closeLightbox}
		role="dialog"
		aria-modal="true"
		aria-label="Bildvorschau"
		tabindex="-1"
	>
		<!-- Close -->
		<button
			onclick={closeLightbox}
			class="absolute top-4 right-4 flex size-10 items-center justify-center text-white/70 transition-colors hover:text-white"
			aria-label="Schließen"
		>
			<X class="size-6" />
		</button>

		<!-- Prev -->
		{#if filtered.length > 1}
			<button
				onclick={(e) => {
					e.stopPropagation();
					prev();
				}}
				class="absolute left-4 flex size-10 items-center justify-center text-white/70 transition-colors hover:text-white"
				aria-label="Vorheriges Bild"
			>
				<ChevronLeft class="size-7" />
			</button>
		{/if}

		<!-- Image -->
		<div
			class="flex max-h-[90vh] max-w-[90vw] flex-col items-center gap-3"
			role="presentation"
			onclick={(e) => e.stopPropagation()}
		>
			<img
				src={filtered[lightboxIndex].src}
				alt={filtered[lightboxIndex].alt}
				class="max-h-[80vh] max-w-[90vw] object-contain"
			/>
			<p class="text-sm text-white/70">
				{filtered[lightboxIndex].alt} &nbsp;·&nbsp; {lightboxIndex + 1} / {filtered.length}
			</p>
		</div>

		<!-- Next -->
		{#if filtered.length > 1}
			<button
				onclick={(e) => {
					e.stopPropagation();
					next();
				}}
				class="absolute right-4 flex size-10 items-center justify-center text-white/70 transition-colors hover:text-white"
				aria-label="Nächstes Bild"
			>
				<ChevronRight class="size-7" />
			</button>
		{/if}
	</div>
{/if}

<!-- CTA -->
<section class="dark bg-background text-foreground">
	<div class="mx-auto max-w-315 px-6 py-20 md:py-28">
		<div class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">Ihr Projekt</p>
				<h2 class="text-3xl font-bold tracking-tight md:text-4xl">Ihr Zuhause als nächstes?</h2>
				<p class="mt-3 max-w-md text-sm leading-relaxed text-secondary-foreground">
					Wir beraten Sie kostenlos vor Ort, nehmen Maß und fertigen Ihre individuelle Lösung. Rufen
					Sie uns an oder stellen Sie direkt eine Anfrage.
				</p>
			</div>
			<div class="flex shrink-0 flex-col gap-3 sm:flex-row">
				<a
					href="tel:+4915565097031"
					class="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
				>
					<Phone class="size-4 shrink-0" />
					015565 097031
				</a>
				<a
					href={resolve('/kontakt')}
					class="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
				>
					Anfrage stellen
					<ArrowRight class="size-4 shrink-0" />
				</a>
			</div>
		</div>
	</div>
</section>
