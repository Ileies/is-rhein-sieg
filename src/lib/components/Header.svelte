<script lang="ts">
	import { page } from '$app/state';
	import { slide } from 'svelte/transition';
	import { resolve } from '$app/paths';
	import { Menu, Phone, X } from '@lucide/svelte';

	const navLinks = [
		{ label: 'Startseite', href: `/` },
		{ label: 'Leistungen', href: `/leistungen` },
		{ label: 'Referenzen', href: `/referenzen` },
		{ label: 'Über uns', href: `/ueber-uns` },
		{ label: 'Kontakt', href: `/kontakt` }
	] as const;

	let mobileOpen = $state(false);

	function isActive(href: string) {
		const path = page.url.pathname;
		if (href === `/`) return path === `/`;
		return path === href || path.startsWith(href + '/');
	}
</script>

<header class="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
	<div class="mx-auto max-w-315 px-6">
		<div class="flex h-20 items-center justify-between">
			<!-- Brand -->
			<a class="shrink-0" href={resolve('/')}>
				<img alt="Insektenschutz Rhein-Sieg" class="h-14 w-auto" src="/favicon.svg" />
			</a>

			<!-- Desktop nav -->
			<nav aria-label="Hauptnavigation" class="hidden items-center gap-8 lg:flex">
				{#each navLinks as { label, href } (href)}
					<a
						href={resolve(href)}
						class="text-sm font-medium transition-colors {isActive(href)
							? 'text-primary'
							: 'text-muted-foreground hover:text-foreground'}">{label}</a
					>
				{/each}
			</nav>

			<!-- Desktop CTA -->
			<a
				class="hidden items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80 lg:flex"
				href="tel:+4915565097031"
			>
				<Phone class="size-4 shrink-0" />
				015565 097031
			</a>

			<!-- Mobile toggle -->
			<button
				aria-expanded={mobileOpen}
				aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
				class="text-foreground lg:hidden"
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				{#if mobileOpen}
					<X class="size-5" />
				{:else}
					<Menu class="size-5" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div transition:slide={{ duration: 200 }} class="border-t border-border bg-card lg:hidden">
			<nav class="mx-auto flex max-w-315 flex-col px-6 py-4" aria-label="Mobile Navigation">
				{#each navLinks as { label, href } (href)}
					<a
						href={resolve(href)}
						onclick={() => (mobileOpen = false)}
						class="py-2.5 text-sm font-medium transition-colors {isActive(href)
							? 'text-primary'
							: 'text-muted-foreground hover:text-foreground'}">{label}</a
					>
				{/each}
				<a
					href="tel:+4915565097031"
					onclick={() => (mobileOpen = false)}
					class="mt-2 flex items-center gap-2 border-t border-border pt-3 text-sm font-medium text-primary"
				>
					<Phone class="size-4 shrink-0" />
					015565 097031
				</a>
			</nav>
		</div>
	{/if}
</header>
