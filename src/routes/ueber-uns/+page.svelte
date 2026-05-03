<script lang="ts">
	import {
		ArrowRight,
		Check,
		MapPin,
		Phone,
		Ruler,
		Shield,
		Star,
		Users,
		Wrench
	} from '@lucide/svelte';
	import { resolve } from '$app/paths';

	const values = [
		{
			icon: Check,
			title: 'Kostenlose Vor-Ort-Beratung',
			description:
				'Wir kommen zu Ihnen nach Hause und beraten Sie unverbindlich – ohne versteckte Kosten.'
		},
		{
			icon: Ruler,
			title: 'Maßanfertigung auf den Millimeter',
			description:
				'Jedes Fliegengitter wird individuell für Ihr Fenster, Ihre Tür oder Ihr Dachfenster gefertigt.'
		},
		{
			icon: Wrench,
			title: 'Vollservice aus einer Hand',
			description:
				'Von der Beratung über die Maßanfertigung bis zur professionellen Montage – alles aus einer Hand.'
		},
		{
			icon: Shield,
			title: 'Hochwertige Materialien',
			description:
				'Aluminiumrahmen, Edelstahl- und Fiberglas-Gewebe sowie optional Pollenschutzfilter und Haustierlösungen.'
		},
		{
			icon: Star,
			title: 'Mietfreundliche Montage',
			description: 'Auf Wunsch montieren wir ohne Bohren – ideal für Mieter und Mietwohnungen.'
		},
		{
			icon: Users,
			title: 'Privat & gewerblich',
			description:
				'Wir betreuen sowohl Privatpersonen als auch gewerbliche Kunden in der gesamten Region.'
		}
	];

	const areas = [
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
	];
</script>

<svelte:head>
	<title>Über uns – Insektenschutz Rhein-Sieg</title>
	<meta
		name="description"
		content="Insektenschutz Rhein-Sieg in Sankt Augustin – Ihr regionaler Experte für Fliegengitter und Insektenschutz. Inhaber Taner Özyurt bietet Beratung, Maßanfertigung und Montage."
	/>
	<meta property="og:title" content="Über uns – Insektenschutz Rhein-Sieg" />
	<meta
		property="og:description"
		content="Insektenschutz Rhein-Sieg in Sankt Augustin – Ihr regionaler Experte für Fliegengitter und Insektenschutz. Inhaber Taner Özyurt bietet Beratung, Maßanfertigung und Montage."
	/>
</svelte:head>

<!-- Hero -->
<section class="dark bg-background text-foreground">
	<div class="mx-auto max-w-315 px-6 py-20 md:py-28">
		<p class="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">Über uns</p>
		<h1 class="mb-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
			Ihr regionaler Experte<br />
			für <span class="text-primary">Insektenschutz</span><br />
			im Rhein-Sieg-Kreis
		</h1>
		<p class="max-w-xl text-lg leading-relaxed text-secondary-foreground">
			Insektenschutz Rhein-Sieg steht für persönlichen Service, handwerkliche Qualität und
			maßgefertigte Lösungen – direkt vor Ihrer Haustür in Sankt Augustin und der gesamten Region.
		</p>
	</div>
</section>

