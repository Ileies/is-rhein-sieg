<script lang="ts">
	import { ArrowRight, Check, MapPin, Phone, Ruler, Shield, Wrench } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	const localBusinessSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Insektenschutz Rhein-Sieg',
		description:
			'Maßgefertigte Fliegengitter für Fenster, Türen und Terrassenfronten in Sankt Augustin und dem Rhein-Sieg-Kreis. Kostenlose Vor-Ort-Beratung und Montage aus einer Hand.',
		url: page.url.origin,
		telephone: '+4915565097031',
		email: 'info@insektenschutz-rhein-sieg.de',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Ringstr. 7',
			addressLocality: 'Sankt Augustin',
			postalCode: '53757',
			addressRegion: 'Nordrhein-Westfalen',
			addressCountry: 'DE'
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: '50.7563',
			longitude: '7.1844'
		},
		areaServed: [
			'Sankt Augustin',
			'Bonn',
			'Siegburg',
			'Troisdorf',
			'Hennef',
			'Königswinter',
			'Bad Honnef',
			'Niederkassel',
			'Lohmar',
			'Neunkirchen-Seelscheid'
		],
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
		{ icon: Check, label: 'Kostenlose Vor-Ort-Beratung' },
		{ icon: Ruler, label: 'Maßanfertigung auf den Millimeter' },
		{ icon: Shield, label: 'Hochwertige Materialien' },
		{ icon: Wrench, label: 'Montage & Reparaturservice' }
	];

	const products = [
		{
			href: `/leistungen#fliegengitter`,
			img: `/references/FliegengitterSanktaugustin-3-scaled.jpeg`,
			title: 'Fliegengitter',
			description:
				'Zuverlässiger Schutz vor Fliegen und Mücken für Fenster und Türen – als Spannrahmen, Rollo oder Drehtür.'
		},
		{
			href: `/leistungen#fliegengitter-nach-mass`,
			img: `/references/FliegengitterMass-1-scaled.jpeg`,
			title: 'Fliegengitter nach Maß',
			description:
				'Individuell gefertigt für Sondermaße, Dachfenster und schwierige Einbausituationen. Perfekte Passform, kein Klappern.'
		},
		{
			href: `/leistungen#verschiebare-fliegengitter`,
			img: `/references/verschiebbareFliegengitter-1-scaled.jpeg`,
			title: 'Verschiebare Fliegengitter',
			description:
				'Schiebesysteme für große Terrassentüren, Wintergärten und Hebe-Schiebetüren. Laufruhig und maßgefertigt.'
		}
	] as const;

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
	<title>Fliegengitter Sankt Augustin – Insektenschutz Rhein-Sieg</title>
	<meta
		name="description"
		content="Maßgefertigte Fliegengitter & Insektenschutz in Sankt Augustin. Kostenlose Vor-Ort-Beratung, präzise Maßanfertigung und Montage im Rhein-Sieg-Kreis aus einer Hand."
	/>
	<meta property="og:title" content="Fliegengitter Sankt Augustin – Insektenschutz Rhein-Sieg" />
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
			Ihr Experte für<br />
			<span class="text-primary">Insektenschutz</span><br />
			und Fliegengitter
		</h1>
		<p class="mb-10 max-w-xl text-lg leading-relaxed text-white/80">
			Hochwertige, maßgefertigte Fliegengitter für Ihr Zuhause oder Ihre Gewerberäume – von der
			Beratung bis zur Montage aus einer Hand.
		</p>
		<div class="flex flex-wrap gap-4">
			<a
				href="tel:+4915565097031"
				class="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
			>
				<Phone class="size-4 shrink-0" />
				Jetzt anrufen
			</a>
			<a
				href={resolve('/leistungen')}
				class="inline-flex items-center gap-2 border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
			>
				Leistungen ansehen
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
					<p class="text-sm font-semibold text-white">Ohne Schutz keine Ruhe.</p>
				</div>
			</div>
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">Das Problem</p>
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					Der Sommer in der<br />Rhein-Sieg-Region
				</h2>
				<p class="mb-6 leading-relaxed text-muted-foreground">
					Die Lage zwischen Rhein, Sieg, Feldern und Grünflächen macht Sankt Augustin und den
					Rhein-Sieg-Kreis besonders attraktiv – aber auch zu einem Paradies für Mücken und Fliegen.
					Sobald es warm wird, sind offene Fenster und Türen die Haupteinfallstore.
				</p>
				<p class="mb-8 leading-relaxed text-muted-foreground">
					Professioneller Insektenschutz schafft dauerhaft Abhilfe – unauffällig und ohne
					Komfortverlust. Wir beraten Sie kostenlos vor Ort und fertigen die Lösung exakt nach Maß.
				</p>
				<ul class="space-y-3">
					{#each ['Für Fenster, Türen, Terrassenfronten & Dachfenster', 'Für Mieter: Montage ohne Bohren möglich', 'Optionen für Allergiker & Haustierbesitzer'] as item (item)}
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
			<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">Leistungen</p>
			<h2 class="max-w-md text-3xl font-bold tracking-tight text-foreground md:text-4xl">
				Maßgeschneiderte Lösungen für jeden Bedarf
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
							Mehr erfahren <ArrowRight class="size-3.5" />
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
				Alle Leistungen im Überblick
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
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">Über uns</p>
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					Persönlicher Service,<br />handwerkliche Qualität
				</h2>
				<p class="mb-5 leading-relaxed text-muted-foreground">
					Insektenschutz Rhein-Sieg ist ein inhabergeführter Fachbetrieb aus Sankt Augustin. Inhaber <strong
						class="text-foreground">Taner Özyurt</strong
					> berät Sie persönlich vor Ort, nimmt selbst Maß und sorgt für eine fachgerechte Montage – ohne
					Umwege, ohne Callcenter.
				</p>
				<p class="mb-8 leading-relaxed text-muted-foreground">
					Als regionaler Betrieb kennen wir die Gegebenheiten in Sankt Augustin und dem gesamten
					Rhein-Sieg-Kreis. Kurze Wege, schnelle Termine und eine direkte Ansprechperson – das ist
					unser Versprechen.
				</p>
				<div class="mb-8 flex items-center gap-3">
					<MapPin class="size-4 shrink-0 text-primary" />
					<span class="text-sm text-muted-foreground">Ringstr. 7, 53757 Sankt Augustin</span>
				</div>
				<a
					href={resolve('/ueber-uns')}
					class="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/70"
				>
					Mehr über uns erfahren <ArrowRight class="size-3.5" />
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
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">Referenzen</p>
				<h2 class="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					Unsere Arbeiten in der Praxis
				</h2>
			</div>
			<a
				href={resolve('/referenzen')}
				class="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/70"
			>
				Alle Referenzen ansehen <ArrowRight class="size-3.5" />
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
					Kostenlose Beratung
				</p>
				<h2 class="text-3xl font-bold tracking-tight md:text-4xl">Bereit für mehr Wohnqualität?</h2>
				<p class="mt-3 max-w-md text-sm leading-relaxed text-secondary-foreground">
					Wir kommen zu Ihnen, messen kostenlos aus und beraten Sie unverbindlich. Rufen Sie uns
					einfach an oder schreiben Sie uns.
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
					href="mailto:info@insektenschutz-rhein-sieg.de"
					class="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
				>
					E-Mail schreiben
				</a>
			</div>
		</div>
	</div>
</section>
