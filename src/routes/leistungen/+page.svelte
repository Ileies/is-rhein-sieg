<script lang="ts">
	import {
		ArrowRight,
		ArrowDown,
		Check,
		Phone,
		Ruler,
		Shield,
		Wrench,
		Leaf,
		Cat,
		Layers,
		House,
		Building2
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import {
		lst_head_title, lst_head_desc,
		lst_hero_label, lst_hero_h1_pre, lst_hero_h1_mid, lst_hero_h1_post, lst_hero_desc,
		lst_quicknav_aria,
		lst_anchor_flyscreen, lst_anchor_custom, lst_anchor_sliding,
		lst_products_label, lst_products_h2, lst_details,
		lst_flyscreen_product_label, lst_flyscreen_badge, lst_flyscreen_title,
		lst_flyscreen_p1, lst_flyscreen_p2, lst_flyscreen_variants_label,
		lst_flyscreen_v1, lst_flyscreen_v2, lst_flyscreen_v3, lst_flyscreen_v4, lst_flyscreen_v5,
		lst_flyscreen_cta,
		lst_custom_product_label, lst_custom_title, lst_custom_p1, lst_custom_p2,
		lst_custom_areas_label, lst_custom_a1, lst_custom_a2, lst_custom_a3, lst_custom_a4, lst_custom_a5,
		lst_custom_cta,
		lst_plissee_type_label, lst_plissee_title, lst_plissee_p1, lst_plissee_p2,
		lst_plissee_li1, lst_plissee_li2, lst_plissee_li3, lst_plissee_li4,
		lst_sliding_product_label, lst_sliding_badge, lst_sliding_h2_pre, lst_sliding_h2_post,
		lst_sliding_p1, lst_sliding_p2, lst_sliding_fits_label,
		lst_sliding_f1, lst_sliding_f2, lst_sliding_f3, lst_sliding_f4, lst_sliding_f5,
		lst_sliding_cta1, lst_sliding_cta2,
		lst_materials_label, lst_materials_h2_pre, lst_materials_h2_post, lst_materials_desc,
		lst_mat_alu_title, lst_mat_alu_desc,
		lst_mat_fiber_title, lst_mat_fiber_desc,
		lst_mat_steel_title, lst_mat_steel_desc,
		lst_mat_pollen_title, lst_mat_pollen_desc,
		lst_mat_pet_title, lst_mat_pet_desc,
		lst_mat_drill_title, lst_mat_drill_desc,
		lst_target_private_title, lst_target_private_desc,
		lst_target_business_title, lst_target_business_desc,
		lst_process_label, lst_process_h2,
		lst_step1_title, lst_step1_desc, lst_step2_title, lst_step2_desc,
		lst_step3_title, lst_step3_desc, lst_step4_title, lst_step4_desc,
		lst_cta_label, lst_cta_h2, lst_cta_desc,
		cta_call_now, cta_send_request
	} from '$lib/messages';
	import { PHONE } from '$lib/constants';

	const anchors = [
		{ label: lst_anchor_flyscreen(), id: 'fliegengitter' },
		{ label: lst_anchor_custom(), id: 'fliegengitter-nach-mass' },
		{ label: lst_anchor_sliding(), id: 'verschiebare-fliegengitter' }
	];

	const products = [
		{
			id: 'fliegengitter',
			title: lst_flyscreen_title(),
			img: `/references/FliegengitterSanktaugustin-4-scaled.jpeg`,
			description: lst_flyscreen_p1()
		},
		{
			id: 'fliegengitter-nach-mass',
			title: lst_custom_title(),
			img: `/references/FliegengitterMass-2-scaled.jpeg`,
			description: lst_custom_p1()
		},
		{
			id: 'verschiebare-fliegengitter',
			title: `${lst_sliding_h2_pre()} ${lst_sliding_h2_post()}`,
			img: `/references/verschiebbareFliegengitter-2-scaled.jpeg`,
			description: lst_sliding_p1()
		}
	];

	const materials = [
		{ icon: Layers, title: lst_mat_alu_title(), description: lst_mat_alu_desc() },
		{ icon: Shield, title: lst_mat_fiber_title(), description: lst_mat_fiber_desc() },
		{ icon: Ruler, title: lst_mat_steel_title(), description: lst_mat_steel_desc() },
		{ icon: Leaf, title: lst_mat_pollen_title(), description: lst_mat_pollen_desc() },
		{ icon: Cat, title: lst_mat_pet_title(), description: lst_mat_pet_desc() },
		{ icon: Wrench, title: lst_mat_drill_title(), description: lst_mat_drill_desc() }
	];

	const steps = [
		{ n: '01', title: lst_step1_title(), description: lst_step1_desc() },
		{ n: '02', title: lst_step2_title(), description: lst_step2_desc() },
		{ n: '03', title: lst_step3_title(), description: lst_step3_desc() },
		{ n: '04', title: lst_step4_title(), description: lst_step4_desc() }
	];

	const fliegengitterVariants = [
		lst_flyscreen_v1(), lst_flyscreen_v2(), lst_flyscreen_v3(), lst_flyscreen_v4(), lst_flyscreen_v5()
	];

	const massVariants = [
		lst_custom_a1(), lst_custom_a2(), lst_custom_a3(), lst_custom_a4(), lst_custom_a5()
	];

	const verschiebarAdvantages = [
		lst_sliding_f1(), lst_sliding_f2(), lst_sliding_f3(), lst_sliding_f4(), lst_sliding_f5()
	];

	const plisseeItems = [lst_plissee_li1(), lst_plissee_li2(), lst_plissee_li3(), lst_plissee_li4()];
</script>

<svelte:head>
	<title>{lst_head_title()}</title>
	<meta name="description" content={lst_head_desc()} />
	<meta property="og:title" content={lst_head_title()} />
	<meta property="og:description" content={lst_head_desc()} />
</svelte:head>

<!-- Hero -->
<section class="dark bg-background text-foreground">
	<div class="mx-auto max-w-315 px-6 py-20 md:py-28">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
			<div>
				<p class="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">{lst_hero_label()}</p>
				<h1 class="mb-6 max-w-xl text-4xl font-bold tracking-tight md:text-5xl">
					{lst_hero_h1_pre()}<br />
					<span class="text-primary">{lst_hero_h1_mid()}</span><br />
					{lst_hero_h1_post()}
				</h1>
				<p class="mb-8 max-w-md text-lg leading-relaxed text-secondary-foreground">
					{lst_hero_desc()}
				</p>
				<nav aria-label={lst_quicknav_aria()} class="flex flex-wrap gap-3">
					{#each anchors as { label, id } (id)}
						<a
							href="#{id}"
							class="inline-flex items-center gap-1.5 border border-border px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
						>
							{label}
							<ArrowDown class="size-3.5" />
						</a>
					{/each}
				</nav>
			</div>

			<div class="grid grid-cols-2 items-start gap-1">
				<div class="aspect-3/4 overflow-hidden">
					<img
						alt="Fliegengitter Montage – Fenster Außenansicht"
						class="h-full w-full object-cover"
						fetchpriority="high"
						src="/image-17-r96gjs0lvdm4xmbdstdv393xqbjb7x1v0l3gowpdoy.jpg"
					/>
				</div>
				<div class="mt-8 aspect-3/4 overflow-hidden">
					<img
						alt="Professionell montiertes Fliegengitter – Detailansicht"
						class="h-full w-full object-cover"
						fetchpriority="high"
						src="/image-18-r96gjzjbe1wfii0gkwmvn77mhei8xhvppmbcj4e8b6.jpg"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Produktübersicht -->
<section class="bg-secondary">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-24">
		<div class="mb-12">
			<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
				{lst_products_label()}
			</p>
			<h2 class="max-w-md text-3xl font-bold tracking-tight text-foreground md:text-4xl">
				{lst_products_h2()}
			</h2>
		</div>
		<div class="grid gap-px bg-border sm:grid-cols-3">
			{#each products as { id, title, img, description } (id)}
				<article class="flex flex-col bg-secondary">
					<div class="aspect-4/3 overflow-hidden">
						<img
							src={img}
							alt={title}
							class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
							loading="lazy"
						/>
					</div>
					<div class="flex flex-1 flex-col gap-4 p-6">
						<h3 class="text-xl font-bold text-foreground">{title}</h3>
						<p class="flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
						<a
							href="#{id}"
							class="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/70"
						>
							{lst_details()}
							<ArrowDown class="size-3.5" />
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Fliegengitter Detail -->
<section class="scroll-mt-24 bg-background" id="fliegengitter">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-28">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
			<div class="relative overflow-hidden">
				<img
					alt="Professionell montiertes Fliegengitter an einem Fenster"
					class="w-full object-cover lg:h-130"
					loading="lazy"
					src="/references/FliegengitterSanktaugustin-6-scaled.jpeg"
				/>
				<div class="absolute bottom-0 left-0 bg-primary px-5 py-3">
					<p class="text-sm font-semibold text-white">{lst_flyscreen_badge()}</p>
				</div>
			</div>
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">{lst_flyscreen_product_label()}</p>
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					{lst_flyscreen_title()}
				</h2>
				<p class="mb-4 leading-relaxed text-muted-foreground">
					{lst_flyscreen_p1()}
				</p>
				<p class="mb-8 leading-relaxed text-muted-foreground">
					{lst_flyscreen_p2()}
				</p>
				<p class="mb-4 text-sm font-semibold tracking-widest text-foreground uppercase">
					{lst_flyscreen_variants_label()}
				</p>
				<ul class="mb-8 space-y-2.5">
					{#each fliegengitterVariants as item (item)}
						<li class="flex items-start gap-3 text-sm">
							<Check class="mt-0.5 size-4 shrink-0 text-primary" />
							<span class="text-foreground">{item}</span>
						</li>
					{/each}
				</ul>
				<div class="flex flex-wrap gap-3">
					<a
						class="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
						href={PHONE.href}
					>
						<Phone class="size-4 shrink-0" />
						{lst_flyscreen_cta()}
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Fliegengitter nach Maß Detail -->
<section class="scroll-mt-24 bg-secondary" id="fliegengitter-nach-mass">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-28">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">{lst_custom_product_label()}</p>
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					{lst_custom_title()}
				</h2>
				<p class="mb-4 leading-relaxed text-muted-foreground">
					{lst_custom_p1()}
				</p>
				<p class="mb-6 leading-relaxed text-muted-foreground">
					{lst_custom_p2()}
				</p>

				<div class="mb-8 border border-border bg-background p-6">
					<p class="mb-4 text-sm font-semibold tracking-widest text-foreground uppercase">
						{lst_custom_areas_label()}
					</p>
					<ul class="space-y-2.5">
						{#each massVariants as item (item)}
							<li class="flex items-start gap-3 text-sm">
								<Check class="mt-0.5 size-4 shrink-0 text-primary" />
								<span class="text-foreground">{item}</span>
							</li>
						{/each}
					</ul>
				</div>

				<a
					class="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
					href={resolve('/kontakt')}
				>
					{lst_custom_cta()}
					<ArrowRight class="size-4 shrink-0" />
				</a>
			</div>
			<div class="relative overflow-hidden">
				<img
					alt="Maßgefertigtes Fliegengitter – perfekte Passform am Fenster"
					class="w-full object-cover lg:h-135"
					loading="lazy"
					src="/Fliegengitternachmass.jpg"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Plissee-Highlight -->
<section class="bg-background">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-24">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
			<div class="overflow-hidden">
				<img
					alt="Plissee-Fliegengitter – elegante Falttür-Lösung"
					class="w-full object-cover lg:h-105"
					loading="lazy"
					src="/PliesseFliegengitter.jpg"
				/>
			</div>
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">{lst_plissee_type_label()}</p>
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					{lst_plissee_title()}
				</h2>
				<p class="mb-4 leading-relaxed text-muted-foreground">
					{lst_plissee_p1()}
				</p>
				<p class="mb-8 leading-relaxed text-muted-foreground">
					{lst_plissee_p2()}
				</p>
				<ul class="space-y-2.5">
					{#each plisseeItems as item (item)}
						<li class="flex items-start gap-3 text-sm">
							<Check class="mt-0.5 size-4 shrink-0 text-primary" />
							<span class="text-foreground">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Verschiebare Fliegengitter Detail -->
<section class="scroll-mt-24 bg-secondary" id="verschiebare-fliegengitter">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-28">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
			<div class="relative overflow-hidden">
				<img
					alt="Verschiebbares Fliegengitter – großes Schiebesystem für Terrassentür"
					class="w-full object-cover lg:h-130"
					loading="lazy"
					src="/verschiebaresfleigengitter.jpg"
				/>
				<div class="absolute bottom-0 left-0 bg-primary px-5 py-3">
					<p class="text-sm font-semibold text-white">{lst_sliding_badge()}</p>
				</div>
			</div>
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">{lst_sliding_product_label()}</p>
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					{lst_sliding_h2_pre()}<br />{lst_sliding_h2_post()}
				</h2>
				<p class="mb-4 leading-relaxed text-muted-foreground">
					{lst_sliding_p1()}
				</p>
				<p class="mb-8 leading-relaxed text-muted-foreground">
					{lst_sliding_p2()}
				</p>

				<p class="mb-4 text-sm font-semibold tracking-widest text-foreground uppercase">
					{lst_sliding_fits_label()}
				</p>
				<ul class="mb-8 space-y-2.5">
					{#each verschiebarAdvantages as item (item)}
						<li class="flex items-start gap-3 text-sm">
							<Check class="mt-0.5 size-4 shrink-0 text-primary" />
							<span class="text-foreground">{item}</span>
						</li>
					{/each}
				</ul>

				<div class="flex flex-wrap gap-3">
					<a
						class="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
						href={PHONE.href}
					>
						<Phone class="size-4 shrink-0" />
						{lst_sliding_cta1()}
					</a>
					<a
						class="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
						href={resolve('/kontakt')}
					>
						{lst_sliding_cta2()}
						<ArrowRight class="size-4 shrink-0" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Materialien & Ausstattung -->
<section class="bg-background">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-24">
		<div class="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">{lst_materials_label()}</p>
				<h2 class="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					{lst_materials_h2_pre()}<br />{lst_materials_h2_post()}
				</h2>
			</div>
			<p class="leading-relaxed text-muted-foreground">
				{lst_materials_desc()}
			</p>
		</div>
		<div class="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
			{#each materials as { icon: Icon, title, description } (title)}
				<div class="flex gap-4 bg-background p-8">
					<span
						class="mt-0.5 flex size-9 shrink-0 items-center justify-center bg-primary/10 text-primary"
					>
						<Icon class="size-4" />
					</span>
					<div>
						<h3 class="mb-2 text-base font-bold text-foreground">{title}</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">{description}</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Zielgruppen -->
		<div class="mt-1 grid gap-px bg-border sm:grid-cols-2">
			<div class="flex gap-4 bg-background p-8">
				<span
					class="mt-0.5 flex size-9 shrink-0 items-center justify-center bg-primary/10 text-primary"
				>
					<House class="size-4" />
				</span>
				<div>
					<h3 class="mb-2 text-base font-bold text-foreground">{lst_target_private_title()}</h3>
					<p class="text-sm leading-relaxed text-muted-foreground">
						{lst_target_private_desc()}
					</p>
				</div>
			</div>
			<div class="flex gap-4 bg-background p-8">
				<span
					class="mt-0.5 flex size-9 shrink-0 items-center justify-center bg-primary/10 text-primary"
				>
					<Building2 class="size-4" />
				</span>
				<div>
					<h3 class="mb-2 text-base font-bold text-foreground">{lst_target_business_title()}</h3>
					<p class="text-sm leading-relaxed text-muted-foreground">
						{lst_target_business_desc()}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Ablauf -->
<section class="bg-secondary">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-24">
		<div class="mb-12">
			<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">{lst_process_label()}</p>
			<h2 class="max-w-md text-3xl font-bold tracking-tight text-foreground md:text-4xl">
				{lst_process_h2()}
			</h2>
		</div>
		<div class="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
			{#each steps as { n, title, description } (n)}
				<div class="flex flex-col gap-5 bg-secondary p-8">
					<span class="text-4xl leading-none font-bold text-primary tabular-nums">{n}</span>
					<div>
						<h3 class="mb-2 text-base font-bold text-foreground">{title}</h3>
						<p class="text-sm leading-relaxed text-muted-foreground">{description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="dark bg-background text-foreground">
	<div class="mx-auto max-w-315 px-6 py-20 md:py-28">
		<div class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
					{lst_cta_label()}
				</p>
				<h2 class="text-3xl font-bold tracking-tight md:text-4xl">{lst_cta_h2()}</h2>
				<p class="mt-3 max-w-md text-sm leading-relaxed text-secondary-foreground">
					{lst_cta_desc()}
				</p>
			</div>
			<div class="flex shrink-0 flex-col gap-3 sm:flex-row">
				<a
					class="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
					href={PHONE.href}
				>
					<Phone class="size-4 shrink-0" />
					{PHONE.display}
				</a>
				<a
					class="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
					href={resolve('/kontakt')}
				>
					{cta_send_request()}
					<ArrowRight class="size-4 shrink-0" />
				</a>
			</div>
		</div>
	</div>
</section>
