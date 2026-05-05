import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';

const { Given, When, Then, And } = createBdd(test);

Given('I see page containing {string}', async ({ inventoryPage }, text) => {
    await inventoryPage.verifySuccessfulLogin(text);
});

When('I choose random item and add it to cart', async ({ inventoryPage, inventoryState }) => {
  const index = await inventoryPage.getRandomItemIndex();

  const name = await inventoryPage.getProductNameByIndex(index);
  const price = await inventoryPage.getProductPriceByIndex(index);

  inventoryState.itemName = name;
  inventoryState.itemPrice = price;

  await inventoryPage.addItemToCartByIndex(index);
});

When('I open cart and verify the added item', async ({ inventoryPage, cartPage, inventoryState }) => {
  await inventoryPage.openCart();

  await cartPage.verifyAddedProduct(
    inventoryState.itemName!,
    inventoryState.itemPrice!
  );
});

Then('I verify item is in cart', async ({ inventoryPage,cartPage ,inventoryState}) => {

    await inventoryPage.verifyItemInCart(1);
});

When('I click on a random item', async ({ inventoryPage, detailPage, inventoryState }) => {
  const index = await inventoryPage.getRandomItemIndex();
  const name = await inventoryPage.getProductNameByIndex(index);
  const price = await inventoryPage.getProductPriceByIndex(index);
  inventoryState.itemName = name;
  inventoryState.itemPrice = price;
  await inventoryPage.productName.nth(index).click();
  await detailPage.expectVisible();
});

Then('I see the item details page', async ({ detailPage, inventoryState }) => {
  const title = await detailPage.getInventoryTitle();
  const price = await detailPage.getInventoryPrice();
  expect(title).toBe(inventoryState.itemName);
  expect(price).toBe(inventoryState.itemPrice);
});

When('I add the item to cart from details', async ({ detailPage }) => {
  await detailPage.clickAddToCart();
});

When('I go back to products', async ({ detailPage }) => {
  await detailPage.clickBackToProducts();
});

When('I sort products by {string}', async ({ inventoryPage }, sortOption) => {
  await inventoryPage.sortProducts(sortOption);
});

Then('products are sorted alphabetically ascending', async ({ inventoryPage }) => {
  await inventoryPage.verifySortByNameAZ();
});

Then('products are sorted alphabetically descending', async ({ inventoryPage }) => {
  await inventoryPage.verifySortByNameZA();
});

Then('products are sorted by price ascending', async ({ inventoryPage }) => {
  await inventoryPage.verifySortByPriceLowHigh();
});

Then('products are sorted by price descending', async ({ inventoryPage }) => {
  await inventoryPage.verifySortByPriceHighLow();
});

When('I add item at index {int} to cart', async ({ inventoryPage }, index: number) => {
  await inventoryPage.addtocartItemByIndex(index);
});

Then('I verify {int} items are in cart', async ({ inventoryPage }, count) => {
  await inventoryPage.verifyItemInCart(count);
});

