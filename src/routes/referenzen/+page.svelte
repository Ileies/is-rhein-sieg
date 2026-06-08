<script lang="ts">
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { Phone, X, ChevronLeft, ChevronRight } from '@lucide/svelte';
	import GoogleReviews from '$lib/components/GoogleReviews.svelte';
	import { resolve } from '$app/paths';
	import {
		ref_head_title, ref_head_desc,
		ref_hero_label, ref_hero_h1_pre, ref_hero_h1_post, ref_hero_desc,
		ref_cat_all,
		ref_img_expand,
		ref_count, ref_count_one,
		ref_lightbox_aria, ref_lightbox_close, ref_lightbox_prev, ref_lightbox_next,
		ref_cta_label, ref_cta_h2, ref_cta_desc,
		cta_send_request
	} from '$lib/messages';
	import { PHONE } from '$lib/constants';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	type DisplayImage = { src: string; alt: string; categoryId: string };

	const allImages: DisplayImage[] = $derived(
		data.images.map((img) => ({
			src: `/api/references/image/${img.filename}`,
			alt: img.alt,
			categoryId: img.categoryId
		}))
	);

	function categoryLabel(id: string): string {
		if (id === 'all') return ref_cat_all();
		return data.categories.find((c) => c.id === id)?.label ?? id;
	}

	let activeCategory = $state<string>('all');
	let lightboxIndex = $state<number | null>(null);

	const filtered = $derived(
		activeCategory === 'all'
			? allImages
			: allImages.filter((img) => img.categoryId === activeCategory)
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
	<title>{ref_head_title()}</title>
	<meta name="description" content={ref_head_desc()} />
	<meta property="og:title" content={ref_head_title()} />
	<meta property="og:description" content={ref_head_desc()} />
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<!-- Hero -->
<section class="dark bg-background text-foreground">
	<div class="mx-auto max-w-315 px-6 py-20 md:py-28">
		<p class="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">{ref_hero_label()}</p>
		<h1 class="mb-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
			{ref_hero_h1_pre()}<br />
			<span class="text-primary">{ref_hero_h1_post()}</span>
		</h1>
		<p class="max-w-xl text-lg leading-relaxed text-secondary-foreground">
			{ref_hero_desc()}
		</p>
	</div>
</section>

<!-- Gallery -->
<section class="bg-background">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-24">
		<!-- Filter tabs -->
		<div class="mb-10 flex flex-wrap gap-2">
			<button
				onclick={() => (activeCategory = 'all')}
				class="border px-4 py-2 text-sm font-medium transition-colors {activeCategory === 'all'
					? 'border-primary bg-primary text-primary-foreground'
					: 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'}"
			>
				{ref_cat_all()}
				<span class="ml-1.5 text-xs opacity-60">({allImages.length})</span>
			</button>
			{#each data.categories as cat (cat.id)}
				<button
					onclick={() => (activeCategory = cat.id)}
					class="border px-4 py-2 text-sm font-medium transition-colors {activeCategory === cat.id
						? 'border-primary bg-primary text-primary-foreground'
						: 'border-border text-muted-foreground hover:border-foreground hover:text-foreground'}"
				>
					{cat.label}
					<span class="ml-1.5 text-xs opacity-60">
						({allImages.filter((img) => img.categoryId === cat.id).length})
					</span>
				</button>
			{/each}
		</div>

		<!-- Image grid -->
		<div class="grid gap-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each filtered as img, i (img.src)}
				<button
					onclick={() => openLightbox(i)}
					class="group relative aspect-square overflow-hidden bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
					aria-label={ref_img_expand({ alt: img.alt })}
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
						{categoryLabel(img.categoryId)}
					</div>
				</button>
			{/each}
		</div>

		<p class="mt-6 text-sm text-muted-foreground">
			{filtered.length === 1 ? ref_count_one() : ref_count({ n: filtered.length })}
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
		aria-label={ref_lightbox_aria()}
		tabindex="-1"
	>
		<!-- Close -->
		<button
			onclick={closeLightbox}
			class="absolute top-4 right-4 flex size-10 items-center justify-center text-white/70 transition-colors hover:text-white"
			aria-label={ref_lightbox_close()}
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
				aria-label={ref_lightbox_prev()}
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
				aria-label={ref_lightbox_next()}
			>
				<ChevronRight class="size-7" />
			</button>
		{/if}
	</div>
{/if}

<GoogleReviews variant="secondary" />

<!-- CTA -->
<section class="dark bg-background text-foreground">
	<div class="mx-auto max-w-315 px-6 py-20 md:py-28">
		<div class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">{ref_cta_label()}</p>
				<h2 class="text-3xl font-bold tracking-tight md:text-4xl">{ref_cta_h2()}</h2>
				<p class="mt-3 max-w-md text-sm leading-relaxed text-secondary-foreground">
					{ref_cta_desc()}
				</p>
			</div>
			<div class="flex shrink-0 flex-col gap-3 sm:flex-row">
				<a
					href={PHONE.href}
					class="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
				>
					<Phone class="size-4 shrink-0" />
					{PHONE.display}
				</a>
				<a
					href={resolve('/kontakt')}
					class="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
				>
					{cta_send_request()}
					<ArrowRight class="size-4 shrink-0" />
				</a>
			</div>
		</div>
	</div>
</section>
