<?php

declare(strict_types=1);

const SERVICE_LABELS = [
    'audit' => 'Audit & Assurance',
    'tax' => 'Direct Tax Services',
    'gst' => 'GST Services',
    'advisory' => 'Advisory Services',
    'company-law' => 'Company Law Matters',
    'llp' => 'LLP Services',
    'bookkeeping' => 'Bookkeeping',
    'virtual-cfo' => 'Virtual CFO / Office',
];

const QUALIFICATION_LABELS = [
    'ca-final' => 'CA Final',
    'ca-inter' => 'CA Inter / IPCC',
    'ca-foundation' => 'CA Foundation',
    'qualified-ca' => 'Qualified CA (FCA / ACA)',
    'cs' => 'Company Secretary (CS)',
    'bcom' => 'B.Com / M.Com',
    'mba-finance' => 'MBA Finance',
    'other' => 'Other',
];

function esc(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function email_shell(string $title, string $bodyHtml): string
{
    $year = date('Y');
    $titleEsc = esc($title);

    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{$titleEsc}</title>
</head>
<body style="margin:0;padding:0;background-color:#F0F4F8;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F0F4F8;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="background-color:#0F172A;border-radius:8px 8px 0 0;padding:28px 36px;">
            <p style="margin:0;font-family:Arial,sans-serif;font-size:18px;font-weight:700;color:#ffffff;">Virendra R M &amp; Associates</p>
            <p style="margin:4px 0 0;font-size:11px;color:#94A3B8;letter-spacing:0.8px;text-transform:uppercase;">Chartered Accountants</p>
          </td>
        </tr>
        <tr>
          <td style="background-color:#ffffff;padding:36px;">{$bodyHtml}</td>
        </tr>
        <tr>
          <td style="background-color:#0F172A;border-radius:0 0 8px 8px;padding:20px 36px;">
            <p style="margin:0;font-size:12px;color:#94A3B8;line-height:1.6;">
              002, Bldg No C-8 Prahlad CHS, Shanti Nagar Sector 4, Mira Road East, Thane 401107<br/>
              <a href="mailto:office@vrmca.in" style="color:#0891B2;text-decoration:none;">office@vrmca.in</a> · +91 777706692<br/>
              <a href="https://www.linkedin.com/company/virendra-r-m-associates-llp" style="color:#0891B2;text-decoration:none;">LinkedIn</a><br/>
              © {$year} Virendra R M &amp; Associates
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
HTML;
}

/**
 * @param array{name: string, email: string, phone?: string, service?: string, message: string} $data
 */
function contact_staff_html(array $data): string
{
    $service = isset($data['service']) ? (string) $data['service'] : '';
    $serviceLabel = $service !== '' ? (SERVICE_LABELS[$service] ?? $service) : 'Not specified';
    $phone = trim(isset($data['phone']) ? (string) $data['phone'] : '') !== '' ? (string) $data['phone'] : 'Not provided';
    $submittedAt = date('j M Y, g:i A') . ' IST';

    $name = esc($data['name']);
    $email = esc($data['email']);
    $phoneEsc = esc($phone);
    $serviceEsc = esc($serviceLabel);
    $message = esc($data['message']);

    $body = <<<HTML
<p style="margin:0 0 8px;font-size:11px;font-weight:600;color:#0891B2;text-transform:uppercase;">New Enquiry</p>
<h1 style="margin:0 0 20px;font-size:22px;color:#0F172A;">Contact Form Submission</h1>
<p style="margin:0 0 20px;font-size:13px;color:#64748B;">{$submittedAt}</p>
<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2E8F0;border-radius:6px;">
  <tr><td style="padding:12px 16px;border-bottom:1px solid #F1F5F9;color:#64748B;width:35%;">Name</td>
      <td style="padding:12px 16px;border-bottom:1px solid #F1F5F9;color:#0F172A;font-weight:500;">{$name}</td></tr>
  <tr><td style="padding:12px 16px;border-bottom:1px solid #F1F5F9;color:#64748B;">Email</td>
      <td style="padding:12px 16px;border-bottom:1px solid #F1F5F9;"><a href="mailto:{$email}" style="color:#0891B2;">{$email}</a></td></tr>
  <tr><td style="padding:12px 16px;border-bottom:1px solid #F1F5F9;color:#64748B;">Phone</td>
      <td style="padding:12px 16px;border-bottom:1px solid #F1F5F9;color:#0F172A;">{$phoneEsc}</td></tr>
  <tr><td style="padding:12px 16px;border-bottom:1px solid #F1F5F9;color:#64748B;">Service</td>
      <td style="padding:12px 16px;border-bottom:1px solid #F1F5F9;color:#0F172A;">{$serviceEsc}</td></tr>
  <tr><td style="padding:12px 16px;color:#64748B;vertical-align:top;">Message</td>
      <td style="padding:12px 16px;color:#0F172A;white-space:pre-wrap;line-height:1.6;">{$message}</td></tr>
</table>
HTML;

    return email_shell('New Contact Enquiry — VRM Associates', $body);
}

/**
 * @param array{name: string, email: string, phone?: string, service?: string, message: string} $data
 */
function contact_staff_text(array $data): string
{
    $service = isset($data['service']) ? (string) $data['service'] : '';
    $serviceLabel = $service !== '' ? (SERVICE_LABELS[$service] ?? $service) : 'Not specified';
    $phone = trim(isset($data['phone']) ? (string) $data['phone'] : '') !== '' ? (string) $data['phone'] : 'Not provided';

    return trim(
        "NEW CONTACT ENQUIRY — VRM ASSOCIATES\n\n"
        . "Name:    {$data['name']}\n"
        . "Email:   {$data['email']}\n"
        . "Phone:   {$phone}\n"
        . "Service: {$serviceLabel}\n\n"
        . "Message:\n{$data['message']}"
    );
}

/**
 * @param array{name: string, email: string, phone?: string, service?: string, message: string} $data
 */
function contact_autoreply_html(array $data): string
{
    $parts = explode(' ', $data['name']);
    $first = esc($parts[0]);

    $body = <<<HTML
<h1 style="margin:0 0 12px;font-size:22px;color:#0F172A;">Thank you, {$first}.</h1>
<p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.7;">
  We've received your enquiry and will get back to you within <strong>one business day</strong>.
</p>
<p style="margin:0;font-size:13px;color:#64748B;">
  For urgent matters, call <a href="tel:+91777706692" style="color:#0891B2;">+91 777706692</a>
  or email <a href="mailto:office@vrmca.in" style="color:#0891B2;">office@vrmca.in</a>.
</p>
HTML;

    return email_shell("We've received your enquiry — VRM Associates", $body);
}

/**
 * @param array{name: string} $data
 */
function contact_autoreply_text(array $data): string
{
    $parts = explode(' ', $data['name']);
    $first = $parts[0];

    return trim(
        "Hi {$first},\n\n"
        . "Thank you for reaching out to VRM Associates. We have received your enquiry\n"
        . "and will respond within one business day.\n\n"
        . "For urgent matters, please call us at +91 777706692.\n\n"
        . "Warm regards,\nTeam VRM Associates\noffice@vrmca.in"
    );
}

/**
 * @param array{firstName: string, lastName: string, email: string, mobile: string, qualification: string} $data
 */
function job_staff_html(array $data): string
{
    $fullName = $data['firstName'] . ' ' . $data['lastName'];
    $qual = QUALIFICATION_LABELS[$data['qualification']] ?? $data['qualification'];

    $nameEsc = esc($fullName);
    $email = esc($data['email']);
    $mobile = esc($data['mobile']);
    $qualEsc = esc($qual);

    $body = <<<HTML
<p style="margin:0 0 8px;font-size:11px;font-weight:600;color:#0891B2;text-transform:uppercase;">New Application</p>
<h1 style="margin:0 0 20px;font-size:22px;color:#0F172A;">Job Application</h1>
<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2E8F0;border-radius:6px;">
  <tr><td style="padding:12px 16px;border-bottom:1px solid #F1F5F9;color:#64748B;width:35%;">Candidate</td>
      <td style="padding:12px 16px;border-bottom:1px solid #F1F5F9;color:#0F172A;font-weight:500;">{$nameEsc}</td></tr>
  <tr><td style="padding:12px 16px;border-bottom:1px solid #F1F5F9;color:#64748B;">Email</td>
      <td style="padding:12px 16px;border-bottom:1px solid #F1F5F9;"><a href="mailto:{$email}" style="color:#0891B2;">{$email}</a></td></tr>
  <tr><td style="padding:12px 16px;border-bottom:1px solid #F1F5F9;color:#64748B;">Mobile</td>
      <td style="padding:12px 16px;border-bottom:1px solid #F1F5F9;color:#0F172A;">{$mobile}</td></tr>
  <tr><td style="padding:12px 16px;color:#64748B;">Qualification</td>
      <td style="padding:12px 16px;color:#0F172A;">{$qualEsc}</td></tr>
</table>
<p style="margin:20px 0 0;font-size:13px;color:#64748B;">Resume is attached to this email when provided.</p>
HTML;

    return email_shell('New Job Application — VRM Associates', $body);
}

/**
 * @param array{firstName: string, lastName: string, email: string, mobile: string, qualification: string} $data
 */
function job_staff_text(array $data): string
{
    $fullName = $data['firstName'] . ' ' . $data['lastName'];
    $qual = QUALIFICATION_LABELS[$data['qualification']] ?? $data['qualification'];

    return trim(
        "NEW JOB APPLICATION — VRM ASSOCIATES\n\n"
        . "Candidate:     {$fullName}\n"
        . "Email:         {$data['email']}\n"
        . "Mobile:        {$data['mobile']}\n"
        . "Qualification: {$qual}\n\n"
        . "Resume attached when provided."
    );
}

/**
 * @param array{firstName: string} $data
 */
function job_autoreply_html(array $data): string
{
    $first = esc($data['firstName']);

    $body = <<<HTML
<h1 style="margin:0 0 12px;font-size:22px;color:#0F172A;">Thank you, {$first}.</h1>
<p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.7;">
  We've received your application and will review it within <strong>2–3 business days</strong>.
</p>
<p style="margin:0;font-size:13px;color:#64748B;">
  Questions? Email <a href="mailto:office@vrmca.in" style="color:#0891B2;">office@vrmca.in</a>
  or call <a href="tel:+91777706692" style="color:#0891B2;">+91 777706692</a>.
</p>
HTML;

    return email_shell('Your application — VRM Associates', $body);
}

/**
 * @param array{firstName: string} $data
 */
function job_autoreply_text(array $data): string
{
    return trim(
        "Hi {$data['firstName']},\n\n"
        . "Thank you for applying to VRM Associates. We've received your application\n"
        . "and will review it within 2–3 business days.\n\n"
        . "Questions? Contact us at office@vrmca.in or +91 777706692.\n\n"
        . "Warm regards,\nTeam VRM Associates"
    );
}
