import { existsSync, readFileSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const envPath = resolve(root, ".env");
const outPath = resolve(root, "public/api/config.php");

function phpQuote(value) {
  return `'${String(value).replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
}

function parseEnv(content) {
  const env = {};
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    env[key] = val;
  }
  return env;
}

if (!existsSync(envPath)) {
  console.warn(
    "[build] No .env file — skip config.php generation. Copy public/api/config.example.php to config.php on cPanel.",
  );
  process.exit(0);
}

const env = parseEnv(readFileSync(envPath, "utf8"));
const port = Number(env.SMTP_PORT || 587);
const secure =
  env.SMTP_SECURE === "true" || port === 465 ? "ssl" : "tls";

const php = `<?php
// Auto-generated from .env — do not commit
return [
    'smtp_host' => ${phpQuote(env.SMTP_HOST || "smtp.gmail.com")},
    'smtp_port' => ${port},
    'smtp_secure' => ${phpQuote(secure)},
    'smtp_user' => ${phpQuote(env.SMTP_USER || "")},
    'smtp_pass' => ${phpQuote((env.SMTP_PASS || "").replace(/\s+/g, ""))},
    'smtp_from' => ${phpQuote(env.SMTP_FROM || env.SMTP_USER || "")},
    'smtp_to' => ${phpQuote(env.SMTP_TO || "office@vrmca.in")},
    'smtp_to_2' => ${phpQuote(env.SMTP_TO_2 || "")},
    'debug' => ${env.SMTP_DEBUG === "true" ? "true" : "false"},
];
`;

writeFileSync(outPath, php, "utf8");
console.log("[build] Wrote public/api/config.php from .env");
