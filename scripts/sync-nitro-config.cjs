#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const source = path.resolve(
  __dirname,
  '../nitrogen/generated/shared/json/NitroSfsymbolsConfig.json'
);
const target = path.resolve(
  __dirname,
  '../src/generated/NitroSfsymbolsConfig.json'
);

if (!fs.existsSync(source)) {
  console.error('[nitro] Unable to locate generated config at:', source);
  process.exit(1);
}

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.copyFileSync(source, target);
console.log('[nitro] Synced NitroSfsymbolsConfig.json');
