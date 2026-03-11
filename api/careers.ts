import { Resend } from 'resend';
import {
  jobApplicationEmailHtml,
  jobApplicationEmailText,
  jobApplicationAutoReplyHtml,
  jobApplicationAutoReplyText,
  type JobApplicationData,
} from '../src/emails/jobApplicationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

// Free tier: must send from onboarding@resend.dev to your verified email only
const FROM_EMAIL = 'onboarding@resend.dev';
const TO_EMAIL = 'jitendra@innowrap.com';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = req.body;

    const data: JobApplicationData = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      mobile: body.mobile,
      qualification: body.qualification,
    };

    // Parse base64 resume attachment if provided
    const attachments: { filename: string; content: string }[] = [];
    if (body.attachmentBase64 && body.attachmentName) {
      const base64Content = body.attachmentBase64.split(',')[1] || body.attachmentBase64;
      attachments.push({ content: base64Content, filename: body.attachmentName });
    }

    // 1. Internal notification to VRM staff with resume attached
    const { error: notifyError } = await resend.emails.send({
      from: `VRM Careers <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: data.email,
      subject: `New Application: ${data.firstName} ${data.lastName}`,
      html: jobApplicationEmailHtml(data),
      text: jobApplicationEmailText(data),
      attachments,
    });

    if (notifyError) {
      console.error('Resend notify error:', notifyError);
      return res.status(400).json({ error: notifyError.message });
    }

    // 2. Auto-reply thank-you email to the applicant (fire & forget)
    resend.emails.send({
      from: `VRM Associates <${FROM_EMAIL}>`,
      to: [data.email],
      subject: 'Your application to VRM Associates — Received',
      html: jobApplicationAutoReplyHtml(data),
      text: jobApplicationAutoReplyText(data),
    }).catch((err) => console.warn('Auto-reply failed (domain not verified?):', err));

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('API Route Error:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
