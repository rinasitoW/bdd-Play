import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

When('I proceed to checkout', async ({ cartPage }) => {
  await cartPage.clickCheckout();
});

When('I fill checkout information with {string} {string} {string}', async ({ checkoutPage }, firstName, lastName, zipCode) => {
  await checkoutPage.fillCheckoutInfo(firstName, lastName, zipCode);
});

Then('I verify checkout overview and totals', async ({ checkoutPage }) => {
  await checkoutPage.verifyCheckoutOverview();
  await checkoutPage.verifyTotals();
});

When('I finish the checkout', async ({ checkoutPage }) => {
  await checkoutPage.finishCheckout();
});

Then('I see order completion message', async ({ checkoutPage }) => {
  // Already verified in finishCheckout
});

Then('I return to home page', async ({ checkoutPage }) => {
  await checkoutPage.backToHome();
});

When('I cancel the checkout', async ({ checkoutPage }) => {
  await checkoutPage.cancelCheckout();
});

Then('I am back to inventory page', async ({ inventoryPage }) => {
  await inventoryPage.verifySuccessfulLogin('Products');
});

Then('I am back to cart page', async ({ page }) => {
  await expect(page).toHaveURL(/cart.html$/);
  await expect(page.locator('.title')).toHaveText('Your Cart');
});

When('I try to continue without filling information', async ({ checkoutPage }) => {
  await checkoutPage.continueButton.click();
});

Then('I see error message {string}', async ({ checkoutPage }, message) => {
  await checkoutPage.verifyErrorMessage(message);
});

When('I remove the item from cart', async ({ cartPage, inventoryState }) => {
  await cartPage.removeProduct(inventoryState.itemName!);
});

Then('the cart is empty', async ({ cartPage }) => {
  await cartPage.verifyCartIsEmpty();
});

When('I add first item to cart', async ({ inventoryPage, inventoryState }) => {
  const name = await inventoryPage.addFirstItemToCart();
  inventoryState.itemName = name;
  // Assuming price can be retrieved similarly, but for simplicity
});

When('I add second item to cart', async ({ inventoryPage }) => {
  await inventoryPage.addtocartItemByIndex(1); // Add second item
});

When('I open cart and verify both items', async ({ inventoryPage, cartPage }) => {
  await inventoryPage.openCart();
  // Verify both items are present - assuming cartPage has method or we can add
  await expect(cartPage.cartItems).toHaveCount(2);
});

Then('I verify checkout overview and totals for multiple items', async ({ checkoutPage }) => {
  await checkoutPage.verifyCheckoutOverview();
  await checkoutPage.verifyTotals();
});