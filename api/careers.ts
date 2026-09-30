import {
  jobApplicationEmailHtml,
  jobApplicationEmailText,
  jobApplicationAutoReplyHtml,
  jobApplicationAutoReplyText,
  type JobApplicationData,
} from '../src/emails/jobApplicationEmail';
import { sendMail, getLeadNotificationRecipients } from './lib/mail';

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

    const attachments: { filename: string; content: Buffer }[] = [];
    if (body.attachmentBase64 && body.attachmentName) {
      const base64Content = body.attachmentBase64.split(',')[1] || body.attachmentBase64;
      attachments.push({
        filename: body.attachmentName,
        content: Buffer.from(base64Content, 'base64'),
      });
    }

    // 1. Internal notification to VRM staff with resume attached
    await sendMail({
      fromName: 'VRM Careers',
      to: getLeadNotificationRecipients(),
      replyTo: data.email,
      subject: `New Application: ${data.firstName} ${data.lastName}`,
      html: jobApplicationEmailHtml(data),
      text: jobApplicationEmailText(data),
      attachments,
    });

    // 2. Auto-reply thank-you email to the applicant (fire & forget)
    sendMail({
      fromName: 'VRM Associates',
      to: data.email,
      subject: 'Your application to VRM Associates — Received',
      html: jobApplicationAutoReplyHtml(data),
      text: jobApplicationAutoReplyText(data),
    }).catch((err) => console.warn('Auto-reply failed:', err));

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('API Route Error:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
