<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import { Mail, MapPin, Phone } from '@lucide/svelte';
	import { resolve } from '$app/paths';

	const navLinks = [
		{ label: 'Startseite', href: `/` },
		{ label: 'Leistungen', href: `/leistungen` },
		{ label: 'Referenzen', href: `/referenzen` },
		{ label: 'Über uns', href: `/ueber-uns` },
		{ label: 'Kontakt', href: `/kontakt` }
	] as const;

	const year = new Date().getFullYear();
</script>

<footer class="dark bg-background text-foreground">
	<div class="mx-auto max-w-315 px-6 py-16">
		<div class="grid gap-12 md:grid-cols-3">
			<!-- Brand -->
			<div class="space-y-5">
				<a href={resolve('/')} class="inline-block">
					<img src="/logo-footer.svg" alt="Insektenschutz Rhein-Sieg" class="h-14 w-auto" />
				</a>
				<p class="max-w-xs text-sm leading-relaxed text-muted-foreground">
					Ihr regionaler Experte für maßgefertigte Fliegengitter – von der Beratung bis zur Montage.
				</p>
				<address class="flex items-start gap-2 text-sm text-secondary-foreground not-italic">
					<MapPin class="mt-0.5 size-4 shrink-0 text-primary" />
					Ringstr. 7, 53757 Sankt Augustin
				</address>
			</div>

			<!-- Navigation -->
			<div class="space-y-5">
				<h3 class="text-xs font-semibold tracking-widest text-primary uppercase">Navigation</h3>
				<nav aria-label="Footer-Navigation">
					<ul class="space-y-2.5">
						{#each navLinks as { label, href } (href)}
							<li>
								<a
									href={resolve(href)}
									class="text-sm text-secondary-foreground transition-colors hover:text-foreground"
									>{label}</a
								>
							</li>
						{/each}
					</ul>
				</nav>
			</div>

			<!-- Contact -->
			<div class="space-y-5">
				<h3 class="text-xs font-semibold tracking-widest text-primary uppercase">Kontakt</h3>
				<ul class="space-y-3 text-sm text-secondary-foreground">
					<li>
						<a
							href="tel:+4915565097031"
							class="flex items-center gap-2.5 transition-colors hover:text-foreground"
						>
							<Phone class="size-4 shrink-0 text-primary" />
							015565 097031
						</a>
					</li>
					<li>
						<a
							href="mailto:info@insektenschutz-rhein-sieg.de"
							class="flex items-center gap-2.5 transition-colors hover:text-foreground"
						>
							<Mail class="size-4 shrink-0 text-primary" />
							info@insektenschutz-rhein-sieg.de
						</a>
					</li>
				</ul>

				<div class="flex gap-3 pt-1">
					<!-- Facebook -->
					<a
						href="https://facebook.com"
						aria-label="Facebook"
						class="text-muted-foreground transition-colors hover:text-primary"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="size-5"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
						</svg>
					</a>
					<!-- Instagram -->
					<a
						href="https://instagram.com"
						aria-label="Instagram"
						class="text-muted-foreground transition-colors hover:text-primary"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="size-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
							<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
							<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
						</svg>
					</a>
					<!-- X / Twitter -->
					<a
						href="https://x.com"
						aria-label="X (Twitter)"
						class="text-muted-foreground transition-colors hover:text-primary"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="size-5"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>

		<Separator class="my-10" />

		<div
			class="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
		>
			<span>© {year} Insektenschutz Rhein-Sieg. Alle Rechte vorbehalten.</span>
			<nav class="flex gap-5">
				<a href={resolve('/impressum')} class="transition-colors hover:text-foreground">Impressum</a
				>
				<a href={resolve('/datenschutz')} class="transition-colors hover:text-foreground"
					>Datenschutz</a
				>
			</nav>
		</div>
	</div>
</footer>
