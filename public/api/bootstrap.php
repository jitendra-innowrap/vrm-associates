<?php

declare(strict_types=1);

$configPath = __DIR__ . '/config.php';

if (!is_file($configPath)) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode([
        'error' => 'Mail is not configured. Copy config.example.php to config.php on the server.',
    ]);
    exit;
}

$config = require $configPath;

$autoload = __DIR__ . '/vendor/autoload.php';
if (!is_file($autoload)) {
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode([
        'error' => 'PHPMailer missing. Upload the api/vendor/ folder from your build.',
    ]);
    exit;
}

require $autoload;

require __DIR__ . '/email-templates.php';
require __DIR__ . '/mail.php';

function json_response(int $code, array $payload): void
{
    http_response_code($code);
    header('Content-Type: application/json');
    echo json_encode($payload);
    exit;
}

/**
 * @param array<string, mixed>|null $config
 */
function api_error_response(Throwable $e, ?array $config = null): void
{
    error_log('API error: ' . $e->getMessage() . ' in ' . $e->getFile() . ':' . $e->getLine());

    $message = 'Failed to send message. Please try again later.';
    if (!empty($config['debug'])) {
        $message = $e->getMessage();
    }

    json_response(500, ['error' => $message]);
}

function read_json_body(): array
{
    $raw = file_get_contents('php://input');
    if ($raw === false || $raw === '') {
        return [];
    }

    $data = json_decode($raw, true);
    if (!is_array($data)) {
        json_response(400, ['error' => 'Invalid JSON body']);
    }

    return $data;
}

function require_fields(array $data, array $fields): void
{
    foreach ($fields as $field) {
        if (!isset($data[$field]) || !is_string($data[$field]) || trim($data[$field]) === '') {
            json_response(400, ['error' => "Missing required field: {$field}"]);
        }
    }
}

function sanitize_string(string $value, int $max = 5000): string
{
    $value = trim($value);
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $max);
    }

    return substr($value, 0, $max);
}
