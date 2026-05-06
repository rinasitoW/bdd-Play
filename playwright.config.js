import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
const testDir = defineBddConfig({
  features: 'feature/**/*.feature',
  steps: 'step/**/*.ts',
  importTestFrom: './fixtures/fixture',
});
export default defineConfig({
  testDir,
  reporter: 'html',
  use: {
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
});