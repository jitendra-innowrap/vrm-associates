import nodemailer from 'nodemailer';
import type Mail from 'nodemailer/lib/mailer';

export const FROM_EMAIL = process.env.SMTP_FROM || process.env.SMTP_USER || 'office@vrmca.in';

/** Primary + optional second inbox for lead/application notifications */
export function getLeadNotificationRecipients(): string[] {
  const recipients = [process.env.SMTP_TO || 'office@vrmca.in', process.env.SMTP_TO_2]
    .map((email) => email?.trim())
    .filter((email): email is string => Boolean(email));

  return [...new Set(recipients)];
}

function getTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error('SMTP_USER and SMTP_PASS environment variables are required');
  }

  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port,
    secure,
    auth: { user, pass },
  });
}

export interface SendMailOptions {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  fromName?: string;
  attachments?: Mail.Attachment[];
}

export async function sendMail(options: SendMailOptions) {
  const transporter = getTransporter();
  const fromLabel = options.fromName ?? 'VRM Associates';
  const from = `${fromLabel} <${FROM_EMAIL}>`;

  return transporter.sendMail({
    from,
    to: options.to,
    replyTo: options.replyTo,
    subject: options.subject,
    html: options.html,
    text: options.text,
    attachments: options.attachments,
  });
}
