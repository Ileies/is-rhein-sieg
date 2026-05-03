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

	const anchors = [
		{ label: 'Fliegengitter', id: 'fliegengitter' },
		{ label: 'Fliegengitter nach Maß', id: 'fliegengitter-nach-mass' },
		{ label: 'Verschiebbare Systeme', id: 'verschiebare-fliegengitter' }
	];

	const products = [
		{
			id: 'fliegengitter',
			title: 'Fliegengitter',
			img: `/references/FliegengitterSanktaugustin-4-scaled.jpeg`,
			description:
				'Zuverlässiger Schutz vor Fliegen und Mücken für Fenster und Türen – als Spannrahmen, Rollo oder Drehtür. Schnell montiert, wartungsarm, langlebig.'
		},
		{
			id: 'fliegengitter-nach-mass',
			title: 'Fliegengitter nach Maß',
			img: `/references/FliegengitterMass-2-scaled.jpeg`,
			description:
				'Individuell auf den Millimeter gefertigt – auch bei Sondermaßen, Dachfenstern und schwierigen Einbausituationen. Perfekte Passform, kein Klappern, kein Spalt.'
		},
		{
			id: 'verschiebare-fliegengitter',
			title: 'Verschiebare Fliegengitter',
			img: `/references/verschiebbareFliegengitter-2-scaled.jpeg`,
			description:
				'Laufruhige Schiebesysteme für große Terrassentüren, Hebe-Schiebetüren und Wintergärten. Mehrere Meter Breite kein Problem – maßgefertigt für Ihre Öffnung.'
		}
	];

	const materials = [
		{
			icon: Layers,
			title: 'Aluminiumrahmen',
			description:
				'Leicht, stabil und witterungsbeständig. Erhältlich in verschiedenen Farben und Oberflächen.'
		},
		{
			icon: Shield,
			title: 'Fiberglas-Gewebe',
			description:
				'Besonders feinmaschig, UV-beständig und leicht reinigbar. Der Klassiker für Fenster und Türen.'
		},
		{
			icon: Ruler,
			title: 'Edelstahl-Gewebe',
			description:
				'Extrem robust, kratzfest und ideal für stark beanspruchte Bereiche oder Haustierbesitzer.'
		},
		{
			icon: Leaf,
			title: 'Pollenschutzgewebe',
			description: 'Bis zu 80 % der Pollen werden zurückgehalten – ideal für Allergiker.'
		},
		{
			icon: Cat,
			title: 'Haustierlösungen',
			description:
				'Kratzfestes Gewebe und optionale Katzenklappe – damit auch Vierbeiner kein Problem sind.'
		},
		{
			icon: Wrench,
			title: 'Montage ohne Bohren',
			description:
				'Mietfreundliche Befestigung möglich – ideal für Mieter und denkmalgeschützte Gebäude.'
		}
	];

	const steps = [
		{
			n: '01',
			title: 'Kostenlose Beratung vor Ort',
			description:
				'Wir kommen zu Ihnen nach Hause oder in Ihre Gewerberäume und schauen uns die Situation gemeinsam an – unverbindlich, ohne versteckte Kosten.'
		},
		{
			n: '02',
			title: 'Präzise Maßnahme',
			description:
				'Jedes Maß wird sorgfältig aufgenommen – auf den Millimeter genau. So wird garantiert, dass Ihr Fliegengitter später perfekt sitzt.'
		},
		{
			n: '03',
			title: 'Individuelle Fertigung',
			description:
				'Auf Basis Ihrer Maße wird jedes Produkt einzeln gefertigt. Kein Konfektionsartikel, sondern echte Maßanfertigung aus hochwertigen Materialien.'
		},
		{
			n: '04',
			title: 'Professionelle Montage',
			description:
				'Wir bringen Ihre Fliegengitter fachgerecht an – inklusive Einweisung, Funktionskontrolle und direktem Ansprechpartner bei Fragen.'
		}
	];

	const fliegengitterVariants = [
		'Spannrahmen für Fenster aller Größen',
		'Dreh- und Pendeltüren für Balkone & Terrassen',
		'Rollsysteme für Dachfenster und Velux',
		'Schiebesysteme für große Glasfronten',
		'Lichtschachtabdeckungen gegen Insekten & Schmutz'
	];

	const massVariants = [
		'Sonderformen und nicht-rechtwinklige Öffnungen',
		'Dachfenster jeder Marke und Neigung',
		'Wintergärten und Glasdächer',
		'Historische Gebäude mit ungewöhnlichen Maßen',
		'Gewerberäume mit großen Öffnungen'
	];

	const verschiebarAdvantages = [
		'Für Öffnungen von 0,5 bis über 5 Meter Breite',
		'Ein- und mehrflügelige Konfigurationen',
		'Laufruhiges, wartungsarmes Schienensystem',
		'Dezentes Design, verschiedene Farben wählbar',
		'Langlebig und witterungsbeständig'
	];
