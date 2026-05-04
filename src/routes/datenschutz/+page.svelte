<script lang="ts">
	import { BUSINESS_NAME, OWNER_NAME, ADDRESS, PHONE_ALT, EMAIL } from '$lib/constants';
</script>

<svelte:head>
	<title>Datenschutzerklärung – {BUSINESS_NAME}</title>
	<meta
		name="description"
		content="Datenschutzerklärung von Insektenschutz Rhein-Sieg gemäß DSGVO."
	/>
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<!-- Hero -->
<section class="dark bg-background text-foreground">
	<div class="mx-auto max-w-315 px-6 py-20 md:py-28">
		<p class="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">Rechtliches</p>
		<h1 class="text-4xl font-bold tracking-tight md:text-5xl">Datenschutzerklärung</h1>
	</div>
</section>

<!-- Content -->
<section class="bg-background">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-24">
		<div class="max-w-3xl space-y-12">
			<!-- 1. Verantwortlicher -->
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">1</p>
				<h2 class="mb-5 text-xl font-bold tracking-tight text-foreground">Verantwortlicher</h2>
				<div class="divide-y divide-border border border-border">
					<div class="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr]">
						<span class="text-sm text-muted-foreground">Name</span>
						<span class="text-sm font-medium text-foreground">{OWNER_NAME}</span>
					</div>
					<div class="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr]">
						<span class="text-sm text-muted-foreground">Unternehmen</span>
						<span class="text-sm font-medium text-foreground">{BUSINESS_NAME}</span>
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
							href={PHONE_ALT.href}
							class="text-sm font-medium text-primary transition-colors hover:text-primary/70"
						>
							{PHONE_ALT.display}
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

			<!-- 2. Allgemeine Hinweise -->
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">2</p>
				<h2 class="mb-3 text-xl font-bold tracking-tight text-foreground">Allgemeine Hinweise</h2>
				<p class="leading-relaxed text-muted-foreground">
					Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre
					Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TDDDG). In dieser
					Datenschutzerklärung informieren wir Sie über Art, Umfang und Zweck der Verarbeitung
					personenbezogener Daten auf dieser Website.
				</p>
				<p class="mt-3 leading-relaxed text-muted-foreground">
					Diese Website verwendet keine Analyse- oder Tracking-Dienste. Es werden keine
					Nutzungsprofile erstellt und keine Daten zu Werbezwecken an Dritte weitergegeben.
					Schriftarten werden ausschließlich lokal ausgeliefert, ohne Verbindung zu externen
					Servern.
				</p>
			</div>

			<!-- 3. Hosting -->
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">3</p>
				<h2 class="mb-3 text-xl font-bold tracking-tight text-foreground">
					Hosting und Server-Logfiles
				</h2>
				<p class="leading-relaxed text-muted-foreground">
					Diese Website wird auf Servern eines externen Hosting-Dienstleisters betrieben. Beim Abruf
					dieser Website werden durch den Server automatisch Informationen in sogenannten
					Server-Logfiles erfasst. Dabei werden folgende Daten protokolliert:
				</p>
				<ul class="mt-4 space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
					<li class="list-disc">IP-Adresse des anfragenden Geräts</li>
					<li class="list-disc">Datum und Uhrzeit der Anfrage</li>
					<li class="list-disc">Aufgerufene URL</li>
					<li class="list-disc">HTTP-Statuscode</li>
					<li class="list-disc">Übertragene Datenmenge</li>
					<li class="list-disc">Referrer-URL (zuvor besuchte Seite)</li>
					<li class="list-disc">Browsertyp und Betriebssystem</li>
				</ul>
				<p class="mt-4 leading-relaxed text-muted-foreground">
					Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und ausschließlich zur
					Sicherstellung des technischen Betriebs sowie zur Erkennung und Abwehr von Angriffen
					verarbeitet. Die Logfiles werden nach spätestens 30 Tagen automatisch gelöscht.
				</p>
				<p class="mt-3 leading-relaxed text-muted-foreground">
					Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und
					stabilen Betrieb der Website).
				</p>
			</div>

			<!-- 4. Cookies -->
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">4</p>
				<h2 class="mb-3 text-xl font-bold tracking-tight text-foreground">Cookies</h2>
				<p class="leading-relaxed text-muted-foreground">
					Diese Website setzt ausschließlich einen technisch notwendigen Cookie ein:
				</p>
				<div class="mt-4 border border-border">
					<div
						class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-0.5 bg-secondary px-5 py-3 text-xs font-semibold tracking-widest uppercase"
					>
						<span class="text-muted-foreground">Cookie</span>
						<span class="text-muted-foreground">Zweck / Details</span>
					</div>
					<div class="divide-y divide-border">
						<div class="grid grid-cols-[auto_1fr] gap-x-6 px-5 py-4 text-sm">
							<code class="shrink-0 font-mono text-xs text-primary">LOCALE</code>
							<div>
								<p class="font-medium text-foreground">Spracheinstellung</p>
								<p class="mt-1 text-xs leading-relaxed text-muted-foreground">
									Speichert die vom Nutzer gewählte Sprache (de / en / tr). Kein Tracking, kein
									Personenbezug. Laufzeit: 400 Tage. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
								</p>
							</div>
						</div>
					</div>
				</div>
				<p class="mt-4 leading-relaxed text-muted-foreground">
					Für diesen technisch notwendigen Cookie ist keine Einwilligung erforderlich (§ 25 Abs. 2
					Nr. 2 TDDDG). Sie können Cookies in Ihren Browsereinstellungen jederzeit löschen oder
					deaktivieren; die Sprachauswahl wird dann beim nächsten Besuch auf Deutsch zurückgesetzt.
				</p>
			</div>

			<!-- 5. Kontaktformular -->
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">5</p>
				<h2 class="mb-3 text-xl font-bold tracking-tight text-foreground">Kontaktformular</h2>
				<p class="leading-relaxed text-muted-foreground">
					Wenn Sie uns über das Kontaktformular eine Nachricht zukommen lassen, werden folgende
					Daten verarbeitet:
				</p>
				<ul class="mt-4 space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
					<li class="list-disc">Name (Pflichtfeld)</li>
					<li class="list-disc">E-Mail-Adresse (Pflichtfeld)</li>
					<li class="list-disc">Telefonnummer (freiwillig)</li>
					<li class="list-disc">Ihre Nachricht</li>
					<li class="list-disc">
						IP-Adresse (zur Missbrauchsverhinderung, nicht dauerhaft gespeichert)
					</li>
				</ul>
				<p class="mt-4 leading-relaxed text-muted-foreground">
					Die eingegebenen Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage per E-Mail an
					uns übermittelt. Eine Speicherung in einer Datenbank findet nicht statt. Zur Abwehr von
					Spam und Missbrauch wird die Anzahl der Anfragen pro IP-Adresse temporär im
					Arbeitsspeicher des Servers gezählt; diese Information wird nicht dauerhaft gespeichert
					und nicht mit Dritten geteilt.
				</p>
				<p class="mt-3 leading-relaxed text-muted-foreground">
					Die Datenübertragung erfolgt verschlüsselt über HTTPS. Ihre Anfrage wird nach
					abschließender Bearbeitung nach den gesetzlichen Aufbewahrungsfristen gelöscht, soweit
					keine steuerrechtlichen oder handelsrechtlichen Aufbewahrungspflichten bestehen.
				</p>
				<p class="mt-3 leading-relaxed text-muted-foreground">
					Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) sowie Art. 6 Abs.
					1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
				</p>
			</div>

			<!-- 6. Keine Weitergabe -->
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">6</p>
				<h2 class="mb-3 text-xl font-bold tracking-tight text-foreground">
					Keine Weitergabe an Dritte
				</h2>
				<p class="leading-relaxed text-muted-foreground">
					Ihre personenbezogenen Daten werden nicht an Dritte verkauft, vermietet oder zu
					Marketingzwecken übermittelt. Eine Weitergabe erfolgt nur, wenn wir dazu gesetzlich
					verpflichtet sind oder Sie ausdrücklich eingewilligt haben.
				</p>
			</div>

			<!-- 7. Ihre Rechte -->
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">7</p>
				<h2 class="mb-3 text-xl font-bold tracking-tight text-foreground">
					Ihre Rechte nach der DSGVO
				</h2>
				<p class="mb-4 leading-relaxed text-muted-foreground">
					Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
				</p>
				<ul class="space-y-3 text-sm leading-relaxed text-muted-foreground">
					<li class="flex gap-3">
						<span class="mt-0.5 shrink-0 font-bold text-primary">→</span>
						<span>
							<strong class="text-foreground">Auskunft</strong> (Art. 15 DSGVO) – Sie können Auskunft
							über die zu Ihrer Person gespeicherten Daten verlangen.
						</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-0.5 shrink-0 font-bold text-primary">→</span>
						<span>
							<strong class="text-foreground">Berichtigung</strong> (Art. 16 DSGVO) – Sie können die Berichtigung
							unrichtiger Daten verlangen.
						</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-0.5 shrink-0 font-bold text-primary">→</span>
						<span>
							<strong class="text-foreground">Löschung</strong> (Art. 17 DSGVO) – Sie können unter den
							gesetzlichen Voraussetzungen die Löschung Ihrer Daten verlangen.
						</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-0.5 shrink-0 font-bold text-primary">→</span>
						<span>
							<strong class="text-foreground">Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)
							– Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.
						</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-0.5 shrink-0 font-bold text-primary">→</span>
						<span>
							<strong class="text-foreground">Datenübertragbarkeit</strong> (Art. 20 DSGVO) – Sie können
							Ihre Daten in einem gängigen, maschinenlesbaren Format erhalten.
						</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-0.5 shrink-0 font-bold text-primary">→</span>
						<span>
							<strong class="text-foreground">Widerspruch</strong> (Art. 21 DSGVO) – Sie können der Verarbeitung
							Ihrer Daten auf Basis von Art. 6 Abs. 1 lit. f DSGVO jederzeit widersprechen.
						</span>
					</li>
					<li class="flex gap-3">
						<span class="mt-0.5 shrink-0 font-bold text-primary">→</span>
						<span>
							<strong class="text-foreground">Widerruf einer Einwilligung</strong> (Art. 7 Abs. 3 DSGVO)
							– Sofern die Verarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit mit
							Wirkung für die Zukunft widerrufen.
						</span>
					</li>
				</ul>
				<p class="mt-5 leading-relaxed text-muted-foreground">
					Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail oder Post an den oben genannten
					Verantwortlichen.
				</p>
			</div>

			<!-- 8. Beschwerderecht -->
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">8</p>
				<h2 class="mb-3 text-xl font-bold tracking-tight text-foreground">
					Beschwerderecht bei einer Aufsichtsbehörde
				</h2>
				<p class="leading-relaxed text-muted-foreground">
					Unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe steht
					Ihnen das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde zu, wenn Sie der
					Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO
					verstößt.
				</p>
				<p class="mt-3 leading-relaxed text-muted-foreground">
					Die zuständige Aufsichtsbehörde für Nordrhein-Westfalen ist die
					<strong class="text-foreground"
						>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI
						NRW)</strong
					>, Kavalleriestraße 2–4, 40213 Düsseldorf,
					<a
						href="https://www.ldi.nrw.de"
						target="_blank"
						rel="noopener noreferrer"
						class="text-primary transition-colors hover:text-primary/70"
					>
						www.ldi.nrw.de
					</a>.
				</p>
			</div>
		</div>
	</div>
</section>
