#!/usr/bin/env node

const program = require('commander');
const Hopscotch = require('./src/core.js');

program
  .version('0.0.1')
  .description('An opinionated approach to module JavaScript.');

program
  .command('init [directory]')
  .description('Initialize a new hopscotch project.')
  .action((directory) => {
    Hopscotch.init(directory);
  });

program.parse(process.argv);