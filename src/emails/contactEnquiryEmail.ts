/**
 * VRM Associates — Contact Enquiry Email Template
 * Sent to VRM staff when a visitor submits the contact form.
 */

export interface ContactEnquiryData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

const SERVICE_LABELS: Record<string, string> = {
  audit: "Audit & Assurance",
  tax: "Direct Tax Services",
  gst: "GST Services",
  advisory: "Advisory Services",
  "company-law": "Company Law Matters",
  llp: "LLP Services",
  bookkeeping: "Bookkeeping",
  "virtual-cfo": "Virtual CFO / Office",
};

export function contactEnquiryEmailHtml(data: ContactEnquiryData): string {
  const serviceLabel = data.service
    ? SERVICE_LABELS[data.service] ?? data.service
    : "Not specified";

  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "long",
    timeStyle: "short",
  });

  return /* html */ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Enquiry — VRM Associates</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#F0F4F8;font-family:'Inter',Arial,sans-serif;-webkit-font-smoothing:antialiased;">

  <!-- Outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F0F4F8;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- ═══════════════════════════════════════════
               HEADER — dark brand bar with logo lockup
          ═══════════════════════════════════════════ -->
          <tr>
            <td style="background-color:#0F172A;border-radius:8px 8px 0 0;padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <!-- Logo wordmark -->
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-right:14px;vertical-align:middle;">
                          <!-- Cyan accent square mimicking the brand mark -->
                          <div style="width:36px;height:36px;background-color:#0891B2;border-radius:4px;display:inline-block;text-align:center;line-height:36px;">
                            <span style="font-family:'Space Grotesk',Arial,sans-serif;font-size:16px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">V</span>
                          </div>
                        </td>
                        <td style="vertical-align:middle;">
                          <span style="font-family:'Space Grotesk',Arial,sans-serif;font-size:18px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;display:block;line-height:1.1;">Virendra R M &amp; Associates</span>
                          <span style="font-family:'Inter',Arial,sans-serif;font-size:11px;color:#94A3B8;letter-spacing:0.8px;text-transform:uppercase;">Chartered Accountants</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <span style="display:inline-block;background-color:rgba(8,145,178,0.15);border:1px solid rgba(8,145,178,0.4);border-radius:20px;padding:5px 14px;font-family:'Inter',Arial,sans-serif;font-size:11px;font-weight:600;color:#38BDF8;letter-spacing:0.6px;text-transform:uppercase;">New Enquiry</span>
                  </td>
                </tr>
              </table>
              <!-- Cyan rule -->
              <div style="height:1px;background:linear-gradient(to right,#0891B2,rgba(8,145,178,0.1));margin-top:24px;"></div>
              <p style="margin:16px 0 0;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#94A3B8;">
                Received on ${submittedAt} IST
              </p>
            </td>
          </tr>

          <!-- ═══════════════════════════════════════════
               BODY — white card
          ═══════════════════════════════════════════ -->
          <tr>
            <td style="background-color:#ffffff;padding:40px 40px 32px;">

              <!-- Section heading -->
              <h1 style="margin:0 0 6px;font-family:'Space Grotesk',Arial,sans-serif;font-size:22px;font-weight:700;color:#0F172A;letter-spacing:-0.4px;">
                Contact Form Submission
              </h1>
              <p style="margin:0 0 32px;font-family:'Inter',Arial,sans-serif;font-size:14px;color:#64748B;line-height:1.6;">
                A visitor has submitted an enquiry through the VRM Associates website. Please review the details below and respond within <strong style="color:#0F172A;">one business day</strong>.
              </p>

              <!-- Divider -->
              <div style="height:1px;background-color:#E2E8F0;margin-bottom:32px;"></div>

              <!-- Sender details grid -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
                <tr>
                  <td width="50%" style="padding-right:12px;padding-bottom:20px;vertical-align:top;">
                    <p style="margin:0 0 4px;font-family:'Inter',Arial,sans-serif;font-size:10px;font-weight:600;color:#94A3B8;letter-spacing:0.9px;text-transform:uppercase;">Full Name</p>
                    <p style="margin:0;font-family:'Space Grotesk',Arial,sans-serif;font-size:16px;font-weight:600;color:#0F172A;">${escapeHtml(data.name)}</p>
                  </td>
                  <td width="50%" style="padding-left:12px;padding-bottom:20px;vertical-align:top;">
                    <p style="margin:0 0 4px;font-family:'Inter',Arial,sans-serif;font-size:10px;font-weight:600;color:#94A3B8;letter-spacing:0.9px;text-transform:uppercase;">Email Address</p>
                    <p style="margin:0;">
                      <a href="mailto:${escapeHtml(data.email)}" style="font-family:'Inter',Arial,sans-serif;font-size:14px;color:#0891B2;text-decoration:none;font-weight:500;">${escapeHtml(data.email)}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="padding-right:12px;padding-bottom:20px;vertical-align:top;">
                    <p style="margin:0 0 4px;font-family:'Inter',Arial,sans-serif;font-size:10px;font-weight:600;color:#94A3B8;letter-spacing:0.9px;text-transform:uppercase;">Phone Number</p>
                    <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:14px;color:#0F172A;font-weight:500;">${data.phone ? escapeHtml(data.phone) : '<span style="color:#94A3B8;">Not provided</span>'}</p>
                  </td>
                  <td width="50%" style="padding-left:12px;padding-bottom:20px;vertical-align:top;">
                    <p style="margin:0 0 4px;font-family:'Inter',Arial,sans-serif;font-size:10px;font-weight:600;color:#94A3B8;letter-spacing:0.9px;text-transform:uppercase;">Service Required</p>
                    <p style="margin:0;">
                      <span style="display:inline-block;background-color:#F0F9FF;border:1px solid #BAE6FD;border-radius:4px;padding:3px 10px;font-family:'Inter',Arial,sans-serif;font-size:12px;font-weight:600;color:#0369A1;">${serviceLabel}</span>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Message block -->
              <div style="background-color:#F8FAFC;border-left:3px solid #0891B2;border-radius:0 6px 6px 0;padding:20px 24px;margin-bottom:32px;">
                <p style="margin:0 0 8px;font-family:'Inter',Arial,sans-serif;font-size:10px;font-weight:600;color:#94A3B8;letter-spacing:0.9px;text-transform:uppercase;">Message</p>
                <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:14px;color:#334155;line-height:1.75;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
              </div>

              <!-- CTA buttons -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:8px;">
                <tr>
                  <td style="padding-right:12px;">
                    <a href="mailto:${escapeHtml(data.email)}?subject=Re: Your enquiry to VRM Associates"
                       style="display:inline-block;background-color:#0891B2;color:#ffffff;font-family:'Space Grotesk',Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:0.3px;padding:12px 24px;border-radius:4px;text-decoration:none;">
                      Reply to ${escapeHtml(data.name.split(" ")[0])}
                    </a>
                  </td>
                  ${data.phone ? `
                  <td>
                    <a href="tel:${escapeHtml(data.phone)}"
                       style="display:inline-block;background-color:#ffffff;color:#0F172A;border:1px solid #CBD5E1;font-family:'Space Grotesk',Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:0.3px;padding:12px 24px;border-radius:4px;text-decoration:none;">
                      Call Back
                    </a>
                  </td>
                  ` : ""}
                </tr>
              </table>

            </td>
          </tr>

          <!-- ═══════════════════════════════════════════
               FOOTER
          ═══════════════════════════════════════════ -->
          <tr>
            <td style="background-color:#0F172A;border-radius:0 0 8px 8px;padding:24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-family:'Space Grotesk',Arial,sans-serif;font-size:13px;font-weight:600;color:#ffffff;">Virendra R M &amp; Associates</p>
                    <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:12px;color:#64748B;line-height:1.6;">
                      002, Bldg No C-8 Prahlad CHS, Shanti Nagar Sector 4,<br/>Mira Road East, Thane 401107
                    </p>
                  </td>
                  <td align="right" style="vertical-align:top;">
                    <p style="margin:0 0 2px;font-family:'Inter',Arial,sans-serif;font-size:12px;color:#64748B;">
                      <a href="mailto:office@vrmca.in" style="color:#0891B2;text-decoration:none;">office@vrmca.in</a>
                    </p>
                    <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:12px;color:#64748B;">+91 777706692</p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:16px;">
                    <div style="height:1px;background-color:rgba(255,255,255,0.06);"></div>
                    <p style="margin:12px 0 0;font-family:'Inter',Arial,sans-serif;font-size:11px;color:#475569;text-align:center;">
                      This is an automated notification from your website contact form. Do not reply directly to this email.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}

