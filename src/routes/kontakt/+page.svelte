<script lang="ts">
	import { enhance } from '$app/forms';
	import { Mail, MapPin, Phone } from '@lucide/svelte';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();

	let submitting = $state(false);
</script>

<svelte:head>
	<title>Kontakt – Insektenschutz Rhein-Sieg</title>
	<meta
		name="description"
		content="Kontaktieren Sie Insektenschutz Rhein-Sieg in Sankt Augustin. Kostenlose Beratung zu Fliegengittern und Insektenschutz – rufen Sie uns an oder schreiben Sie uns."
	/>
	<meta property="og:title" content="Kontakt – Insektenschutz Rhein-Sieg" />
	<meta
		property="og:description"
		content="Kontaktieren Sie Insektenschutz Rhein-Sieg in Sankt Augustin. Kostenlose Beratung zu Fliegengittern und Insektenschutz – rufen Sie uns an oder schreiben Sie uns."
	/>
</svelte:head>

<!-- Hero -->
<section class="dark bg-background text-foreground">
	<div class="mx-auto max-w-315 px-6 py-20 md:py-28">
		<p class="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">Kontakt</p>
		<h1 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
			Sie haben Fragen?<br />
			<span class="text-primary">Wir beraten kostenlos!</span>
		</h1>
		<p class="max-w-xl text-lg leading-relaxed text-secondary-foreground">
			Sie sind sich unsicher, welches Insektengitter am besten zu Ihren Bedürfnissen passt? Wir
			helfen Ihnen gerne weiter!
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
						Unverbindlich anfragen
					</p>
					<h2 class="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
						Gemeinsam finden wir die perfekte Lösung
					</h2>
					<p class="leading-relaxed text-muted-foreground">
						Unser Expertenteam bietet Ihnen eine unverbindliche und kostenlose Beratung zu den
						besten Lösungen für Ihre Fenster, Wintergärten und Dachfenster. Gemeinsam finden wir die
						perfekte Lösung, um Ihr Zuhause insektenfrei zu halten.
					</p>
				</div>

				<ul class="space-y-5">
					<li>
						<a
							class="group flex items-start gap-4 transition-opacity hover:opacity-80"
							href="tel:+4915565097031"
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
									Telefon
								</p>
								<p class="font-medium text-foreground">015565 097031</p>
							</div>
						</a>
					</li>
					<li>
						<a
							class="group flex items-start gap-4 transition-opacity hover:opacity-80"
							href="mailto:info@insektenschutz-rhein-sieg.de"
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
									E-Mail
								</p>
								<p class="font-medium text-foreground">info@insektenschutz-rhein-sieg.de</p>
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
								Adresse
							</p>
							<p class="font-medium text-foreground">Ringstr. 7, 53757 Sankt Augustin</p>
						</div>
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
						<h3 class="mb-2 text-xl font-bold text-foreground">Nachricht erhalten!</h3>
						<p class="text-muted-foreground">
							Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.
						</p>
					</div>
				{:else}
					<h2 class="mb-6 text-xl font-bold text-foreground">Nachricht senden</h2>

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
									Name <span class="text-destructive">*</span>
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
									placeholder="Ihr Name"
								/>
								{#if form?.errors?.name}
									<p class="mt-1 text-xs text-destructive">{form.errors.name}</p>
								{/if}
							</div>

							<div>
								<label for="phone" class="mb-1.5 block text-sm font-medium text-foreground">
									Telefon
								</label>
								<input
									id="phone"
									name="phone"
									type="tel"
									autocomplete="tel"
									value={form?.values?.phone ?? ''}
									class="w-full border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-primary focus:outline-none"
									placeholder="Ihre Telefonnummer"
								/>
							</div>
						</div>

						<div>
							<label for="email" class="mb-1.5 block text-sm font-medium text-foreground">
								E-Mail <span class="text-destructive">*</span>
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
								placeholder="ihre@email.de"
							/>
							{#if form?.errors?.email}
								<p class="mt-1 text-xs text-destructive">{form.errors.email}</p>
							{/if}
						</div>

						<div>
							<label for="message" class="mb-1.5 block text-sm font-medium text-foreground">
								Nachricht <span class="text-destructive">*</span>
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
								placeholder="Beschreiben Sie kurz Ihr Anliegen…"
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
							{submitting ? 'Wird gesendet…' : 'Nachricht senden'}
						</button>

						<p class="text-xs text-muted-foreground">
							Mit dem Absenden stimmen Sie zu, dass Ihre Daten zur Bearbeitung Ihrer Anfrage
							verwendet werden.
						</p>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
