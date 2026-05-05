import { createBdd } from 'playwright-bdd';
import { getCredential } from '../fixtures/creden';
import { test } from '../fixtures/fixture';

const { Given, When, Then, And } = createBdd(test);

Given('I am on home page', async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');
});

Given(
  'I Login as {string}',
  async ({ loginPage }, role: 'valid' | 'locked' | 'problem') => {
    const cred = getCredential(role);

    await loginPage.fillFieldsUsername(cred.username);
    await loginPage.fillFieldsPassword(cred.password);
    await loginPage.clickButtonLogin('Login');
  }
);



When('I click button {string} without fill any fields', async ({ loginPage }, btnName) => {
  await loginPage.clickButtonLogin(btnName);
});

Then('I see in text containing {string}', async ({ loginPage }, text) => {
  await loginPage.checkErrorMessage(text);
});

When(
  'I click button {string} with fill valid username {string} and password {string}',
  async ({ loginPage }, btnName, username, password) => {

    await loginPage.fillFieldsUsername(username);
    await loginPage.fillFieldsPassword(password);
    await loginPage.clickButtonLogin(btnName);
  }
);

When(
  'I click button {string} with fill invalid username {string} and password {string}',
  async ({ loginPage }, btnName, username, password) => {
    await loginPage.fillFieldsUsername(username);
    await loginPage.fillFieldsPassword(password);
    await loginPage.clickButtonLogin(btnName);
  }
);

Then('I see text containing {string}', async ({ inventoryPage }, text) => {
  await inventoryPage.verifySuccessfulLogin(text);
});
