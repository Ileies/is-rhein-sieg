<script lang="ts">
	import { reviews_label, reviews_h2 } from '$lib/messages';

	interface Review {
		name: string;
		meta: string;
		date: string;
		text: string;
	}

	const reviews: Review[] = [
		{
			name: 'Hergi',
			meta: 'Local Guide · 12 Rezensionen · 34 Fotos',
			date: 'vor einer Woche',
			text: 'Zuverlässig, gute Qualität, schnelle Lieferung nach Aufmaß und professionelle Montage. Sehr gutes Preis Leistung Verhältnis!'
		},
		{
			name: 'Katrin Keskiner',
			meta: '4 Rezensionen · 4 Fotos',
			date: 'vor 2 Tagen',
			text: 'Von der ersten Beratung bis zur Ausführung verlief alles professionell, zuverlässig und freundlich. Die Arbeiten wurden sorgfältig und termingerecht durchgeführt, und das Ergebnis entspricht voll und ganz unseren Erwartungen.\n\nBesonders hervorzuheben sind die Fachkompetenz, die saubere Arbeitsweise und die kundenorientierte Betreuung. Fragen wurden verständlich beantwortet, und es wurde auf individuelle Wünsche eingegangen.\n\nWir sind mit dem Service sehr zufrieden und können die Firma Insektenschutz Rhein-Sieg uneingeschränkt weiterempfehlen.'
		},
		{
			name: 'Mert Altuntas',
			meta: '9 Rezensionen · 1 Foto',
			date: 'vor einem Monat',
			text: 'Preis/Leistung Super!\nTop Qualität und super netter Mitarbeiter.\nVielen Dank!'
		},
		{
			name: 'Elke Scheffrahn',
			meta: '1 Rezension',
			date: 'vor 2 Wochen',
			text: 'Preis Leistung suuuuper\nMaterial und Arbeit suuuuper\nFreundlichkeit suuuuuper\nHier stimmt einfach alles'
		}
	];

	interface Props {
		variant?: 'background' | 'secondary';
	}
	let { variant = 'background' }: Props = $props();
</script>

<section class={variant === 'secondary' ? 'bg-secondary' : 'bg-background'}>
	<div class="mx-auto max-w-315 px-6 py-16 md:py-28">
		<div class="mb-12">
			<p class="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">{reviews_label()}</p>
			<h2 class="max-w-md text-3xl font-bold tracking-tight text-foreground md:text-4xl">
				{reviews_h2()}
			</h2>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each reviews as review (review.name)}
				<div class="flex flex-col border border-border bg-card p-6">
					<!-- Header: avatar + name + Google logo -->
					<div class="mb-4 flex items-start justify-between gap-3">
						<div class="flex items-center gap-3 min-w-0">
							<div
								class="flex size-10 shrink-0 items-center justify-center bg-primary text-sm font-bold text-primary-foreground"
							>
								{review.name[0]}
							</div>
							<div class="min-w-0">
								<p class="truncate text-sm font-semibold text-foreground">{review.name}</p>
								<p class="truncate text-xs text-muted-foreground">{review.meta}</p>
							</div>
						</div>
						<!-- Google G -->
						<svg viewBox="0 0 24 24" class="mt-0.5 size-5 shrink-0" aria-hidden="true">
							<path
								d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								fill="#4285F4"
							/>
							<path
								d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								fill="#34A853"
							/>
							<path
								d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
								fill="#FBBC05"
							/>
							<path
								d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
								fill="#EA4335"
							/>
						</svg>
					</div>

					<!-- Stars + date -->
					<div class="mb-4 flex items-center justify-between">
						<div class="flex gap-0.5" aria-label="5 von 5 Sternen">
							{#each [0, 1, 2, 3, 4] as i (i)}
								<svg viewBox="0 0 24 24" class="size-4 fill-[#FBBC04]" aria-hidden="true">
									<path
										d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
									/>
								</svg>
							{/each}
						</div>
						<span class="text-xs text-muted-foreground">{review.date}</span>
					</div>

					<!-- Review text -->
					<p class="flex-1 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
						{review.text}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
