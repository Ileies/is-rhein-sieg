<script lang="ts">
	import { page } from '$app/state';
	import { ArrowLeft, ArrowRight, Phone } from '@lucide/svelte';
	import { resolve } from '$app/paths';

	const messages: Record<number, { title: string; description: string }> = {
		404: {
			title: 'Seite nicht gefunden',
			description:
				'Die gesuchte Seite existiert nicht oder wurde verschoben. Vielleicht hilft Ihnen ein Blick auf unsere Startseite weiter.'
		},
		403: {
			title: 'Zugriff verweigert',
			description: 'Sie haben keine Berechtigung, diese Seite aufzurufen.'
		},
		500: {
			title: 'Serverfehler',
			description:
				'Es ist ein interner Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.'
		}
	};

	const status = page.status;
	const fallback = {
		title: 'Etwas ist schiefgelaufen',
		description:
			'Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.'
	};

	const { title, description } = messages[status] ?? fallback;

	const pageTitle = $derived(`${status} – ${title} | Insektenschutz Rhein-Sieg`);

	const quickLinks = [
		{ label: 'Startseite', href: `/` },
		{ label: 'Leistungen', href: `/leistungen` },
		{ label: 'Referenzen', href: `/referenzen` },
		{ label: 'Kontakt', href: `/kontakt` }
	] as const;
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<section class="flex min-h-[calc(100vh-5rem)] items-center bg-background text-foreground">
	<div class="relative mx-auto w-full max-w-315 px-6 py-20">
		<div class="max-w-lg">
			<span
				class="mb-6 inline-block bg-primary/10 px-3 py-1 text-xs font-semibold tracking-widest text-primary uppercase"
			>
				Fehler {status}
			</span>
			<h1 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
				{title}
			</h1>
			<p class="mb-10 text-base leading-relaxed text-muted-foreground">
				{description}
			</p>

			<!-- Primary actions -->
			<div class="mb-12 flex flex-wrap gap-3">
				<a
					href={resolve('/')}
					class="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
				>
					<ArrowLeft class="size-4 shrink-0" />
					Zur Startseite
				</a>
				<a
					href="tel:+4915565097031"
					class="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
				>
					<Phone class="size-4 shrink-0" />
					015565 097031
				</a>
			</div>

			<!-- Quick nav -->
			<div class="border-t border-border pt-8">
				<p class="mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
					Vielleicht suchen Sie:
				</p>
				<ul class="flex flex-wrap gap-x-6 gap-y-2">
					{#each quickLinks as { label, href } (href)}
						<li>
							<a
								href={resolve(href)}
								class="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/70"
							>
								{label}
								<ArrowRight class="size-3" />
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
