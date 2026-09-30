<?php

declare(strict_types=1);

header('Content-Type: application/json');

$root = __DIR__;
$configPath = $root . '/config.php';
$vendorPath = $root . '/vendor/autoload.php';

$report = [
    'ok' => true,
    'php_version' => PHP_VERSION,
    'config_exists' => is_file($configPath),
    'vendor_exists' => is_file($vendorPath),
    'openssl_loaded' => extension_loaded('openssl'),
    'json_loaded' => extension_loaded('json'),
    'mbstring_loaded' => extension_loaded('mbstring'),
    'files' => [
        'contact.php' => is_file($root . '/contact.php'),
        'careers.php' => is_file($root . '/careers.php'),
        'mail.php' => is_file($root . '/mail.php'),
        'email-templates.php' => is_file($root . '/email-templates.php'),
    ],
];

if (!$report['config_exists'] || !$report['vendor_exists'] || !$report['openssl_loaded']) {
    $report['ok'] = false;
}

if (is_file($configPath) && is_file($vendorPath)) {
    try {
        $config = require $configPath;
        require $vendorPath;
        require $root . '/mail.php';

        $report['smtp_user_set'] = !empty($config['smtp_user']);
        $report['smtp_pass_set'] = !empty($config['smtp_pass']);
        $report['smtp_to'] = !empty($config['smtp_to']);

        if (!empty($_GET['smtp_test']) && $_GET['smtp_test'] === '1') {
            $report['smtp_connection'] = test_smtp_connection($config);
            if (empty($report['smtp_connection']['ok'])) {
                $report['ok'] = false;
            }
        }
    } catch (Throwable $e) {
        $report['ok'] = false;
        $report['bootstrap_error'] = $e->getMessage();
    }
}

http_response_code($report['ok'] ? 200 : 500);
echo json_encode($report, JSON_PRETTY_PRINT);
