<?php

declare(strict_types=1);

require __DIR__ . '/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(405, ['error' => 'Method Not Allowed']);
}

try {
    $body = read_json_body();
    require_fields($body, ['name', 'email', 'message']);

    $data = [
        'name' => sanitize_string($body['name'], 200),
        'email' => sanitize_string($body['email'], 200),
        'phone' => isset($body['phone']) ? sanitize_string((string) $body['phone'], 50) : '',
        'service' => isset($body['service']) ? sanitize_string((string) $body['service'], 100) : '',
        'message' => sanitize_string($body['message'], 5000),
    ];

    if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        json_response(400, ['error' => 'Invalid email address']);
    }

    send_mail($config, [
        'to' => lead_recipients($config),
        'reply_to' => $data['email'],
        'from_name' => 'VRM Website',
        'subject' => 'New Contact Enquiry from ' . $data['name'],
        'html' => contact_staff_html($data),
        'text' => contact_staff_text($data),
    ]);

    try {
        send_mail($config, [
            'to' => $data['email'],
            'from_name' => 'VRM Associates',
            'subject' => "We've received your enquiry — VRM Associates",
            'html' => contact_autoreply_html($data),
            'text' => contact_autoreply_text($data),
        ]);
    } catch (Throwable $autoReplyError) {
        error_log('Contact auto-reply failed: ' . $autoReplyError->getMessage());
    }

    json_response(200, ['success' => true]);
} catch (Throwable $e) {
    api_error_response($e, $config);
}
