#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.1')
    .option('-V, --version', 'output the version number')
    .arguments('<filepath1> <filepath2>')
    .action((filepath1, filepath2, { format }) => {
        console.log(genDiff(filepath1, filepath2, format));
      });

program.parse();