# VRM Associates — Resend Email Templates

Two fully-branded HTML email templates for the contact and careers forms.

## Files

| File | Purpose |
|------|---------|
| `contactEnquiryEmail.ts` | Contact form: internal notification + auto-reply to sender |
| `jobApplicationEmail.ts` | Careers form: internal notification + auto-reply to applicant |

---

## Resend Integration (Serverless / Edge Function)

### Contact Form

```ts
import { Resend } from "resend";
import {
  contactEnquiryEmailHtml,
  contactEnquiryEmailText,
  contactAutoReplyHtml,
  contactAutoReplyText,
  type ContactEnquiryData,
} from "@/emails/contactEnquiryEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEnquiry(data: ContactEnquiryData) {
  // 1. Internal notification to VRM staff
  await resend.emails.send({
    from: "VRM Website <noreply@vrmca.in>",
    to: ["office@vrmca.in"],
    replyTo: data.email,
    subject: `New Contact Enquiry from ${data.name}`,
    html: contactEnquiryEmailHtml(data),
    text: contactEnquiryEmailText(data),
  });

  // 2. Auto-reply to the person who submitted
  await resend.emails.send({
    from: "VRM Associates <noreply@vrmca.in>",
    to: [data.email],
    subject: "We've received your enquiry — VRM Associates",
    html: contactAutoReplyHtml(data),
    text: contactAutoReplyText(data),
  });
}
```

### Careers Form

```ts
import { Resend } from "resend";
import {
  jobApplicationEmailHtml,
  jobApplicationEmailText,
  jobApplicationAutoReplyHtml,
  jobApplicationAutoReplyText,
  type JobApplicationData,
} from "@/emails/jobApplicationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendJobApplication(
  data: JobApplicationData,
  resumeBuffer: Buffer,    // resume file as Buffer
  resumeFileName: string   // original file name, e.g. "john-doe-resume.pdf"
) {
  // 1. Internal notification with resume attached
  await resend.emails.send({
    from: "VRM Careers <noreply@vrmca.in>",
    to: ["office@vrmca.in"],
    replyTo: data.email,
    subject: `New Application: ${data.firstName} ${data.lastName}`,
    html: jobApplicationEmailHtml(data),
    text: jobApplicationEmailText(data),
    attachments: [
      {
        filename: resumeFileName,
        content: resumeBuffer,
      },
    ],
  });

  // 2. Auto-reply to the applicant
  await resend.emails.send({
    from: "VRM Associates <noreply@vrmca.in>",
    to: [data.email],
    subject: "Your application to VRM Associates — Received",
    html: jobApplicationAutoReplyHtml(data),
    text: jobApplicationAutoReplyText(data),
  });
}
```

---

## Environment Variables

Add to `.env`:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```
