Dies ist ein Messeplaner-Tool auf Basis von Next.js. Es generiert nach einem Fragebogen einen personalisierten PDF-Plan mit OpenAI und sendet ihn per E-Mail.

## Getting Started

Entwicklungsserver starten:

```bash
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) im Browser.

Konfiguration: Legen Sie `.env.local` an mit

```
OPENAI_API_KEY=...
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=absender@domain.tld
MAIL_FROM="TAS Messeplaner <absender@domain.tld>"

# OAuth2 für Microsoft 365 SMTP.Send (Client Credentials)
OAUTH_TENANT_ID=...
OAUTH_CLIENT_ID=...
OAUTH_CLIENT_SECRET=...
```

Work Sans ist für Web und PDF eingebunden. Markenfarben: Dark Blue #002045, Turquoise #23F0C7, Grau-Töne wie im Styleguide. Logo unter `public/tas_logo.png`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
