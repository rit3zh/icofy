import Conf from 'conf';
import type { IConfig } from '../typings/Config.js';
import { CliConfig } from '../constants/index.js';

export class Config {
  private config: Conf<IConfig>;

  constructor() {
    this.config = new Conf<IConfig>({
      projectName: CliConfig.Name,
      defaults: {
        apiKey: '',
      },
    });
  }

  get(key: keyof IConfig): string | undefined {
    return this.config.get(key);
  }

  set(key: keyof IConfig, value: string): void {
    this.config.set(key, value);
  }
}
