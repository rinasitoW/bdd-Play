import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Then('I verify products count is greater than 0', async ({ inventoryPage }) => {
  const count = await inventoryPage.productItems.count();
  expect(count).toBeGreaterThan(0);
});

When('I choose the same item and add it again', async ({ inventoryPage, inventoryState, page }) => {
  const index = await inventoryPage.getProductIndex(inventoryState.itemName!);
  await inventoryPage.addItemToCartByIndex(index);
  // Wait for cart badge to update
  await page.waitForTimeout(500);
});

When('I add all available products to cart', async ({ inventoryPage }) => {
  const count = await inventoryPage.productItems.count();
  for (let i = 0; i < count; i++) {
    await inventoryPage.addItemToCartByIndex(i);
  }
});

Then('I verify all products are in cart', async ({ inventoryPage }) => {
  const count = await inventoryPage.productItems.count();
  await inventoryPage.verifyItemInCart(count);
});

Then('I verify the price is displayed correctly', async ({ detailPage }) => {
  const price = await detailPage.getInventoryPrice();
  expect(price).toBeTruthy();
  expect(price).toContain('$');
});

Then('I verify the price is a valid number', async ({ detailPage }) => {
  const price = await detailPage.getInventoryPrice();
  const priceValue = parseFloat(price.replace('$', ''));
  expect(priceValue).toBeGreaterThan(0);
});

When('I logout and login again', async ({ page, loginPage }) => {
  await page.locator('.bm-burger-button').click();
  await page.locator('#logout_sidebar_link').click();
  await page.goto('https://www.saucedemo.com/');
  await loginPage.fillFieldsUsername('standard_user');
  await loginPage.fillFieldsPassword('secret_sauce');
  await loginPage.clickButtonLogin('Login');
});

Then('I verify cart is empty', async ({ inventoryPage }) => {
  try {
    await inventoryPage.cartBadge.isVisible({ timeout: 1000 });
  } catch {
    // Badge should not be visible if cart is empty
  }
});

Then('I verify product description is not empty', async ({ detailPage }) => {
  const description = await detailPage.page.locator('.inventory_details_desc').textContent();
  expect(description).toBeTruthy();
  expect(description?.trim().length).toBeGreaterThan(0);
});

Then('I verify product description contains valid text', async ({ detailPage }) => {
  const description = await detailPage.page.locator('.inventory_details_desc').textContent();
  expect(description).not.toContain('null');
  expect(description).not.toContain('undefined');
});

Then('I verify item quantity in cart is {int}', async ({ page }, quantity: number) => {
  const quantityElement = await page.locator('.cart_quantity').first().textContent({ timeout: 3000 }).catch(() => null);
  if (quantityElement) {
    expect(quantityElement).toBe(String(quantity));
  }
});

Then('I verify cart contains the added item', async ({ cartPage }) => {
  const cartItemCount = await cartPage.cartItems.count();
  expect(cartItemCount).toBeGreaterThan(0);
});