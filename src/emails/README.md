# VRM Associates — Email Templates

HTML email templates for the contact and careers forms. Delivery uses **Google SMTP** via Nodemailer (`api/lib/mail.ts`).

## Files

| File | Purpose |
|------|---------|
| `contactEnquiryEmail.ts` | Contact form: internal notification + auto-reply to sender |
| `jobApplicationEmail.ts` | Careers form: internal notification + auto-reply to applicant |

## Environment Variables

Add to `.env` (and Vercel project settings for production):

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=office@vrmca.in
SMTP_PASS=your-google-app-password
SMTP_FROM=office@vrmca.in
SMTP_TO=office@vrmca.in
SMTP_TO_2=second-recipient@example.com
```

Lead notifications are sent to `SMTP_TO` and, when set, `SMTP_TO_2` (defaults: `office@vrmca.in`). Auto-replies are sent from `SMTP_FROM` to the submitter.
