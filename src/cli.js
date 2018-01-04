#!/usr/bin/env node

const toRomanNumeral = require('./toRomanNumeral');

function printUsageAndExit() {
  console.log('Usage: trn <number>'); // eslint-disable-line no-console
  process.exit(1);
}

function run() {
  if (process.argv.length !== 3) {
    printUsageAndExit();
    return;
  }

  const input = parseInt(process.argv[2], 10);

  if (Number.isNaN(input)) {
    printUsageAndExit();
    return;
  }

  const output = toRomanNumeral(input);
  console.log(output); // eslint-disable-line no-console

  process.exit(0);
}

run();