<!-- Über den Inhaber -->
<section class="bg-background">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-24">
		<div class="grid gap-16 lg:grid-cols-2 lg:items-center">
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
					Das Unternehmen
				</p>
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					Handwerk mit Leidenschaft und Regionalität
				</h2>
				<div class="space-y-4 leading-relaxed text-muted-foreground">
					<p>
						Insektenschutz Rhein-Sieg ist ein inhabergeführtes Fachbetrieb mit Sitz in
						<strong class="text-foreground">Sankt Augustin</strong>. Inhaber
						<strong class="text-foreground">Taner Özyurt</strong> hat sich auf maßgefertigten Insektenschutz
						spezialisiert – von einfachen Spannrahmen bis hin zu verschiebbaren Systemen für große Glasfronten
						und Wintergärten.
					</p>
					<p>
						Unser Anspruch: Jede Lösung soll perfekt passen – optisch, funktional und langlebig. Wir
						setzen auf persönliche Beratung vor Ort, präzise Maßnahme und fachgerechte Montage.
						Keine Kompromisse bei Qualität und Passform.
					</p>
					<p>
						Als regionaler Betrieb kennen wir die Besonderheiten der Rhein-Sieg-Region – die Lage
						zwischen Rhein, Sieg, Feldern und Grünflächen sorgt für erhöhten Insektendruck,
						besonders in den Sommermonaten. Wir bieten Lösungen, die wirklich schützen.
					</p>
				</div>
			</div>

			<div class="space-y-6 border border-border bg-secondary p-8 md:p-10">
				<div>
					<p class="mb-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
						Inhaber
					</p>
					<p class="text-lg font-bold text-foreground">Taner Özyurt</p>
				</div>
				<div>
					<p class="mb-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
						Betrieb
					</p>
					<p class="font-medium text-foreground">Insektenschutz Rhein-Sieg</p>
				</div>
				<div class="flex items-start gap-3">
					<MapPin class="mt-0.5 size-4 shrink-0 text-primary" />
					<div>
						<p class="mb-0.5 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
							Adresse
						</p>
						<p class="text-sm font-medium text-foreground">Ringstr. 7, 53757 Sankt Augustin</p>
					</div>
				</div>
				<div class="border-t border-border pt-6">
					<a
						class="inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
						href="tel:+4915565097031"
					>
						<Phone class="size-4 shrink-0" />
						015565 097031
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Unsere Werte / Stärken -->
<section class="bg-secondary">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-24">
		<div class="mb-12">
			<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">Warum wir</p>
			<h2 class="max-w-md text-3xl font-bold tracking-tight text-foreground md:text-4xl">
				Was uns auszeichnet
			</h2>
		</div>
		<div class="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
			{#each values as { icon: Icon, title, description } (title)}
				<div class="flex gap-4 bg-secondary p-8">
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
	</div>
</section>

<!-- Servicegebiet -->
<section class="bg-background">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-24">
		<div class="grid gap-12 lg:grid-cols-2 lg:items-start">
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
					Servicegebiet
				</p>
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					Für Sie in der Region unterwegs
				</h2>
				<p class="mb-8 leading-relaxed text-muted-foreground">
					Wir sind im Rhein-Sieg-Kreis und der weiteren Region rund um Bonn und Köln für Sie aktiv.
					Unser Heimatstandort ist Sankt Augustin – von dort aus erreichen wir alle wichtigen Orte
					in der Region schnell und unkompliziert.
				</p>
				<a
					class="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
					href={resolve('/kontakt')}
				>
					Anfrage stellen
					<ArrowRight class="size-4 shrink-0" />
				</a>
			</div>

			<div>
				<p class="mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
					Wir sind unter anderem tätig in:
				</p>
				<ul class="grid grid-cols-2 gap-2">
					{#each areas as area (area)}
						<li class="flex items-center gap-2 text-sm">
							<MapPin class="size-3.5 shrink-0 text-primary" />
							<span class="font-medium text-foreground">{area}</span>
						</li>
					{/each}
				</ul>
				<p class="mt-4 text-sm text-muted-foreground">
					Sie sind nicht sicher, ob wir in Ihrer Region tätig sind? Rufen Sie uns einfach an – wir
					beraten Sie gerne.
				</p>
			</div>
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
				<h2 class="text-3xl font-bold tracking-tight md:text-4xl">Lernen Sie uns kennen.</h2>
				<p class="mt-3 max-w-md text-sm leading-relaxed text-secondary-foreground">
					Wir freuen uns auf Ihre Anfrage. Rufen Sie uns an oder schreiben Sie uns – wir kommen zu
					Ihnen und beraten Sie kostenlos und unverbindlich.
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
					Kontakt aufnehmen
					<ArrowRight class="size-4 shrink-0" />
				</a>
			</div>
		</div>
	</div>
</section>
