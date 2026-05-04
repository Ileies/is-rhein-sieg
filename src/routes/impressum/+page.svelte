<script lang="ts">
	import { BUSINESS_NAME, OWNER_NAME, ADDRESS, PHONE, EMAIL } from '$lib/constants';
</script>

<svelte:head>
	<title>Impressum – {BUSINESS_NAME}</title>
	<meta
		name="description"
		content="Impressum von {BUSINESS_NAME}, Inh. {OWNER_NAME}, {ADDRESS.full}."
	/>
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<!-- Hero -->
<section class="dark bg-background text-foreground">
	<div class="mx-auto max-w-315 px-6 py-20 md:py-28">
		<p class="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">Rechtliches</p>
		<h1 class="text-4xl font-bold tracking-tight md:text-5xl">Impressum</h1>
	</div>
</section>

<!-- Content -->
<section class="bg-background">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-24">
		<div class="max-w-3xl space-y-12">
			<!-- Angaben gemäß § 5 TMG -->
			<div>
				<h2 class="mb-5 text-xl font-bold tracking-tight text-foreground">Angaben gemäß § 5 TMG</h2>
				<div class="divide-y divide-border border border-border">
					<div class="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr]">
						<span class="text-sm text-muted-foreground">Unternehmen</span>
						<span class="text-sm font-medium text-foreground">{BUSINESS_NAME}</span>
					</div>
					<div class="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr]">
						<span class="text-sm text-muted-foreground">Inhaber</span>
						<span class="text-sm font-medium text-foreground">{OWNER_NAME}</span>
					</div>
					<div class="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr]">
						<span class="text-sm text-muted-foreground">Anschrift</span>
						<span class="text-sm font-medium text-foreground">
							{ADDRESS.street}<br />{ADDRESS.zip} {ADDRESS.city}
						</span>
					</div>
					<div class="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr]">
						<span class="text-sm text-muted-foreground">Telefon</span>
						<a
							href={PHONE.href}
							class="text-sm font-medium text-primary transition-colors hover:text-primary/70"
						>
							{PHONE.display}
						</a>
					</div>
					<div class="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr]">
						<span class="text-sm text-muted-foreground">E-Mail</span>
						<a
							href="mailto:{EMAIL}"
							class="text-sm font-medium text-primary transition-colors hover:text-primary/70"
						>
							{EMAIL}
						</a>
					</div>
				</div>
			</div>

			<!-- EU-Streitschlichtung -->
			<div>
				<h2 class="mb-3 text-xl font-bold tracking-tight text-foreground">EU-Streitschlichtung</h2>
				<p class="leading-relaxed text-muted-foreground">
					Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
					<a
						href="https://ec.europa.eu/consumers/odr/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-primary transition-colors hover:text-primary/70"
					>
						https://ec.europa.eu/consumers/odr/
					</a>
				</p>
				<p class="mt-3 leading-relaxed text-muted-foreground">
					Unsere E-Mail-Adresse finden Sie oben im Impressum.
				</p>
			</div>

			<!-- Verbraucherschlichtung -->
			<div>
				<h2 class="mb-3 text-xl font-bold tracking-tight text-foreground">
					Verbraucherstreitbeilegung / Universalschlichtungsstelle
				</h2>
				<p class="leading-relaxed text-muted-foreground">
					Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
					Verbraucherschlichtungsstelle teilzunehmen.
				</p>
			</div>

			<!-- Haftung für Inhalte -->
			<div>
				<h2 class="mb-3 text-xl font-bold tracking-tight text-foreground">Haftung für Inhalte</h2>
				<p class="leading-relaxed text-muted-foreground">
					Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
					nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
					Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
					Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
					Tätigkeit hinweisen.
				</p>
				<p class="mt-3 leading-relaxed text-muted-foreground">
					Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
					allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
					erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
					Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
					entfernen.
				</p>
			</div>

			<!-- Haftung für Links -->
			<div>
				<h2 class="mb-3 text-xl font-bold tracking-tight text-foreground">Haftung für Links</h2>
				<p class="leading-relaxed text-muted-foreground">
					Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
					Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
					Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
					Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
					mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
					Verlinkung nicht erkennbar.
				</p>
				<p class="mt-3 leading-relaxed text-muted-foreground">
					Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
					Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
					Rechtsverletzungen werden wir derartige Links umgehend entfernen.
				</p>
			</div>

			<!-- Urheberrecht -->
			<div>
				<h2 class="mb-3 text-xl font-bold tracking-tight text-foreground">Urheberrecht</h2>
				<p class="leading-relaxed text-muted-foreground">
					Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
					dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
					der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
					Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
					nur für den privaten, nicht kommerziellen Gebrauch gestattet.
				</p>
				<p class="mt-3 leading-relaxed text-muted-foreground">
					Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
					Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
					gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
					bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
					werden wir derartige Inhalte umgehend entfernen.
				</p>
			</div>
		</div>
	</div>
</section>
