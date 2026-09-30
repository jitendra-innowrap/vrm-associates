<?php
/**
 * Copy to config.php and fill in your Google App Password.
 * Or run: npm run build (generates config.php from .env automatically)
 */
return [
    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 587,
    'smtp_secure' => 'tls',
    'smtp_user' => 'office@vrmca.in',
    'smtp_pass' => 'your-google-app-password',
    'smtp_from' => 'office@vrmca.in',
    'smtp_to' => 'office@vrmca.in',
    'smtp_to_2' => '',
    // Set true temporarily to see real errors in form responses (disable in production)
    'debug' => false,
];
