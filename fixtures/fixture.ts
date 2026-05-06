import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { InventoryDetailPage } from '../pages/DetailInventoryPage';

type TestFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  detailPage: InventoryDetailPage;

  inventoryState: {
    itemName?: string;
    itemPrice?: string;
    items?: { name: string; price: string }[];
  };
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  detailPage: async ({ page }, use) => {
    await use(new InventoryDetailPage(page));
  },

  inventoryState: async ({}, use) => {
    await use({});
  },
});