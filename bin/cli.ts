#!/usr/bin/env node

import { Command } from 'commander';
import { authCommand, showKeyCommand, generateCommand } from '../src/commands/index.js';
const program = new Command();

program
  .name('icofy')
  .description('✨ Generate beautiful React Native app icons easily')
  .version('1.0.0');

program.addCommand(authCommand);
program.addCommand(showKeyCommand);
program.addCommand(generateCommand);
program.showHelpAfterError('(use --help for available commands)');

program.parse(process.argv);
