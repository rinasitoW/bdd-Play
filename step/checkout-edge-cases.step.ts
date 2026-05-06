import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

When('I refresh the page', async ({ page }) => {
  await page.reload();
});

Then('I verify cart item persists', async ({ inventoryPage }) => {
  await inventoryPage.verifyItemInCart(1);
});

When('I fill checkout with only first name {string}', async ({ checkoutPage }, firstName) => {
  await checkoutPage.firstNameField.fill(firstName);
  await checkoutPage.continueButton.click();
});

When('I fill checkout with only last name {string}', async ({ checkoutPage }, lastName) => {
  await checkoutPage.lastNameField.fill(lastName);
  await checkoutPage.continueButton.click();
});

When('I fill checkout with only zip code {string}', async ({ checkoutPage }, zipCode) => {
  await checkoutPage.zipCodeField.fill(zipCode);
  await checkoutPage.continueButton.click();
});

Then('I verify the total calculation is correct', async ({ checkoutPage }) => {
  const itemTotal = await checkoutPage.getItemTotal();
  const tax = await checkoutPage.getTax();
  const total = await checkoutPage.getTotal();
  expect(total).toBeCloseTo(itemTotal + tax, 2);
});

Then('I verify cart badge shows {int}', async ({ inventoryPage }, count: number) => {
  await inventoryPage.verifyItemInCart(count);
});

When('I remove all items from cart', async ({ cartPage }) => {
  const items = await cartPage.cartItems.count();
  for (let i = 0; i < items; i++) {
    const firstItem = cartPage.cartItems.first();
    const name = await firstItem.locator('.inventory_item_name').textContent();
    await cartPage.removeProduct(name!.trim());
  }
});

Then('I verify cart badge is not visible', async ({ inventoryPage }) => {
  const isVisible = await inventoryPage.cartBadge.isVisible({ timeout: 1000 }).catch(() => false);
  expect(isVisible).toBe(false);
});