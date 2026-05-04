<script lang="ts">
	import { page } from '$app/state';
	import { slide } from 'svelte/transition';
	import { resolve } from '$app/paths';
	import { Menu, Phone, X } from '@lucide/svelte';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import {
		nav_home, nav_services, nav_references, nav_about, nav_contact,
		nav_menu_open, nav_menu_close, nav_aria_main, nav_aria_mobile
	} from '$lib/messages';
	import { PHONE } from '$lib/constants';

	let { locale }: { locale: string } = $props();

	const navLinks = [
		{ label: nav_home(), href: `/` },
		{ label: nav_services(), href: `/leistungen` },
		{ label: nav_references(), href: `/referenzen` },
		{ label: nav_about(), href: `/ueber-uns` },
		{ label: nav_contact(), href: `/kontakt` }
	];

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
			<nav aria-label={nav_aria_main()} class="hidden items-center gap-8 lg:flex">
				{#each navLinks as { label, href } (href)}
					<a
						href={resolve(href)}
						class="text-sm font-medium transition-colors {isActive(href)
							? 'text-primary'
							: 'text-muted-foreground hover:text-foreground'}">{label}</a
					>
				{/each}
			</nav>

			<!-- Desktop right: language switcher + phone CTA -->
			<div class="hidden items-center gap-3 lg:flex">
				<LanguageSwitcher {locale} />
				<a
					class="flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
					href={PHONE.href}
				>
					<Phone class="size-4 shrink-0" />
					{PHONE.display}
				</a>
			</div>

			<!-- Mobile toggle -->
			<button
				aria-expanded={mobileOpen}
				aria-label={mobileOpen ? nav_menu_close() : nav_menu_open()}
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
			<nav class="mx-auto flex max-w-315 flex-col px-6 py-4" aria-label={nav_aria_mobile()}>
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
					href={PHONE.href}
					onclick={() => (mobileOpen = false)}
					class="mt-2 flex items-center gap-2 border-t border-border pt-3 text-sm font-medium text-primary"
				>
					<Phone class="size-4 shrink-0" />
					{PHONE.display}
				</a>
				<div class="mt-3 border-t border-border pt-3">
					<LanguageSwitcher {locale} variant="inline" />
				</div>
			</nav>
		</div>
	{/if}
</header>
