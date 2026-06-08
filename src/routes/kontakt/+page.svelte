<script lang="ts">
	import { enhance } from '$app/forms';
	import { Mail, MapPin, Phone } from '@lucide/svelte';
	import type { PageProps } from './$types';
	import {
		ko_head_title, ko_head_desc,
		ko_hero_label, ko_hero_h1_pre, ko_hero_h1_post, ko_hero_desc,
		ko_info_label, ko_info_h2, ko_info_p,
		ko_form_title, ko_form_success_title, ko_form_success_desc,
		ko_field_name, ko_field_name_placeholder,
		ko_field_phone, ko_field_phone_placeholder,
		ko_field_email, ko_field_email_placeholder,
		ko_field_message, ko_field_message_placeholder,
		ko_submit, ko_submitting, ko_privacy_note,
		label_phone, label_email_contact, label_address,
		ko_instagram_label, ko_instagram_handle
	} from '$lib/messages';
	import { ADDRESS, PHONE, EMAIL, INSTAGRAM_URL } from '$lib/constants';

	let { form }: PageProps = $props();

	let submitting = $state(false);
</script>

<svelte:head>
	<title>{ko_head_title()}</title>
	<meta name="description" content={ko_head_desc()} />
	<meta property="og:title" content={ko_head_title()} />
	<meta property="og:description" content={ko_head_desc()} />
</svelte:head>

<!-- Hero -->
<section class="dark bg-background text-foreground">
	<div class="mx-auto max-w-315 px-6 py-20 md:py-28">
		<p class="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">{ko_hero_label()}</p>
		<h1 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
			{ko_hero_h1_pre()}<br />
			<span class="text-primary">{ko_hero_h1_post()}</span>
		</h1>
		<p class="max-w-xl text-lg leading-relaxed text-secondary-foreground">
			{ko_hero_desc()}
		</p>
	</div>
</section>

