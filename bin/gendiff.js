#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => console.log(gendiff(filepath1, filepath2)));

program.parse();
