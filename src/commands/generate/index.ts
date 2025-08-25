import { Command } from 'commander';
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import ora from 'ora';
import config from '../../base/config.base.js';
import { CliConfig, INITIAL_PROMPT } from '../../constants/index.js';
import { createLogoPrompt } from '../../utils/createPrompt.js';
import { generateImage } from '../../core/fetch.js';
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
  .action(async (option) => {
    const apiKey = config.get(CliConfig.AuthStorageCommandName);
    if (!apiKey) {
      signale.warn('No API key found! 🔐 Please run `icofy auth` first.');
      return;
    }

    const { description } = await inquirer.prompt([
      {
        type: 'input',
        name: 'description',
        message: '📝 Describe your app logo concept:',
        validate: (input) => input.length > 0 || 'Please enter a description.',
      },
    ]);

    const userPrompt = createLogoPrompt<string>(description as string);
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
      spinner.succeed('🎉 Logo generated successfully!');

      // Ask user for custom file name
      const { fileNameInput } = await inquirer.prompt([
        {
          type: 'input',
          name: 'fileNameInput',
          message: '📂 What should we name your logo file (without extension)?',
          default: 'icofy-logo',
          validate: (input) => input.trim().length > 0 || 'File name cannot be empty.',
        },
      ]);

      // Create 'icofy' folder if it doesn't exist
      const outputDir = path.resolve(process.cwd(), 'icofy');
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      const finalFilePath = path.join(outputDir, `${fileNameInput}.png`);
      fs.writeFileSync(finalFilePath, buffer);

      signale.success(`✅ Saved as ${finalFilePath}`);
      signale.star('✨ Tip: Open the file to preview your new app icon!');
    } catch (err) {
      spinner.fail('❌ Failed to generate logo.');
      signale.error(`Error: ${(err as Error).message}`);
    }
  });
