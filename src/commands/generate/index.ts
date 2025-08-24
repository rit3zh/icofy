import { Command } from 'commander';

import inquirer from 'inquirer';
import fs from 'fs';
import ora from 'ora';
import config from '../../base/config.base.js';

import { CliConfig, INITIAL_PROMPT } from '../../constants/index.js';
import { createLogoPrompt } from '../../utils/createPrompt.js';
import { generateImage } from '../../core/fetch.js';
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

export const generateCommand = new Command('generate')
  .description('🎨 Generate a stunning mobile app icon using AI')
  .action(async () => {
    const apiKey = config.get(CliConfig.AuthStorageCommandName);
    if (!apiKey) {
      signale.warn('No API key found! 🔐 Please run `icofy auth` first.');
      return;
    }

    // Ask user for logo description
    const { description } = await inquirer.prompt([
      {
        type: 'input',
        name: 'description',
        message: '📝 Describe your app logo concept:',
        validate: (input) => input.length > 0 || 'Please enter a description.',
      },
    ]);

    const userPrompt = createLogoPrompt(description);
    const finalPrompt = `${INITIAL_PROMPT}\nUser request: ${userPrompt}`;
    const spinner = ora('🖌️ Generating your logo, please wait...').start();
    try {
      const form = new FormData();
      form.append('prompt', finalPrompt);
      const response = await generateImage({
        apiKey,
        formData: form,
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const buffer = Buffer.from(await response.arrayBuffer());
      const fileName = 'icofy-logo.png';
      fs.writeFileSync(fileName, buffer);

      spinner.succeed(`🎉 Logo generated successfully! Saved as ${fileName}`);
      signale.star('✨ Tip: Open the file to preview your new app icon!');
    } catch (err) {
      spinner.fail('❌ Failed to generate logo.');
      signale.error(`Error: ${(err as Error).message}`);
    }
  });
