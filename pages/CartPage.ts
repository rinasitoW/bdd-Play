import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(private page: Page) {
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
    this.continueShoppingButton = page.locator('#continue-shopping');
  }

  private getItemByName(name: string): Locator {
    return this.cartItems.filter({ hasText: name });
  }

  private getItemName(item: Locator): Locator {
    return item.locator('.inventory_item_name');
  }

  private getItemPrice(item: Locator): Locator {
    return item.locator('.inventory_item_price');
  }

  private getRemoveButton(item: Locator): Locator {
    return item.locator('button.cart_button');
  }

  async verifyAddedProduct(name: string, price: string) {
    const item = this.getItemByName(name);

    await expect(item).toBeVisible();
    await expect(this.getItemName(item)).toHaveText(name);
    await expect(this.getItemPrice(item)).toHaveText(price);
  }

  async removeProduct(name: string) {
    const item = this.getItemByName(name);

    await this.getRemoveButton(item).click();
    await expect(item).toBeHidden();
  }

  async verifyCartIsEmpty() {
    await expect(this.cartItems).toHaveCount(0);
  }

  async clickCheckout() {
    await this.checkoutButton.click();
    await expect(this.page).toHaveURL(/checkout-step-one/);
  }

  async clickContinueShopping() {
    await this.continueShoppingButton.click();
    await expect(this.page).toHaveURL(/inventory/);
  }
}