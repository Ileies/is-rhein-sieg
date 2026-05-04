<script lang="ts">
	import { ArrowRight, Check, MapPin, Phone, Ruler, Shield, Wrench } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import {
		home_hero_h1_pre, home_hero_h1_mid, home_hero_h1_post,
		home_hero_desc, home_hero_cta_services,
		home_usp_consultation, home_usp_custom, home_usp_quality, home_usp_service,
		home_problem_badge, home_problem_label,
		home_problem_h2_pre, home_problem_h2_post,
		home_problem_p1, home_problem_p2,
		home_problem_li1, home_problem_li2, home_problem_li3,
		home_services_label, home_services_h2,
		home_product_flyscreen_title, home_product_flyscreen_desc,
		home_product_custom_title, home_product_custom_desc,
		home_product_sliding_title, home_product_sliding_desc,
		home_product_cta,
		home_about_label, home_about_h2_pre, home_about_h2_post,
		home_about_p1, home_about_p2, home_about_cta,
		home_refs_label, home_refs_h2, home_refs_cta,
		home_cta_label, home_cta_h2, home_cta_desc,
		cta_call_now, cta_send_email, cta_all_services
	} from '$lib/messages';
	import { BUSINESS_NAME, OWNER_NAME, ADDRESS, PHONE, EMAIL, GEO, SERVICE_AREAS } from '$lib/constants';
	import { page } from '$app/state';

	const localBusinessSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: BUSINESS_NAME,
		description:
			'Maßgefertigte Fliegengitter für Fenster, Türen und Terrassenfronten in Sankt Augustin und dem Rhein-Sieg-Kreis. Kostenlose Vor-Ort-Beratung und Montage aus einer Hand.',
		url: page.url.origin,
		telephone: PHONE.e164,
		email: EMAIL,
		address: {
			'@type': 'PostalAddress',
			streetAddress: ADDRESS.street,
			addressLocality: ADDRESS.city,
			postalCode: ADDRESS.zip,
			addressRegion: ADDRESS.state,
			addressCountry: ADDRESS.countryCode
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: String(GEO.lat),
			longitude: String(GEO.lon)
		},
		areaServed: [...SERVICE_AREAS],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Insektenschutz',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Fliegengitter',
						description: 'Zuverlässiger Schutz vor Fliegen und Mücken für Fenster und Türen'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Fliegengitter nach Maß',
						description:
							'Individuell gefertigte Fliegengitter für Sondermaße und schwierige Einbausituationen'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Verschiebbare Fliegengitter',
						description: 'Schiebesysteme für große Terrassentüren und Wintergärten'
					}
				}
			]
		}
	});

	const usps = [
		{ icon: Check, label: home_usp_consultation() },
		{ icon: Ruler, label: home_usp_custom() },
		{ icon: Shield, label: home_usp_quality() },
		{ icon: Wrench, label: home_usp_service() }
	];

	const products = [
		{
			href: `/leistungen#fliegengitter`,
			img: `/references/FliegengitterSanktaugustin-3-scaled.jpeg`,
			title: home_product_flyscreen_title(),
			description: home_product_flyscreen_desc()
		},
		{
			href: `/leistungen#fliegengitter-nach-mass`,
			img: `/references/FliegengitterMass-1-scaled.jpeg`,
			title: home_product_custom_title(),
			description: home_product_custom_desc()
		},
		{
			href: `/leistungen#verschiebare-fliegengitter`,
			img: `/references/verschiebbareFliegengitter-1-scaled.jpeg`,
			title: home_product_sliding_title(),
			description: home_product_sliding_desc()
		}
	];

	const problemItems = [home_problem_li1(), home_problem_li2(), home_problem_li3()];

	const referencePreview = [
		{
			src: `/references/FliegengitterSanktaugustin-1-scaled.jpeg`,
			alt: 'Fliegengitter Montage – Mehrfamilienhaus Sankt Augustin'
		},
		{
			src: `/references/FliegengitterSanktaugustin-5-scaled.jpeg`,
			alt: 'Verschiebbares Fliegengitter – Terrassentür'
		},
		{
			src: `/references/FliegengitterSanktaugustin-8-scaled.jpeg`,
			alt: 'Fliegengitter – Fenster Außenansicht'
		},
		{
			src: `/references/verschiebbareFliegengitter-2-scaled.jpeg`,
			alt: 'Verschiebbares Fliegengitter – Großformat'
		}
	];
</script>

<svelte:head>
	<title>Fliegengitter {ADDRESS.city} – {BUSINESS_NAME}</title>
	<meta
		name="description"
		content="Maßgefertigte Fliegengitter & Insektenschutz in Sankt Augustin. Kostenlose Vor-Ort-Beratung, präzise Maßanfertigung und Montage im Rhein-Sieg-Kreis aus einer Hand."
	/>
	<meta property="og:title" content="Fliegengitter {ADDRESS.city} – {BUSINESS_NAME}" />
	<meta
		property="og:description"
		content="Maßgefertigte Fliegengitter & Insektenschutz in Sankt Augustin. Kostenlose Vor-Ort-Beratung, präzise Maßanfertigung und Montage im Rhein-Sieg-Kreis aus einer Hand."
	/>
	{@html `<script type="application/ld+json">${JSON.stringify(localBusinessSchema)}<\/script>`}
</svelte:head>

