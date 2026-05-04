<script lang="ts">
	import { page } from '$app/state';
	import { ArrowLeft, ArrowRight, Phone } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import {
		err_404_title, err_404_desc,
		err_403_title, err_403_desc,
		err_500_title, err_500_desc,
		err_fallback_title, err_fallback_desc,
		err_status_label, err_home_cta, err_maybe_searching,
		nav_home, nav_services, nav_references, nav_contact
	} from '$lib/messages';
	import { PHONE } from '$lib/constants';

	const status = page.status;

	const title = status === 404 ? err_404_title()
		: status === 403 ? err_403_title()
		: status === 500 ? err_500_title()
		: err_fallback_title();

	const description = status === 404 ? err_404_desc()
		: status === 403 ? err_403_desc()
		: status === 500 ? err_500_desc()
		: err_fallback_desc();

	const pageTitle = $derived(`${err_status_label({ status })} – ${title} | Insektenschutz Rhein-Sieg`);

	const quickLinks = [
		{ label: nav_home(),       href: `/` },
		{ label: nav_services(),   href: `/leistungen` },
		{ label: nav_references(), href: `/referenzen` },
		{ label: nav_contact(),    href: `/kontakt` }
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
				{err_status_label({ status })}
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
					{err_home_cta()}
				</a>
				<a
					href={PHONE.href}
					class="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
				>
					<Phone class="size-4 shrink-0" />
					{PHONE.display}
				</a>
			</div>

			<!-- Quick nav -->
			<div class="border-t border-border pt-8">
				<p class="mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
					{err_maybe_searching()}
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