<!-- Content -->
<section class="bg-background">
	<div class="mx-auto max-w-315 px-6 py-16 md:py-24">
		<div class="grid gap-16 lg:grid-cols-2">
			<!-- Left: Info -->
			<div class="space-y-10">
				<div>
					<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
						{ko_info_label()}
					</p>
					<h2 class="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
						{ko_info_h2()}
					</h2>
					<p class="leading-relaxed text-muted-foreground">
						{ko_info_p()}
					</p>
				</div>

				<ul class="space-y-5">
					<li>
						<a
							class="group flex items-start gap-4 transition-opacity hover:opacity-80"
							href={PHONE.href}
						>
							<span
								class="mt-0.5 flex size-10 shrink-0 items-center justify-center bg-primary/10 text-primary"
							>
								<Phone class="size-5" />
							</span>
							<div>
								<p
									class="mb-0.5 text-xs font-semibold tracking-widest text-muted-foreground uppercase"
								>
									{label_phone()}
								</p>
								<p class="font-medium text-foreground">{PHONE.display}</p>
							</div>
						</a>
					</li>
					<li>
						<a
							class="group flex items-start gap-4 transition-opacity hover:opacity-80"
							href="mailto:{EMAIL}"
						>
							<span
								class="mt-0.5 flex size-10 shrink-0 items-center justify-center bg-primary/10 text-primary"
							>
								<Mail class="size-5" />
							</span>
							<div>
								<p
									class="mb-0.5 text-xs font-semibold tracking-widest text-muted-foreground uppercase"
								>
									{label_email_contact()}
								</p>
								<p class="font-medium text-foreground">{EMAIL}</p>
							</div>
						</a>
					</li>
					<li class="flex items-start gap-4">
						<span
							class="mt-0.5 flex size-10 shrink-0 items-center justify-center bg-primary/10 text-primary"
						>
							<MapPin class="size-5" />
						</span>
						<div>
							<p
								class="mb-0.5 text-xs font-semibold tracking-widest text-muted-foreground uppercase"
							>
								{label_address()}
							</p>
							<p class="font-medium text-foreground">{ADDRESS.full}</p>
						</div>
					</li>
					<li>
						<a
							class="group flex items-start gap-4 transition-opacity hover:opacity-80"
							href={INSTAGRAM_URL}
							target="_blank"
							rel="noopener noreferrer"
						>
							<span
								class="mt-0.5 flex size-10 shrink-0 items-center justify-center bg-primary/10 text-primary"
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
							</span>
							<div>
								<p
									class="mb-0.5 text-xs font-semibold tracking-widest text-muted-foreground uppercase"
								>
									{ko_instagram_label()}
								</p>
								<p class="font-medium text-foreground">{ko_instagram_handle()}</p>
							</div>
						</a>
					</li>
				</ul>
			</div>

			<!-- Right: Form -->
			<div class="border border-border bg-card p-8 md:p-10">
				{#if form?.success}
					<div class="flex h-full flex-col items-center justify-center py-10 text-center">
						<span
							class="mb-6 flex size-16 items-center justify-center bg-primary/10 text-3xl text-primary"
						>
							✓
						</span>
						<h3 class="mb-2 text-xl font-bold text-foreground">{ko_form_success_title()}</h3>
						<p class="text-muted-foreground">
							{ko_form_success_desc()}
						</p>
					</div>
				{:else}
					<h2 class="mb-6 text-xl font-bold text-foreground">{ko_form_title()}</h2>

					{#if form?.errors?._}
						<p class="mb-4 text-sm text-destructive">{form.errors._}</p>
					{/if}

					<form
						method="POST"
						class="space-y-5"
						use:enhance={() => {
							submitting = true;
							return async ({ update }) => {
								await update();
								submitting = false;
							};
						}}
					>
						<div class="grid gap-5 sm:grid-cols-2">
							<div>
								<label for="name" class="mb-1.5 block text-sm font-medium text-foreground">
									{ko_field_name()} <span class="text-destructive">*</span>
								</label>
								<input
									id="name"
									name="name"
									type="text"
									required
									autocomplete="name"
									value={form?.values?.name ?? ''}
									class="w-full border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-primary focus:outline-none {form
										?.errors?.name
										? 'border-destructive'
										: ''}"
									placeholder={ko_field_name_placeholder()}
								/>
								{#if form?.errors?.name}
									<p class="mt-1 text-xs text-destructive">{form.errors.name}</p>
								{/if}
							</div>

							<div>
								<label for="phone" class="mb-1.5 block text-sm font-medium text-foreground">
									{ko_field_phone()}
								</label>
								<input
									id="phone"
									name="phone"
									type="tel"
									autocomplete="tel"
									value={form?.values?.phone ?? ''}
									class="w-full border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-primary focus:outline-none"
									placeholder={ko_field_phone_placeholder()}
								/>
							</div>
						</div>

						<div>
							<label for="email" class="mb-1.5 block text-sm font-medium text-foreground">
								{ko_field_email()} <span class="text-destructive">*</span>
							</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								autocomplete="email"
								value={form?.values?.email ?? ''}
								class="w-full border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-primary focus:outline-none {form
									?.errors?.email
									? 'border-destructive'
									: ''}"
								placeholder={ko_field_email_placeholder()}
							/>
							{#if form?.errors?.email}
								<p class="mt-1 text-xs text-destructive">{form.errors.email}</p>
							{/if}
						</div>

						<div>
							<label for="message" class="mb-1.5 block text-sm font-medium text-foreground">
								{ko_field_message()} <span class="text-destructive">*</span>
							</label>
							<textarea
								id="message"
								name="message"
								required
								rows="5"
								class="w-full resize-none border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-primary focus:outline-none {form
									?.errors?.message
									? 'border-destructive'
									: ''}"
								placeholder={ko_field_message_placeholder()}
								>{form?.values?.message ?? ''}</textarea
							>
							{#if form?.errors?.message}
								<p class="mt-1 text-xs text-destructive">{form.errors.message}</p>
							{/if}
						</div>

						<button
							type="submit"
							disabled={submitting}
							class="w-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
						>
							{submitting ? ko_submitting() : ko_submit()}
						</button>

						<p class="text-xs text-muted-foreground">
							{ko_privacy_note()}
						</p>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
