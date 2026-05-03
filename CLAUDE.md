## Context

This project is the website for **Insektenschutz Rhein-Sieg** (Taner Özyurt, Sankt Augustin) — a regional insect screen installation business in the Rhein-Sieg-Kreis, NRW. The site is built as a fast, DSGVO-compliant SvelteKit SSR application.

---

## Project Configuration

- **Language**: TypeScript
- **Package Manager**: bun
- **Framework**: SvelteKit 5 (Svelte 5, runes mode enforced — no legacy `$:` reactive statements or `export let` props)
- **Styling**: Tailwind CSS v4 + shadcn-svelte (bits-ui)
- **Adapter**: `@sveltejs/adapter-node` (SSR, deployed as a Node.js process)
- **i18n**: Custom Vite plugin (`src/lib/i18n-plugin.ts`)
- **Email**: Nodemailer (contact form)

---

## Architecture

### Svelte 5 Runes

`svelte.config.js` forces runes mode for all project files. Use `$state`, `$derived`, `$effect`, `$props()` — never legacy syntax.

### i18n

Translations live in `messages/*.json` files (one file per domain, e.g. `common.json`, `nav.json`). Each key maps to a `[de, en, tr]` tuple. The Vite plugin (`i18nPlugin`) watches the `messages/` directory and regenerates `src/lib/messages.ts` on every change. **Never edit `src/lib/messages.ts` directly.**

To add a message:

1. Add a key to the appropriate JSON file in `messages/`: `"key": ["German", "English", "Türkçe"]`
2. Import and call the generated function: `import { key } from '$lib/messages'` → `key()`
3. Interpolation: `"greeting": ["Hallo {name}", "Hello {name}", "Merhaba {name}"]` → `greeting({ name: 'Taner' })`

Locale is set via the `LOCALE` cookie, applied in `src/hooks.server.ts` using `AsyncLocalStorage` for SSR. The `<html lang="%lang%">` placeholder in `app.html` is replaced per-request.

### Contact Form

`/kontakt` uses a SvelteKit form action (`+page.server.ts`). It validates input server-side, enforces rate limiting (3 submissions per IP per hour, in-memory), and sends email via Nodemailer. No database required.

### Security Headers

`hooks.server.ts` adds `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Referrer-Policy` on all responses. The `/api/*` routes also enforce same-origin CSRF checks on non-safe methods.

---

## Design System

The design departs from the original gold palette and uses a **blue-steel** scheme while keeping structural choices from the original (DM Sans Variable, `border-radius: 0`):

| Token          | Light            | Dark      |
| -------------- | ---------------- | --------- |
| `--primary`    | `#5b9dc1`        | `#5b9dc1` |
| `--background` | `#f5f8fa`        | `#0e1920` |
| `--foreground` | `#0d1a24`        | `#ffffff` |
| `--border`     | `#cddde8`        | `#1e3a52` |
| `--radius`     | `0rem`           | —         |
| Font           | DM Sans Variable | —         |

Use Tailwind semantic tokens (`bg-background`, `text-foreground`, `text-primary`, `border-border`) rather than raw hex values.

---

## Environment Variables

See `.env.example`. Required at runtime:

| Variable    | Purpose                                   |
| ----------- | ----------------------------------------- |
| `SMTP_HOST` | SMTP server hostname                      |
| `SMTP_PORT` | SMTP port (587 for STARTTLS, 465 for SSL) |
| `SMTP_USER` | SMTP authentication username              |
| `SMTP_PASS` | SMTP authentication password              |
| `MAIL_FROM` | Sender address shown in outgoing email    |
| `MAIL_TO`   | Recipient for contact form submissions    |
