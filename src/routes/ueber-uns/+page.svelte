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
	import {
		uu_head_title, uu_head_desc,
		uu_hero_label, uu_hero_h1_pre, uu_hero_h1_mid, uu_hero_h1_post, uu_hero_desc,
		uu_company_label, uu_company_h2, uu_company_p1, uu_company_p2, uu_company_p3,
		uu_card_owner_label, uu_card_company_label, uu_card_address_label,
		uu_values_label, uu_values_h2,
		uu_val1_title, uu_val1_desc,
		uu_val2_title, uu_val2_desc,
		uu_val3_title, uu_val3_desc,
		uu_val4_title, uu_val4_desc,
		uu_val5_title, uu_val5_desc,
		uu_val6_title, uu_val6_desc,
		uu_area_label, uu_area_h2, uu_area_p, uu_area_cta, uu_area_list_label, uu_area_note,
		uu_cta_label, uu_cta_h2, uu_cta_desc, uu_cta_contact
	} from '$lib/messages';
	import { BUSINESS_NAME, OWNER_NAME, ADDRESS, PHONE, SERVICE_AREAS } from '$lib/constants';

	const values = [
		{ icon: Check,  title: uu_val1_title(), description: uu_val1_desc() },
		{ icon: Ruler,  title: uu_val2_title(), description: uu_val2_desc() },
		{ icon: Wrench, title: uu_val3_title(), description: uu_val3_desc() },
		{ icon: Shield, title: uu_val4_title(), description: uu_val4_desc() },
		{ icon: Star,   title: uu_val5_title(), description: uu_val5_desc() },
		{ icon: Users,  title: uu_val6_title(), description: uu_val6_desc() }
	];

</script>

<svelte:head>
	<title>{uu_head_title()}</title>
	<meta name="description" content={uu_head_desc()} />
	<meta property="og:title" content={uu_head_title()} />
	<meta property="og:description" content={uu_head_desc()} />
</svelte:head>

<!-- Hero -->
<section class="dark bg-background text-foreground">
	<div class="mx-auto max-w-315 px-6 py-20 md:py-28">
		<p class="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">{uu_hero_label()}</p>
		<h1 class="mb-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
			{uu_hero_h1_pre()}<br />
			{uu_hero_h1_mid()} <span class="text-primary">{uu_hero_h1_post()}</span>
		</h1>
		<p class="max-w-xl text-lg leading-relaxed text-secondary-foreground">
			{uu_hero_desc()}
		</p>
	</div>
</section>

<!-- Über den Inhaber -->
<section class="bg-background">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-24">
		<div class="grid gap-16 lg:grid-cols-2 lg:items-center">
			<div>
				<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
					{uu_company_label()}
				</p>
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					{uu_company_h2()}
				</h2>
				<div class="space-y-4 leading-relaxed text-muted-foreground">
					<p>{uu_company_p1({ location: ADDRESS.city, owner: OWNER_NAME })}</p>
					<p>{uu_company_p2()}</p>
					<p>{uu_company_p3()}</p>
				</div>
			</div>

			<div class="space-y-6 border border-border bg-secondary p-8 md:p-10">
				<div>
					<p class="mb-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
						{uu_card_owner_label()}
					</p>
					<p class="text-lg font-bold text-foreground">{OWNER_NAME}</p>
				</div>
				<div>
					<p class="mb-1 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
						{uu_card_company_label()}
					</p>
					<p class="font-medium text-foreground">{BUSINESS_NAME}</p>
				</div>
				<div class="flex items-start gap-3">
					<MapPin class="mt-0.5 size-4 shrink-0 text-primary" />
					<div>
						<p class="mb-0.5 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
							{uu_card_address_label()}
						</p>
						<p class="text-sm font-medium text-foreground">{ADDRESS.full}</p>
					</div>
				</div>
				<div class="border-t border-border pt-6">
					<a
						class="inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
						href={PHONE.href}
					>
						<Phone class="size-4 shrink-0" />
						{PHONE.display}
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
			<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">{uu_values_label()}</p>
			<h2 class="max-w-md text-3xl font-bold tracking-tight text-foreground md:text-4xl">
				{uu_values_h2()}
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
					{uu_area_label()}
				</p>
				<h2 class="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
					{uu_area_h2()}
				</h2>
				<p class="mb-8 leading-relaxed text-muted-foreground">
					{uu_area_p()}
				</p>
				<a
					class="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
					href={resolve('/kontakt')}
				>
					{uu_area_cta()}
					<ArrowRight class="size-4 shrink-0" />
				</a>
			</div>

			<div>
				<p class="mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
					{uu_area_list_label()}
				</p>
				<ul class="grid grid-cols-2 gap-2">
					{#each SERVICE_AREAS as area (area)}
						<li class="flex items-center gap-2 text-sm">
							<MapPin class="size-3.5 shrink-0 text-primary" />
							<span class="font-medium text-foreground">{area}</span>
						</li>
					{/each}
				</ul>
				<p class="mt-4 text-sm text-muted-foreground">
					{uu_area_note()}
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
					{uu_cta_label()}
				</p>
				<h2 class="text-3xl font-bold tracking-tight md:text-4xl">{uu_cta_h2()}</h2>
				<p class="mt-3 max-w-md text-sm leading-relaxed text-secondary-foreground">
					{uu_cta_desc()}
				</p>
			</div>
			<div class="flex shrink-0 flex-col gap-3 sm:flex-row">
				<a
					class="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
					href={PHONE.href}
				>
					<Phone class="size-4 shrink-0" />
					{PHONE.display}
				</a>
				<a
					class="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
					href={resolve('/kontakt')}
				>
					{uu_cta_contact()}
					<ArrowRight class="size-4 shrink-0" />
				</a>
			</div>
		</div>
	</div>
</section>
