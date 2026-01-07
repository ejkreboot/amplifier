#!/usr/bin/env node

const fs = require('fs');

const file = process.argv[2];
if (!file) {
  console.error('Usage: node svg-to-json.js <file.svg>');
  process.exit(1);
}

const svg = fs.readFileSync(file, 'utf-8')
  .replace(/\n/g, '')           // remove newlines
  .replace(/\s+/g, ' ')         // collapse whitespace
  .replace(/> </g, '><')        // remove space between tags
  .trim();

const escaped = svg.replace(/"/g, '\\"');

console.log(escaped);