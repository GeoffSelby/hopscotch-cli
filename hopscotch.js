#!/usr/bin/env node

'use strict';

const program = require('commander');
let Hopscotch = require('./src/core.js');

program
    .version('0.0.1')
    .description('An opinionated cli for front end tooling.');

program
    .command('init [directory]')
    .description('Initialize a new hopscotch project.')
    .action(directory => {
        Hopscotch.build(directory);
    });

program.parse(process.argv);