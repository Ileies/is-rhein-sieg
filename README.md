# Insektenschutz Rhein-Sieg

Website for **Insektenschutz Rhein-Sieg** (Taner Özyurt, Sankt Augustin) - a regional insect screen installation business in the Rhein-Sieg-Kreis, NRW.

**Live site:** insektenschutz-rhein-sieg.de

---

## Tech Stack

| Layer     | Technology                         |
| --------- | ---------------------------------- |
| Framework | SvelteKit 5 (Svelte 5, runes mode) |
| Language  | TypeScript                         |
| Styling   | Tailwind CSS v4 + shadcn-svelte    |
| Font      | DM Sans Variable (self-hosted)     |
| i18n      | Custom Vite plugin (de / en / tr)  |
| Email     | Nodemailer                         |
| Adapter   | `@sveltejs/adapter-node` (SSR)     |
| Runtime   | Node.js                            |

---

## Prerequisites

- [Bun](https://bun.sh) ≥ 1.x
- Node.js ≥ 18 (for production runtime)

---

## Development Setup

```bash
# Install dependencies
bun install

# Copy environment template and fill in values
cp .env.example .env

# Start dev server
bun dev
```

The dev server runs at `http://localhost:5173`.

---

## Environment Variables

| Variable               | Example                                     | Description                                      |
| ---------------------- | ------------------------------------------- | ------------------------------------------------ |
| `ADMIN_PASSWORD`       | `change-me`                                 | Password for `/admin` HTTP Basic Auth (required) |
| `SMTP_HOST`            | `smtp.example.com`                          | SMTP server hostname                             |
| `SMTP_PORT`            | `587`                                       | SMTP port (587 STARTTLS / 465 SSL)               |
| `SMTP_USER`            | `user@example.com`                          | SMTP authentication username                     |
| `SMTP_PASS`            | `secret`                                    | SMTP authentication password                     |
| `MAIL_FROM`            | `"Insektenschutz Rhein-Sieg <noreply@...>"` | Sender shown in outgoing mail                    |
| `MAIL_TO`              | `info@insektenschutz-rhein-sieg.de`         | Recipient for contact form submissions           |
| `REFERENCES_DIR`       | `/var/data/references`                      | Override path for gallery images (optional)      |
| `REFERENCES_DATA_FILE` | `/var/data/references.json`                 | Override path for gallery JSON (optional)        |

---

## Scripts

| Command       | Description                       |
| ------------- | --------------------------------- |
| `bun dev`     | Start development server with HMR |
| `bun build`   | Production build                  |
| `bun preview` | Preview production build locally  |
| `bun check`   | Type-check with `svelte-check`    |
| `bun lint`    | Lint and format check             |
| `bun format`  | Auto-format all files             |

---

## Project Structure

```
data/
  references.json        # Gallery metadata (categories + image list)
  references/            # Gallery image files
messages/                # Translation source files (JSON, one per domain)
src/
  app.css                # Global styles, design tokens, Tailwind imports
  app.html               # HTML shell (%lang% placeholder for SSR locale injection)
  hooks.server.ts        # Locale resolution, security headers, admin auth
  lib/
    components/          # Shared UI components (Header, Footer, ...)
    i18n-plugin.ts       # Vite plugin: watches messages/, generates messages.ts
    messages.ts          # Auto-generated - do not edit
    server/
      rate-limiter.ts    # In-memory rate limiter for contact form
      references.ts      # Gallery data access (read/write references.json)
  routes/
    +layout.svelte
    +page.svelte          # Homepage
    admin/                # Gallery management UI (HTTP Basic Auth required)
    leistungen/           # Services
    referenzen/           # Project gallery
    ueber-uns/            # About
    kontakt/              # Contact form (server action + Nodemailer)
    api/locale/           # Locale switching endpoint
static/                  # Static assets (images, fonts, favicon)
```

---

## Internationalisation

Translations are stored in `messages/*.json`. Each key maps to a `[de, en, tr]` array:

```json
{
	"nav_home": ["Startseite", "Home", "Ana Sayfa"],
	"greeting": ["Hallo {name}", "Hello {name}", "Merhaba {name}"]
}
```

The Vite plugin regenerates `src/lib/messages.ts` on every change. Import and use the generated functions:

```ts
import { nav_home, greeting } from '$lib/messages';

nav_home(); // → "Startseite" (active locale)
greeting({ name: 'Taner' }); // → "Hallo Taner"
```

The active locale is stored in the `LOCALE` cookie and resolved server-side on every request.

---

## Deployment

Build the application and run the Node.js output:

```bash
bun build
node build/index.js
```

Set all required environment variables before starting the process. The application listens on `PORT` (default `3000`).

Use a process manager (systemd, PM2) and place a reverse proxy (nginx, Caddy) in front for TLS termination.