<!-- Hero -->
<section class="dark relative overflow-hidden text-foreground">
	<img
		src="/heroinsektanschutz.jpg"
		alt=""
		aria-hidden="true"
		class="absolute inset-0 h-full w-full object-cover object-center"
		fetchpriority="high"
	/>
	<div class="absolute inset-0 bg-black/60"></div>
	<div class="relative mx-auto max-w-315 px-6 py-32 md:py-44">
		<p class="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
			Sankt Augustin · Rhein-Sieg-Kreis
		</p>
		<h1
			class="mb-6 max-w-2xl text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
		>
			{home_hero_h1_pre()}<br />
			<span class="text-primary">{home_hero_h1_mid()}</span><br />
			{home_hero_h1_post()}
		</h1>
		<p class="mb-10 max-w-xl text-lg leading-relaxed text-white/80">
			{home_hero_desc()}
		</p>
		<div class="flex flex-wrap gap-4">
			<a
				href={PHONE.href}
				class="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
			>
				<Phone class="size-4 shrink-0" />
				{cta_call_now()}
			</a>
			<a
				href={resolve('/leistungen')}
				class="inline-flex items-center gap-2 border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
			>
				{home_hero_cta_services()}
				<ArrowRight class="size-4 shrink-0" />
			</a>
		</div>
	</div>
</section>

<!-- USPs -->
<section class="bg-secondary">
	<div class="mx-auto max-w-315 px-6 py-12">
		<ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each usps as { icon: Icon, label } (label)}
				<li class="flex items-center gap-3">
					<span class="flex size-9 shrink-0 items-center justify-center bg-primary/10 text-primary">
						<Icon class="size-4" />
					</span>
					<span class="text-sm font-medium text-foreground">{label}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Problem → Lösung -->
<section class="bg-background">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-28">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
			<div class="relative overflow-hidden">
				<img
					src="/mueckenschutz-r989vj9majqz2bueu856xyjqzigwr1feldjm2twbv0.jpg"
					alt="Mücken und Insekten an einem offenen Fenster"
					class="w-full object-cover lg:h-120"
					loading="lazy"
				/>
				<div class="absolute bottom-0 left-0 bg-primary px-5 py-3">
					<p class="text-sm font-semibold text-white">{home_problem_badge()}</p>
				</div>
			</div>
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">{home_problem_label()}</p>
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					{home_problem_h2_pre()}<br />{home_problem_h2_post()}
				</h2>
				<p class="mb-6 leading-relaxed text-muted-foreground">{home_problem_p1()}</p>
				<p class="mb-8 leading-relaxed text-muted-foreground">{home_problem_p2()}</p>
				<ul class="space-y-3">
					{#each problemItems as item (item)}
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

<!-- Leistungen -->
<section class="bg-secondary">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-28">
		<div class="mb-12">
			<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">{home_services_label()}</p>
			<h2 class="max-w-md text-3xl font-bold tracking-tight text-foreground md:text-4xl">
				{home_services_h2()}
			</h2>
		</div>
		<div class="grid gap-px bg-border sm:grid-cols-3">
			{#each products as { href, img, title, description } (href)}
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
							href={resolve(href)}
							class="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/70"
						>
							{home_product_cta()} <ArrowRight class="size-3.5" />
						</a>
					</div>
				</article>
			{/each}
		</div>
		<div class="mt-8 text-center">
			<a
				href={resolve('/leistungen')}
				class="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
			>
				{cta_all_services()}
				<ArrowRight class="size-4 shrink-0" />
			</a>
		</div>
	</div>
</section>

<!-- Über uns Teaser -->
<section class="bg-background">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-28">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">{home_about_label()}</p>
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					{home_about_h2_pre()}<br />{home_about_h2_post()}
				</h2>
				<p class="mb-5 leading-relaxed text-muted-foreground">
					{home_about_p1({ owner: OWNER_NAME })}
				</p>
				<p class="mb-8 leading-relaxed text-muted-foreground">
					{home_about_p2()}
				</p>
				<div class="mb-8 flex items-center gap-3">
					<MapPin class="size-4 shrink-0 text-primary" />
					<span class="text-sm text-muted-foreground">{ADDRESS.full}</span>
				</div>
				<a
					href={resolve('/ueber-uns')}
					class="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/70"
				>
					{home_about_cta()} <ArrowRight class="size-3.5" />
				</a>
			</div>
			<div class="overflow-hidden">
				<img
					src="/fliegengitterhaus-r989v9v73a2scdgn2zqf5mm6pjd470hgzwo3pbf7bk.jpg"
					alt="Kundin zeigt ihr neues Fliegengitter"
					class="w-full object-cover lg:h-125"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Referenzen-Vorschau -->
<section class="bg-secondary">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-28">
		<div class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">{home_refs_label()}</p>
				<h2 class="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					{home_refs_h2()}
				</h2>
			</div>
			<a
				href={resolve('/referenzen')}
				class="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/70"
			>
				{home_refs_cta()} <ArrowRight class="size-3.5" />
			</a>
		</div>
		<div class="grid grid-cols-2 gap-1 lg:grid-cols-4">
			{#each referencePreview as { src, alt } (src)}
				<a
					href={resolve('/referenzen')}
					class="group relative block aspect-square overflow-hidden bg-muted"
				>
					<img
						{src}
						{alt}
						class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
						loading="lazy"
					/>
					<div
						class="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20"
					></div>
				</a>
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
					{home_cta_label()}
				</p>
				<h2 class="text-3xl font-bold tracking-tight md:text-4xl">{home_cta_h2()}</h2>
				<p class="mt-3 max-w-md text-sm leading-relaxed text-secondary-foreground">
					{home_cta_desc()}
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
					href="mailto:{EMAIL}"
					class="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
				>
					{cta_send_email()}
				</a>
			</div>
		</div>
	</div>
</section>
