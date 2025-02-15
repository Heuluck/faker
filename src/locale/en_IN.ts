/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import base from '../locales/base';
import en from '../locales/en';
import en_IN from '../locales/en_IN';

/**
 * The faker instance for the `en_IN` locale.
 *
 * - Language: English (India)
 * - Endonym: English (India)
 *
 * This instance uses the following locales internally (in descending precedence):
 *
 * - `en_IN`
 * - `en`
 * - `base`
 */
export const faker = new Faker({
  locale: [en_IN, en, base],
});
