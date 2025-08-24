import { Config } from '../core/config.js';

describe('Config class', () => {
  let config: Config;

  beforeEach(() => {
    config = new Config();
  });

  it('should set and get apiKey', () => {
    config.set('apiKey', '12345');
    const key = config.get('apiKey');
    expect(key).toBe('12345');
  });

  it('should return undefined if key not set', () => {
    expect(config.get('apiKey')).toBe(String());
  });
});
