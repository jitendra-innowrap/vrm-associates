<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;

/**
 * @param array<string, mixed> $config
 * @return list<string>
 */
function lead_recipients(array $config): array
{
    $list = [trim((string) ($config['smtp_to'] ?? ''))];
    $second = trim((string) ($config['smtp_to_2'] ?? ''));
    if ($second !== '') {
        $list[] = $second;
    }

    return array_values(array_unique(array_filter($list)));
}

/**
 * @param array<string, mixed> $config
 * @param array{
 *   to: string|list<string>,
 *   subject: string,
 *   html: string,
 *   text: string,
 *   reply_to?: string,
 *   from_name?: string,
 *   attachments?: list<array{filename: string, content: string}>
 * } $options
 */
function send_mail(array $config, array $options): void
{
    $mail = new PHPMailer(true);

    $host = (string) ($config['smtp_host'] ?? 'smtp.gmail.com');
    $port = (int) ($config['smtp_port'] ?? 587);
    $secure = (string) ($config['smtp_secure'] ?? 'tls');
    $user = (string) ($config['smtp_user'] ?? '');
    $pass = preg_replace('/\s+/', '', (string) ($config['smtp_pass'] ?? ''));
    $from = (string) ($config['smtp_from'] ?? $user);

    if ($user === '' || $pass === '') {
        throw new RuntimeException('SMTP credentials missing in config.php');
    }

    $mail->isSMTP();
    $mail->Host = $host;
    $mail->SMTPAuth = true;
    $mail->Username = $user;
    $mail->Password = $pass;
    $mail->Port = $port;
    $mail->CharSet = 'UTF-8';
    $mail->Timeout = 30;

    if ($secure === 'ssl' || $port === 465) {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }

    // Common on shared cPanel hosts with SSL inspection
    $mail->SMTPOptions = [
        'ssl' => [
            'verify_peer' => true,
            'verify_peer_name' => true,
            'allow_self_signed' => false,
        ],
    ];

    $fromName = $options['from_name'] ?? 'VRM Associates';
    $mail->setFrom($from, $fromName);

    $to = $options['to'];
    if (is_string($to)) {
        $mail->addAddress($to);
    } else {
        foreach ($to as $address) {
            $mail->addAddress($address);
        }
    }

    if (!empty($options['reply_to'])) {
        $mail->addReplyTo($options['reply_to']);
    }

    if (!empty($options['attachments'])) {
        foreach ($options['attachments'] as $attachment) {
            $mail->addStringAttachment(
                $attachment['content'],
                $attachment['filename']
            );
        }
    }

    $mail->isHTML(true);
    $mail->Subject = $options['subject'];
    $mail->Body = $options['html'];
    $mail->AltBody = $options['text'];

    if (!$mail->send()) {
        throw new RuntimeException('SMTP send failed: ' . $mail->ErrorInfo);
    }
}

/**
 * @param array<string, mixed> $config
 */
function test_smtp_connection(array $config): array
{
    $mail = new PHPMailer(true);
    $host = (string) ($config['smtp_host'] ?? 'smtp.gmail.com');
    $port = (int) ($config['smtp_port'] ?? 587);
    $secure = (string) ($config['smtp_secure'] ?? 'tls');
    $user = (string) ($config['smtp_user'] ?? '');
    $pass = preg_replace('/\s+/', '', (string) ($config['smtp_pass'] ?? ''));

    $mail->isSMTP();
    $mail->Host = $host;
    $mail->SMTPAuth = true;
    $mail->Username = $user;
    $mail->Password = $pass;
    $mail->Port = $port;
    $mail->Timeout = 20;

    if ($secure === 'ssl' || $port === 465) {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } else {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }

    $mail->SMTPOptions = [
        'ssl' => [
            'verify_peer' => true,
            'verify_peer_name' => true,
            'allow_self_signed' => false,
        ],
    ];

    if (!$mail->smtpConnect()) {
        return ['ok' => false, 'error' => $mail->ErrorInfo];
    }

    $mail->smtpClose();

    return ['ok' => true];
}
