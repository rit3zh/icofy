import { Command } from 'commander';

import type { SignaleOptions } from 'signale';
import _signale from 'signale';

import { CliConfig } from '../../constants/index.js';

import inquirer from 'inquirer';
import figlet from 'figlet';
import gradient from 'gradient-string';
import ora from 'ora';

import config from '../../base/config.base.js';

const Signale = _signale.Signale;

const signale = new Signale({
  scope: 'Icofy',
  types: {
    success: { badge: '✅', color: 'green', label: 'success' },
    info: { badge: 'ℹ️', color: 'cyan', label: 'info' },
    warn: { badge: '⚠️', color: 'yellow', label: 'warning' },
    star: { badge: '✨', color: 'magenta', label: 'tip' },
  },
});

export const authCommand = new Command('configure')
  .description('🔐 Set your API key for Icofy')
  .action(async () => {
    // Display fancy banner
    console.log(gradient.pastel(figlet.textSync('Icofy', { horizontalLayout: 'full' })));
    signale.star('Welcome to Icofy Authentication 🔑');

    const existingKey = config.get(CliConfig.AuthStorageCommandName);
    if (existingKey) {
      signale.warn('API key already exists! 🔍');
      const { overwrite } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'overwrite',
          message: 'Do you want to overwrite it?',
          default: false,
        },
      ]);
      if (!overwrite) {
        signale.info('Keeping existing API key. 👍');
        return;
      }
    }

    const answers = await inquirer.prompt([
      {
        type: 'password',
        name: 'apiKey',
        message: '👉 Enter your API key:',
        mask: '⭐',
      },
    ]);

    const spinner = ora('Saving your API key... 🔐').start();
    try {
      config.set(CliConfig.AuthStorageCommandName, answers.apiKey);
      spinner.succeed('API key saved successfully! 🎉');
      signale.success('You are all set! 🚀');
      signale.star('Run `icofy generate` to create your icons ✨');
    } catch (error) {
      spinner.fail('Failed to save API key ❌');
      signale.warn('Please try again.');
    }
  });
