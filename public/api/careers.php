<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(405, ['error' => 'Method Not Allowed']);
}

try {
    $body = read_json_body();
    require_fields($body, ['firstName', 'lastName', 'email', 'mobile', 'qualification']);

    $data = [
        'firstName' => sanitize_string($body['firstName'], 100),
        'lastName' => sanitize_string($body['lastName'], 100),
        'email' => sanitize_string($body['email'], 200),
        'mobile' => sanitize_string($body['mobile'], 50),
        'qualification' => sanitize_string($body['qualification'], 100),
    ];

    if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        json_response(400, ['error' => 'Invalid email address']);
    }

    $attachments = [];
    if (!empty($body['attachmentBase64']) && !empty($body['attachmentName'])) {
        $raw = (string) $body['attachmentBase64'];
        if (strpos($raw, ',') !== false) {
            $raw = substr($raw, strpos($raw, ',') + 1);
        }
        $decoded = base64_decode($raw, true);
        if ($decoded === false) {
            json_response(400, ['error' => 'Invalid resume attachment']);
        }

        $filename = sanitize_string((string) $body['attachmentName'], 255);
        $filename = preg_replace('/[^a-zA-Z0-9._-]/', '_', $filename) ?: 'resume.pdf';

        $attachments[] = [
            'filename' => $filename,
            'content' => $decoded,
        ];
    }

    $fullName = $data['firstName'] . ' ' . $data['lastName'];

    send_mail($config, [
        'to' => lead_recipients($config),
        'reply_to' => $data['email'],
        'from_name' => 'VRM Careers',
        'subject' => 'New Application: ' . $fullName,
        'html' => job_staff_html($data),
        'text' => job_staff_text($data),
        'attachments' => $attachments,
    ]);

    try {
        send_mail($config, [
            'to' => $data['email'],
            'from_name' => 'VRM Associates',
            'subject' => 'Your application to VRM Associates — Received',
            'html' => job_autoreply_html($data),
            'text' => job_autoreply_text($data),
        ]);
    } catch (Throwable $autoReplyError) {
        error_log('Careers auto-reply failed: ' . $autoReplyError->getMessage());
    }

    json_response(200, ['success' => true]);
} catch (Throwable $e) {
    api_error_response($e, $config);
}
