# Deploy to cPanel (SFTP)

## 1. Build locally

Ensure `.env` has your SMTP settings (same as `.env.example`), then:

```bash
npm run build
```

This will:

- Install PHPMailer into `public/api/vendor/`
- Generate `public/api/config.php` from `.env`
- Output the site to `dist/`

## 2. Upload via SFTP

Upload **everything inside** the `dist/` folder to your cPanel document root (usually `public_html/`):

```
public_html/
├── index.html
├── assets/
├── api/
│   ├── contact.php
│   ├── careers.php
│   ├── config.php      ← SMTP credentials (from your .env)
│   ├── vendor/         ← PHPMailer
│   └── ...
├── .htaccess           ← SPA routing + leaves /api/*.php alone
├── Virendra-R-M-and-Associates-LLP-2026.pdf
└── ...
```

Do **not** upload only `index.html` — upload the full `dist` contents.

## 3. cPanel requirements

- **PHP 8.0+** (7.4+ may work)
- `openssl` extension enabled (default on most hosts)
- Outbound SMTP allowed (port 587)

## 4. If build did not generate config.php

On the server, copy and edit manually:

```bash
cp api/config.example.php api/config.php
```

Fill in Google App Password and recipient addresses.

## 5. Test

- Open your site and submit the footer contact form
- Check `office@vrmca.in` and `SMTP_TO_2` inbox
- Submitter should receive the thank-you email

## Troubleshooting

Open in your browser (no secrets shown):

```
https://vrmca.in/api/health.php
```

To test SMTP login:

```
https://vrmca.in/api/health.php?smtp_test=1
```

| Issue | Fix |
|-------|-----|
| Form returns 404 | Confirm `api/contact.php` exists in `public_html/api/` |
| 500 / mail not configured | Ensure `api/config.php` exists with valid SMTP |
| PHPMailer missing | Re-upload `api/vendor/` from `dist/api/vendor/` |
| 500 on submit | Check `health.php?smtp_test=1` — often wrong App Password or PHP &lt; 7.4 |
| See exact error | Set `'debug' => true` in `api/config.php`, retry form, then set back to `false` |
| Page refresh 404 on /contact | Ensure `.htaccess` was uploaded |
