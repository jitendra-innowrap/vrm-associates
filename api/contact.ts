import { Resend } from 'resend';
import {
  contactEnquiryEmailHtml,
  contactEnquiryEmailText,
  contactAutoReplyHtml,
  contactAutoReplyText,
  type ContactEnquiryData,
} from '../src/emails/contactEnquiryEmail';

// Free tier: must send from onboarding@resend.dev to your verified email only
const FROM_EMAIL = 'onboarding@resend.dev';
const TO_EMAIL = 'jitendra@innowrap.com';

export default async function handler(req: any, res: any) {
  console.log('RESEND_API_KEY inside handler:', process.env.RESEND_API_KEY);
  const resend = new Resend(process.env.RESEND_API_KEY);
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
    const { error: notifyError } = await resend.emails.send({
      from: `VRM Website <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: data.email,
      subject: `New Contact Enquiry from ${data.name}`,
      html: contactEnquiryEmailHtml(data),
      text: contactEnquiryEmailText(data),
    });

    if (notifyError) {
      console.error('Resend notify error:', notifyError);
      return res.status(400).json({ error: notifyError.message });
    }

    // 2. Auto-reply thank-you email to the enquirer (fire & forget)
    resend.emails.send({
      from: `VRM Associates <${FROM_EMAIL}>`,
      to: [data.email],
      subject: "We've received your enquiry — VRM Associates",
      html: contactAutoReplyHtml(data),
      text: contactAutoReplyText(data),
    }).catch((err) => console.warn('Auto-reply failed (domain not verified?):', err));

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('API Route Error:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