</script>

<svelte:head>
	<title>Leistungen – Insektenschutz Rhein-Sieg</title>
	<meta
		name="description"
		content="Fliegengitter, Maßanfertigung und verschiebbare Systeme von Insektenschutz Rhein-Sieg in Sankt Augustin. Beratung, Fertigung und Montage aus einer Hand."
	/>
	<meta property="og:title" content="Leistungen – Insektenschutz Rhein-Sieg" />
	<meta
		property="og:description"
		content="Fliegengitter, Maßanfertigung und verschiebbare Systeme von Insektenschutz Rhein-Sieg in Sankt Augustin. Beratung, Fertigung und Montage aus einer Hand."
	/>
</svelte:head>

<!-- Hero -->
<section class="dark bg-background text-foreground">
	<div class="mx-auto max-w-315 px-6 py-20 md:py-28">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
			<div>
				<p class="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">Leistungen</p>
				<h1 class="mb-6 max-w-xl text-4xl font-bold tracking-tight md:text-5xl">
					Maßgefertigter<br />
					<span class="text-primary">Insektenschutz</span><br />
					aus einer Hand
				</h1>
				<p class="mb-8 max-w-md text-lg leading-relaxed text-secondary-foreground">
					Von der kostenlosen Vor-Ort-Beratung bis zur professionellen Montage – alles aus einer
					Hand. Für Fenster, Türen, Terrassenfronten und Dachfenster in Sankt Augustin und der
					gesamten Rhein-Sieg-Region.
				</p>
				<nav aria-label="Leistungen Schnellnavigation" class="flex flex-wrap gap-3">
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
				Unsere Produkte
			</p>
			<h2 class="max-w-md text-3xl font-bold tracking-tight text-foreground md:text-4xl">
				Die richtige Lösung für jeden Bedarf
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
							Details ansehen
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
					<p class="text-sm font-semibold text-white">Montage in Sankt Augustin</p>
				</div>
			</div>
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">Produkt</p>
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					Fliegengitter
				</h2>
				<p class="mb-4 leading-relaxed text-muted-foreground">
					Schützen Sie Ihr Zuhause zuverlässig vor Fliegen, Mücken und anderen Insekten – ohne auf
					Frischluft verzichten zu müssen. Unsere Fliegengitter werden passgenau für Ihre Fenster
					und Türen gefertigt und professionell montiert.
				</p>
				<p class="mb-8 leading-relaxed text-muted-foreground">
					Gerade in der Rhein-Sieg-Region, mit ihrer Lage zwischen Flüssen, Feldern und Grünflächen,
					sorgt ein guter Insektenschutz für echten Mehrwert im Alltag – besonders in den
					Sommermonaten.
				</p>
				<p class="mb-4 text-sm font-semibold tracking-widest text-foreground uppercase">
					Erhältlich als
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
						href="tel:+4915565097031"
					>
						<Phone class="size-4 shrink-0" />
						Jetzt anfragen
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
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">Produkt</p>
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					Fliegengitter nach Maß
				</h2>
				<p class="mb-4 leading-relaxed text-muted-foreground">
					Nicht jedes Fenster ist gleich. Sondermaße, Dachfenster, schräge Öffnungen oder alte
					Gebäude mit ungewöhnlichen Proportionen – für Standardprodukte aus dem Baumarkt eine echte
					Herausforderung.
				</p>
				<p class="mb-6 leading-relaxed text-muted-foreground">
					Unsere Maßanfertigungen sitzen perfekt: kein Klappern, keine Lücken, kein Kompromiss bei
					der Optik. Jedes Stück wird auf den Millimeter genau gefertigt und passt sich dem
					Fensterbild harmonisch an.
				</p>

				<div class="mb-8 border border-border bg-background p-6">
					<p class="mb-4 text-sm font-semibold tracking-widest text-foreground uppercase">
						Typische Einsatzbereiche
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
					Maßanfertigung anfragen
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
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">Produkttyp</p>
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					Plissee-Fliegengitter
				</h2>
				<p class="mb-4 leading-relaxed text-muted-foreground">
					Plissee-Systeme kombinieren maximalen Komfort mit elegantem Design. Der akkordeonartig
					gefaltete Gewebestreifen zieht sich beim Öffnen platzsparend zur Seite – ideal für Türen,
					die täglich mehrfach genutzt werden.
				</p>
				<p class="mb-8 leading-relaxed text-muted-foreground">
					Besonders beliebt für Balkontüren und Terrassenzugänge: kein störendes Rahmenwerk im
					Blickfeld, freier Durchgang, voller Insektenschutz.
				</p>
				<ul class="space-y-2.5">
					{#each ['Platzsparend – faltet sich vollständig zusammen', 'Keine Bodenschiene notwendig', 'Für Breiten bis ca. 1,60 m als Einzelflügel', 'Als Doppelplissee auch für breitere Öffnungen'] as item (item)}
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
					<p class="text-sm font-semibold text-white">Laufruhig & maßgefertigt</p>
				</div>
			</div>
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">Produkt</p>
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					Verschiebbare<br />Fliegengitter
				</h2>
				<p class="mb-4 leading-relaxed text-muted-foreground">
					Große Glasfronten und breite Terrassentüren sind klassische Schwachstellen beim
					Insektenschutz. Verschiebbare Systeme schließen diese Lücke zuverlässig – ohne
					Komforteinbußen.
				</p>
				<p class="mb-8 leading-relaxed text-muted-foreground">
					Der robuste Aluminiumrahmen mit eingespanntem Insektenschutzgewebe gleitet leise auf einem
					hochwertigen Schienensystem. Ein- oder mehrflügelig, je nach Öffnungsbreite – wir fertigen
					exakt nach Ihren Gegebenheiten.
				</p>

				<p class="mb-4 text-sm font-semibold tracking-widest text-foreground uppercase">
					Geeignet für
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
						href="tel:+4915565097031"
					>
						<Phone class="size-4 shrink-0" />
						Jetzt anfragen
					</a>
					<a
						class="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
						href={resolve('/kontakt')}
					>
						Anfrage stellen
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
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">Qualität</p>
				<h2 class="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					Materialien &<br />Ausstattungsoptionen
				</h2>
			</div>
			<p class="leading-relaxed text-muted-foreground">
				Wir setzen auf hochwertige Materialien, die langlebig, wartungsarm und optisch ansprechend
				sind. Je nach Bedarf und Anwendungsfall beraten wir Sie zur optimalen Kombination.
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
					<h3 class="mb-2 text-base font-bold text-foreground">Privatkunden</h3>
					<p class="text-sm leading-relaxed text-muted-foreground">
						Für Haus- und Wohnungsbesitzer sowie Mieter – mit oder ohne Bohren, für jedes Fenster
						und jede Tür, auch für Besonderheiten wie Dachfenster oder alte Gebäude.
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
					<h3 class="mb-2 text-base font-bold text-foreground">Gewerbekunden</h3>
					<p class="text-sm leading-relaxed text-muted-foreground">
						Für Büros, Gaststätten, Praxen und andere Gewerbeflächen – schnelle Umsetzung auch bei
						größeren Projekten mit mehreren Fenstern und Türen.
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
			<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">Unser Ablauf</p>
			<h2 class="max-w-md text-3xl font-bold tracking-tight text-foreground md:text-4xl">
				Von der Anfrage bis zur fertigen Montage
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
					Kostenlose Beratung
				</p>
				<h2 class="text-3xl font-bold tracking-tight md:text-4xl">Bereit für Ihren Schutz?</h2>
				<p class="mt-3 max-w-md text-sm leading-relaxed text-secondary-foreground">
					Wir kommen zu Ihnen, schauen uns alles an und beraten Sie kostenlos und unverbindlich.
					Rufen Sie uns an oder schreiben Sie uns – wir melden uns schnell zurück.
				</p>
			</div>
			<div class="flex shrink-0 flex-col gap-3 sm:flex-row">
				<a
					class="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
					href="tel:+4915565097031"
				>
					<Phone class="size-4 shrink-0" />
					015565 097031
				</a>
				<a
					class="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
					href={resolve('/kontakt')}
				>
					Anfrage stellen
					<ArrowRight class="size-4 shrink-0" />
				</a>
			</div>
		</div>
	</div>
</section>
