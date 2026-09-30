import {
  contactEnquiryEmailHtml,
  contactEnquiryEmailText,
  contactAutoReplyHtml,
  contactAutoReplyText,
  type ContactEnquiryData,
} from '../src/emails/contactEnquiryEmail';
import { sendMail, getLeadNotificationRecipients } from './lib/mail';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = req.body;

    const data: ContactEnquiryData = {
      name: body.name,
      email: body.email,
      phone: body.phone || undefined,
      service: body.service || undefined,
      message: body.message,
    };

    // 1. Internal notification to VRM staff
    await sendMail({
      fromName: 'VRM Website',
      to: getLeadNotificationRecipients(),
      replyTo: data.email,
      subject: `New Contact Enquiry from ${data.name}`,
      html: contactEnquiryEmailHtml(data),
      text: contactEnquiryEmailText(data),
    });

    // 2. Auto-reply thank-you email to the enquirer (fire & forget)
    sendMail({
      fromName: 'VRM Associates',
      to: data.email,
      subject: "We've received your enquiry — VRM Associates",
      html: contactAutoReplyHtml(data),
      text: contactAutoReplyText(data),
    }).catch((err) => console.warn('Auto-reply failed:', err));

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('API Route Error:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