/** Auto-reply sent to the person who submitted the form */
export function contactAutoReplyHtml(data: ContactEnquiryData): string {
  return /* html */ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We've received your enquiry — VRM Associates</title>
</head>
<body style="margin:0;padding:0;background-color:#F0F4F8;font-family:'Inter',Arial,sans-serif;-webkit-font-smoothing:antialiased;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F0F4F8;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#0F172A;border-radius:8px 8px 0 0;padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding-right:14px;vertical-align:middle;">
                          <div style="width:36px;height:36px;background-color:#0891B2;border-radius:4px;display:inline-block;text-align:center;line-height:36px;">
                            <span style="font-family:'Space Grotesk',Arial,sans-serif;font-size:16px;font-weight:700;color:#ffffff;">V</span>
                          </div>
                        </td>
                        <td style="vertical-align:middle;">
                          <span style="font-family:'Space Grotesk',Arial,sans-serif;font-size:18px;font-weight:700;color:#ffffff;display:block;line-height:1.1;">Virendra R M &amp; Associates</span>
                          <span style="font-family:'Inter',Arial,sans-serif;font-size:11px;color:#94A3B8;letter-spacing:0.8px;text-transform:uppercase;">Chartered Accountants</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <div style="height:1px;background:linear-gradient(to right,#0891B2,rgba(8,145,178,0.1));margin-top:24px;"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:40px 40px 32px;">
              <h1 style="margin:0 0 8px;font-family:'Space Grotesk',Arial,sans-serif;font-size:24px;font-weight:700;color:#0F172A;letter-spacing:-0.4px;">
                Thank you, ${escapeHtml(data.name.split(" ")[0])}.
              </h1>
              <p style="margin:0 0 28px;font-family:'Inter',Arial,sans-serif;font-size:15px;color:#475569;line-height:1.7;">
                We've received your enquiry and will get back to you within <strong style="color:#0F172A;">one business day</strong>.
                Our team reviews every message carefully — a qualified professional will respond to yours shortly.
              </p>

              <div style="height:1px;background-color:#E2E8F0;margin-bottom:28px;"></div>

              <!-- Summary of what was submitted -->
              <p style="margin:0 0 16px;font-family:'Space Grotesk',Arial,sans-serif;font-size:13px;font-weight:600;color:#0F172A;letter-spacing:-0.1px;">Your Submission Summary</p>

              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #E2E8F0;border-radius:6px;overflow:hidden;margin-bottom:32px;">
                <tr style="background-color:#F8FAFC;">
                  <td style="padding:10px 16px;font-family:'Inter',Arial,sans-serif;font-size:12px;font-weight:600;color:#64748B;letter-spacing:0.5px;text-transform:uppercase;border-bottom:1px solid #E2E8F0;width:36%;">Field</td>
                  <td style="padding:10px 16px;font-family:'Inter',Arial,sans-serif;font-size:12px;font-weight:600;color:#64748B;letter-spacing:0.5px;text-transform:uppercase;border-bottom:1px solid #E2E8F0;">Details</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#64748B;border-bottom:1px solid #F1F5F9;">Name</td>
                  <td style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#0F172A;font-weight:500;border-bottom:1px solid #F1F5F9;">${escapeHtml(data.name)}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#64748B;border-bottom:1px solid #F1F5F9;">Email</td>
                  <td style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#0F172A;font-weight:500;border-bottom:1px solid #F1F5F9;">${escapeHtml(data.email)}</td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#64748B;border-bottom:1px solid #F1F5F9;">Phone</td>
                  <td style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#0F172A;font-weight:500;border-bottom:1px solid #F1F5F9;">${escapeHtml(data.phone)}</td>
                </tr>
                ` : ""}
                ${data.service ? `
                <tr>
                  <td style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#64748B;border-bottom:1px solid #F1F5F9;">Service</td>
                  <td style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#0F172A;font-weight:500;border-bottom:1px solid #F1F5F9;">${escapeHtml(data.service ? (SERVICE_LABELS[data.service] ?? data.service) : "")}</td>
                </tr>
                ` : ""}
                <tr>
                  <td style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#64748B;vertical-align:top;">Message</td>
                  <td style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#0F172A;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</td>
                </tr>
              </table>

              <!-- What happens next -->
              <div style="background-color:#F0F9FF;border:1px solid #BAE6FD;border-radius:6px;padding:20px 24px;margin-bottom:32px;">
                <p style="margin:0 0 12px;font-family:'Space Grotesk',Arial,sans-serif;font-size:13px;font-weight:700;color:#0369A1;">What happens next?</p>
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                  ${["Our team will review your message today.", "A qualified CA or associate will reach out within 1 business day.", "We may call or email to understand your requirements better."].map((step, i) => `
                  <tr>
                    <td style="padding:4px 0;vertical-align:top;width:28px;">
                      <span style="display:inline-block;width:20px;height:20px;background-color:#0891B2;border-radius:50%;text-align:center;line-height:20px;font-family:'Space Grotesk',Arial,sans-serif;font-size:10px;font-weight:700;color:#ffffff;">${i + 1}</span>
                    </td>
                    <td style="padding:4px 0 4px 10px;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#334155;line-height:1.5;">${step}</td>
                  </tr>
                  `).join("")}
                </table>
              </div>

              <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#64748B;line-height:1.6;">
                For urgent matters, please call us directly at
                <a href="tel:+91777706692" style="color:#0891B2;text-decoration:none;font-weight:500;">+91 777706692</a>
                or email
                <a href="mailto:office@vrmca.in" style="color:#0891B2;text-decoration:none;font-weight:500;">office@vrmca.in</a>.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0F172A;border-radius:0 0 8px 8px;padding:24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-family:'Space Grotesk',Arial,sans-serif;font-size:13px;font-weight:600;color:#ffffff;">Virendra R M &amp; Associates</p>
                    <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:12px;color:#64748B;line-height:1.6;">
                      002, Bldg No C-8 Prahlad CHS, Shanti Nagar Sector 4,<br/>Mira Road East, Thane 401107
                    </p>
                  </td>
                  <td align="right" style="vertical-align:top;">
                    <p style="margin:0 0 2px;font-family:'Inter',Arial,sans-serif;font-size:12px;">
                      <a href="mailto:office@vrmca.in" style="color:#0891B2;text-decoration:none;">office@vrmca.in</a>
                    </p>
                    <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:12px;color:#64748B;">+91 777706692</p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:16px;">
                    <div style="height:1px;background-color:rgba(255,255,255,0.06);"></div>
                    <p style="margin:12px 0 0;font-family:'Inter',Arial,sans-serif;font-size:11px;color:#475569;text-align:center;">
                      © ${new Date().getFullYear()} Virendra R M &amp; Associates. All rights reserved.<br/>
                      This email was sent because you submitted an enquiry on our website.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}

/** Plain-text fallback for contact enquiry */
export function contactEnquiryEmailText(data: ContactEnquiryData): string {
  const serviceLabel = data.service
    ? SERVICE_LABELS[data.service] ?? data.service
    : "Not specified";

  return `
NEW CONTACT ENQUIRY — VRM ASSOCIATES
=====================================

Name:     ${data.name}
Email:    ${data.email}
Phone:    ${data.phone ?? "Not provided"}
Service:  ${serviceLabel}

Message:
${data.message}

=====================================
Virendra R M & Associates | +91 777706692 | office@vrmca.in
  `.trim();
}

/** Plain-text auto-reply */
export function contactAutoReplyText(data: ContactEnquiryData): string {
  return `
Hi ${data.name.split(" ")[0]},

Thank you for reaching out to VRM Associates. We have received your enquiry
and will respond within one business day.

For urgent matters, please call us at +91 777706692.

Warm regards,
Team VRM Associates
office@vrmca.in | +91 777706692
  `.trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
