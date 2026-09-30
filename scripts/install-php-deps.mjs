import {
  cpSync,
  createWriteStream,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";
import { pipeline } from "stream/promises";
import { Readable } from "stream";

const apiDir = resolve(dirname(fileURLToPath(import.meta.url)), "..", "public/api");
const vendorAutoload = resolve(apiDir, "vendor/autoload.php");

const PHPMailer_VERSION = "v6.9.3";
const PHPMailer_ZIP = `https://github.com/PHPMailer/PHPMailer/archive/refs/tags/${PHPMailer_VERSION}.zip`;

function writeAutoload() {
  writeFileSync(
    vendorAutoload,
    `<?php
require_once __DIR__ . '/phpmailer/phpmailer/src/Exception.php';
require_once __DIR__ . '/phpmailer/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/phpmailer/phpmailer/src/SMTP.php';
`,
    "utf8",
  );
}

async function downloadZip(dest) {
  const res = await fetch(PHPMailer_ZIP);
  if (!res.ok) throw new Error(`PHPMailer download failed: ${res.status}`);
  const body = res.body;
  if (!body) throw new Error("Empty PHPMailer download");
  await pipeline(Readable.fromWeb(body), createWriteStream(dest));
}

function extractZip(zipPath, extractDir) {
  mkdirSync(extractDir, { recursive: true });
  if (process.platform === "win32") {
    const ps = spawnSync(
      "powershell",
      [
        "-NoProfile",
        "-Command",
        `Expand-Archive -LiteralPath '${zipPath.replace(/'/g, "''")}' -DestinationPath '${extractDir.replace(/'/g, "''")}' -Force`,
      ],
      { stdio: "inherit" },
    );
    if (ps.status !== 0) throw new Error("Expand-Archive failed");
    return;
  }
  const unzip = spawnSync("unzip", ["-o", zipPath, "-d", extractDir], { stdio: "inherit" });
  if (unzip.status !== 0) throw new Error("unzip failed — install unzip or use Composer");
}

async function bundlePhpmailer() {
  console.log("[build] Bundling PHPMailer for cPanel…");
  const tmpZip = resolve(apiDir, "_phpmailer.zip");
  const tmpExtract = resolve(apiDir, "_phpmailer_extract");
  const vendorDir = resolve(apiDir, "vendor/phpmailer/phpmailer");

  mkdirSync(resolve(apiDir, "vendor/phpmailer"), { recursive: true });
  if (existsSync(tmpExtract)) rmSync(tmpExtract, { recursive: true, force: true });
  if (existsSync(vendorDir)) rmSync(vendorDir, { recursive: true, force: true });

  await downloadZip(tmpZip);
  extractZip(tmpZip, tmpExtract);

  const extracted = readdirSync(tmpExtract).find((n) => n.startsWith("PHPMailer-"));
  if (!extracted) throw new Error("PHPMailer folder not found after extract");

  cpSync(resolve(tmpExtract, extracted), vendorDir, { recursive: true });
  rmSync(tmpZip, { force: true });
  rmSync(tmpExtract, { recursive: true, force: true });
  writeAutoload();
  console.log("[build] PHPMailer ready in public/api/vendor/");
}

if (existsSync(vendorAutoload)) {
  console.log("[build] PHPMailer vendor already present");
  process.exit(0);
}

const composer = spawnSync("composer", ["install", "--no-dev", "--optimize-autoloader"], {
  cwd: apiDir,
  stdio: "pipe",
  shell: true,
});

if (composer.status === 0 && existsSync(vendorAutoload)) {
  console.log("[build] PHPMailer installed via Composer");
  process.exit(0);
}

try {
  await bundlePhpmailer();
} catch (err) {
  console.error("[build]", err.message);
  process.exit(1);
}
