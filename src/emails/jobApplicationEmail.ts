/**
 * VRM Associates — Job Application Email Template
 * Sent to VRM staff when a candidate submits the careers form.
 */

export interface JobApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  qualification: string;
}

const QUALIFICATION_LABELS: Record<string, string> = {
  "ca-final": "CA Final",
  "ca-inter": "CA Inter / IPCC",
  "ca-foundation": "CA Foundation",
  "qualified-ca": "Qualified CA (FCA / ACA)",
  cs: "Company Secretary (CS)",
  bcom: "B.Com / M.Com",
  "mba-finance": "MBA Finance",
  other: "Other",
};

export function jobApplicationEmailHtml(data: JobApplicationData): string {
  const fullName = `${data.firstName} ${data.lastName}`;
  const qualLabel =
    QUALIFICATION_LABELS[data.qualification] ?? data.qualification;

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
  <title>New Job Application — VRM Associates</title>
</head>
<body style="margin:0;padding:0;background-color:#F0F4F8;font-family:'Inter',Arial,sans-serif;-webkit-font-smoothing:antialiased;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F0F4F8;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- ═══════════════════════════════════════════
               HEADER
          ═══════════════════════════════════════════ -->
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
                          <span style="font-family:'Space Grotesk',Arial,sans-serif;font-size:18px;font-weight:700;color:#ffffff;display:block;line-height:1.1;">Virendra RM &amp; Associates</span>
                          <span style="font-family:'Inter',Arial,sans-serif;font-size:11px;color:#94A3B8;letter-spacing:0.8px;text-transform:uppercase;">Chartered Accountants</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <span style="display:inline-block;background-color:rgba(8,145,178,0.15);border:1px solid rgba(8,145,178,0.4);border-radius:20px;padding:5px 14px;font-family:'Inter',Arial,sans-serif;font-size:11px;font-weight:600;color:#38BDF8;letter-spacing:0.6px;text-transform:uppercase;">New Application</span>
                  </td>
                </tr>
              </table>
              <div style="height:1px;background:linear-gradient(to right,#0891B2,rgba(8,145,178,0.1));margin-top:24px;"></div>
              <p style="margin:16px 0 0;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#94A3B8;">
                Received on ${submittedAt} IST
              </p>
            </td>
          </tr>

          <!-- ═══════════════════════════════════════════
               BODY
          ═══════════════════════════════════════════ -->
          <tr>
            <td style="background-color:#ffffff;padding:40px 40px 32px;">

              <h1 style="margin:0 0 6px;font-family:'Space Grotesk',Arial,sans-serif;font-size:22px;font-weight:700;color:#0F172A;letter-spacing:-0.4px;">
                Job Application Received
              </h1>
              <p style="margin:0 0 32px;font-family:'Inter',Arial,sans-serif;font-size:14px;color:#64748B;line-height:1.6;">
                A candidate has submitted an application through the VRM Associates careers page. The resume is attached to this email.
              </p>

              <div style="height:1px;background-color:#E2E8F0;margin-bottom:32px;"></div>

              <!-- Candidate avatar + name -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px;">
                <tr>
                  <td style="vertical-align:middle;padding-right:16px;">
                    <!-- Avatar circle with initials -->
                    <div style="width:52px;height:52px;background:linear-gradient(135deg,#0891B2,#0369A1);border-radius:50%;text-align:center;line-height:52px;display:inline-block;">
                      <span style="font-family:'Space Grotesk',Arial,sans-serif;font-size:18px;font-weight:700;color:#ffffff;">${escapeHtml(data.firstName.charAt(0).toUpperCase())}${escapeHtml(data.lastName.charAt(0).toUpperCase())}</span>
                    </div>
                  </td>
                  <td style="vertical-align:middle;">
                    <p style="margin:0;font-family:'Space Grotesk',Arial,sans-serif;font-size:20px;font-weight:700;color:#0F172A;">${escapeHtml(fullName)}</p>
                    <p style="margin:4px 0 0;">
                      <span style="display:inline-block;background-color:#ECFDF5;border:1px solid #A7F3D0;border-radius:4px;padding:3px 10px;font-family:'Inter',Arial,sans-serif;font-size:12px;font-weight:600;color:#065F46;">${qualLabel}</span>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Details grid -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #E2E8F0;border-radius:6px;overflow:hidden;margin-bottom:28px;">
                <tr style="background-color:#F8FAFC;">
                  <td colspan="2" style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:11px;font-weight:700;color:#64748B;letter-spacing:0.8px;text-transform:uppercase;border-bottom:1px solid #E2E8F0;">
                    Candidate Details
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:12px;color:#94A3B8;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #F1F5F9;width:36%;vertical-align:top;">Full Name</td>
                  <td style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:14px;color:#0F172A;font-weight:500;border-bottom:1px solid #F1F5F9;">${escapeHtml(fullName)}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:12px;color:#94A3B8;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #F1F5F9;vertical-align:top;">Email</td>
                  <td style="padding:12px 16px;border-bottom:1px solid #F1F5F9;">
                    <a href="mailto:${escapeHtml(data.email)}" style="font-family:'Inter',Arial,sans-serif;font-size:14px;color:#0891B2;text-decoration:none;font-weight:500;">${escapeHtml(data.email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:12px;color:#94A3B8;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #F1F5F9;vertical-align:top;">Mobile</td>
                  <td style="padding:12px 16px;border-bottom:1px solid #F1F5F9;">
                    <a href="tel:${escapeHtml(data.mobile)}" style="font-family:'Inter',Arial,sans-serif;font-size:14px;color:#0891B2;text-decoration:none;font-weight:500;">${escapeHtml(data.mobile)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:12px;color:#94A3B8;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;">Qualification</td>
                  <td style="padding:12px 16px;font-family:'Inter',Arial,sans-serif;font-size:14px;color:#0F172A;font-weight:500;">${qualLabel}</td>
                </tr>
              </table>

              <!-- Attachment note -->
              <div style="background-color:#FFF7ED;border:1px solid #FED7AA;border-radius:6px;padding:16px 20px;margin-bottom:32px;">
                <table cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding-right:12px;vertical-align:middle;">
                      <!-- Paperclip icon via Unicode -->
                      <span style="font-size:18px;color:#EA580C;">📎</span>
                    </td>
                    <td>
                      <p style="margin:0;font-family:'Space Grotesk',Arial,sans-serif;font-size:13px;font-weight:600;color:#9A3412;">Resume / CV Attached</p>
                      <p style="margin:2px 0 0;font-family:'Inter',Arial,sans-serif;font-size:12px;color:#C2410C;">The candidate's resume has been attached to this email. Please review it before proceeding.</p>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- CTA buttons -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:8px;">
                <tr>
                  <td style="padding-right:12px;">
                    <a href="mailto:${escapeHtml(data.email)}?subject=Re: Your application to VRM Associates"
                       style="display:inline-block;background-color:#0891B2;color:#ffffff;font-family:'Space Grotesk',Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:0.3px;padding:12px 24px;border-radius:4px;text-decoration:none;">
                      Reply to Candidate
                    </a>
                  </td>
                  <td>
                    <a href="tel:${escapeHtml(data.mobile)}"
                       style="display:inline-block;background-color:#ffffff;color:#0F172A;border:1px solid #CBD5E1;font-family:'Space Grotesk',Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:0.3px;padding:12px 24px;border-radius:4px;text-decoration:none;">
                      Call Candidate
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0F172A;border-radius:0 0 8px 8px;padding:24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-family:'Space Grotesk',Arial,sans-serif;font-size:13px;font-weight:600;color:#ffffff;">Virendra RM &amp; Associates</p>
                    <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:12px;color:#64748B;line-height:1.6;">
                      002, Bldg No C-8 Prahlad CHS, Shanti Nagar Sector 4,<br/>Mira Road East, Thane 401107
                    </p>
                  </td>
                  <td align="right" style="vertical-align:top;">
                    <p style="margin:0 0 2px;">
                      <a href="mailto:virendra@vrmca.in" style="font-family:'Inter',Arial,sans-serif;font-size:12px;color:#0891B2;text-decoration:none;">virendra@vrmca.in</a>
                    </p>
                    <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:12px;color:#64748B;">+91 7777067692</p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:16px;">
                    <div style="height:1px;background-color:rgba(255,255,255,0.06);"></div>
                    <p style="margin:12px 0 0;font-family:'Inter',Arial,sans-serif;font-size:11px;color:#475569;text-align:center;">
                      This is an automated notification from the careers form on your website.
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

/** Auto-reply sent to the applicant */
export function jobApplicationAutoReplyHtml(data: JobApplicationData): string {
  const fullName = `${data.firstName} ${data.lastName}`;

  return /* html */ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Application Received — VRM Associates</title>
</head>
<body style="margin:0;padding:0;background-color:#F0F4F8;font-family:'Inter',Arial,sans-serif;-webkit-font-smoothing:antialiased;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F0F4F8;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#0F172A;border-radius:8px 8px 0 0;padding:32px 40px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right:14px;vertical-align:middle;">
                    <div style="width:36px;height:36px;background-color:#0891B2;border-radius:4px;display:inline-block;text-align:center;line-height:36px;">
                      <span style="font-family:'Space Grotesk',Arial,sans-serif;font-size:16px;font-weight:700;color:#ffffff;">V</span>
                    </div>
                  </td>
                  <td style="vertical-align:middle;">
                    <span style="font-family:'Space Grotesk',Arial,sans-serif;font-size:18px;font-weight:700;color:#ffffff;display:block;line-height:1.1;">Virendra RM &amp; Associates</span>
                    <span style="font-family:'Inter',Arial,sans-serif;font-size:11px;color:#94A3B8;letter-spacing:0.8px;text-transform:uppercase;">Chartered Accountants</span>
                  </td>
                </tr>
              </table>
              <div style="height:1px;background:linear-gradient(to right,#0891B2,rgba(8,145,178,0.1));margin-top:24px;"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:40px 40px 32px;">

              <!-- Success checkmark -->
              <div style="width:56px;height:56px;background-color:#ECFDF5;border-radius:50%;margin:0 0 24px;text-align:center;line-height:56px;">
                <span style="font-size:24px;">✓</span>
              </div>

              <h1 style="margin:0 0 8px;font-family:'Space Grotesk',Arial,sans-serif;font-size:24px;font-weight:700;color:#0F172A;letter-spacing:-0.4px;">
                Application received, ${escapeHtml(data.firstName)}.
              </h1>
              <p style="margin:0 0 28px;font-family:'Inter',Arial,sans-serif;font-size:15px;color:#475569;line-height:1.7;">
                Thank you for your interest in joining the VRM Associates team. We've received your application and resume, and our team will review it carefully.
              </p>

              <div style="height:1px;background-color:#E2E8F0;margin-bottom:28px;"></div>

              <!-- Timeline -->
              <p style="margin:0 0 16px;font-family:'Space Grotesk',Arial,sans-serif;font-size:14px;font-weight:700;color:#0F172A;">What happens next</p>

              <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:32px;">
                ${[
                  { icon: "📋", title: "Application Review", desc: "Our team reviews your qualifications and resume within 2–3 business days." },
                  { icon: "📞", title: "Initial Contact", desc: "If there's a match, we'll reach out via phone or email to discuss next steps." },
                  { icon: "🤝", title: "Interview Process", desc: "Shortlisted candidates will be invited for an in-person or virtual discussion." },
                ].map((step, i) => `
                <tr>
                  <td style="width:52px;padding-bottom:${i < 2 ? "20" : "0"}px;vertical-align:top;">
                    <div style="width:40px;height:40px;background-color:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;text-align:center;line-height:40px;font-size:18px;">${step.icon}</div>
                    ${i < 2 ? '<div style="width:1px;height:16px;background-color:#E2E8F0;margin:4px auto 0;"></div>' : ""}
                  </td>
                  <td style="padding-left:16px;padding-bottom:${i < 2 ? "20" : "0"}px;vertical-align:top;">
                    <p style="margin:0 0 4px;font-family:'Space Grotesk',Arial,sans-serif;font-size:13px;font-weight:700;color:#0F172A;">${step.title}</p>
                    <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#64748B;line-height:1.5;">${step.desc}</p>
                  </td>
                </tr>
                `).join("")}
              </table>

              <!-- Note -->
              <div style="background-color:#F8FAFC;border-left:3px solid #0891B2;border-radius:0 6px 6px 0;padding:16px 20px;margin-bottom:28px;">
                <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#475569;line-height:1.6;">
                  Even if there is no immediate opening, we keep strong applications on file and reach out when suitable roles arise. We encourage you to stay in touch.
                </p>
              </div>

              <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:13px;color:#64748B;line-height:1.6;">
                Questions? Email us at
                <a href="mailto:virendra@vrmca.in" style="color:#0891B2;text-decoration:none;font-weight:500;">virendra@vrmca.in</a>
                or call <a href="tel:+917777067692" style="color:#0891B2;text-decoration:none;font-weight:500;">+91 7777067692</a>.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0F172A;border-radius:0 0 8px 8px;padding:24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-family:'Space Grotesk',Arial,sans-serif;font-size:13px;font-weight:600;color:#ffffff;">Virendra RM &amp; Associates</p>
                    <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:12px;color:#64748B;line-height:1.6;">
                      002, Bldg No C-8 Prahlad CHS, Shanti Nagar Sector 4,<br/>Mira Road East, Thane 401107
                    </p>
                  </td>
                  <td align="right" style="vertical-align:top;">
                    <p style="margin:0 0 2px;">
                      <a href="mailto:virendra@vrmca.in" style="font-family:'Inter',Arial,sans-serif;font-size:12px;color:#0891B2;text-decoration:none;">virendra@vrmca.in</a>
                    </p>
                    <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:12px;color:#64748B;">+91 7777067692</p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:16px;">
                    <div style="height:1px;background-color:rgba(255,255,255,0.06);"></div>
                    <p style="margin:12px 0 0;font-family:'Inter',Arial,sans-serif;font-size:11px;color:#475569;text-align:center;">
                      © ${new Date().getFullYear()} Virendra RM &amp; Associates. All rights reserved.<br/>
                      This email was sent because you applied for a position on our careers page.
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

/** Plain-text fallback for job application */
export function jobApplicationEmailText(data: JobApplicationData): string {
  const fullName = `${data.firstName} ${data.lastName}`;
  const qualLabel =
    QUALIFICATION_LABELS[data.qualification] ?? data.qualification;

  return `
NEW JOB APPLICATION — VRM ASSOCIATES
======================================

Candidate:     ${fullName}
Email:         ${data.email}
Mobile:        ${data.mobile}
Qualification: ${qualLabel}

Resume has been attached to this email.

======================================
Virendra RM & Associates | +91 7777067692 | virendra@vrmca.in
  `.trim();
}

/** Plain-text auto-reply for applicant */
export function jobApplicationAutoReplyText(data: JobApplicationData): string {
  return `
Hi ${data.firstName},

Thank you for applying to VRM Associates. We've received your application
and will review it within 2–3 business days. If there's a match, we'll
reach out to discuss next steps.

Questions? Contact us at virendra@vrmca.in or +91 7777067692.

Warm regards,
Team VRM Associates
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
