import { Command } from 'commander';
import inquirer from 'inquirer';

import config from '../../base/config.base.js';
import { CliConfig } from '../../constants/index.js';

import type { SignaleOptions } from 'signale';
import _signale from 'signale';

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

export const showKeyCommand = new Command('show-key')
  .description('🔑 Display your stored API key')
  .action(async () => {
    const apiKey = config.get(CliConfig.AuthStorageCommandName);
    if (!apiKey) {
      signale.warn('No API key found! ⚠️ Please run `icofy auth` first.');
      return;
    }
    const { confirm } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirm',
        message: '⚠️ Your API key is private. Do you want to display it?',
        default: false,
      },
    ]);

    if (confirm) {
      signale.success(`🔑 Your API key: ${apiKey}`);
    } else {
      signale.info('🍃 Not showing the API key.');
    }
  });
