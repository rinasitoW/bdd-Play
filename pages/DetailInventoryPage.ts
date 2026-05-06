import { expect, Locator, Page } from '@playwright/test';


export class InventoryDetailPage {
  readonly inventoryTitle: Locator;
  readonly inventoryPrice: Locator;
  readonly page: Page;
    
  constructor(page: Page) {
    this.page = page;
    this.inventoryTitle = page.locator('.inventory_details_name');
    this.inventoryPrice = page.locator('.inventory_details_price');
  }

  async expectVisible() {
    await expect(this.inventoryTitle).toBeVisible();
  }

  async getInventoryTitle() {
    return (await this.inventoryTitle.innerText()).trim();
  }

  async getInventoryPrice() {
    return (await this.inventoryPrice.innerText()).trim();
  }

  async clickAddToCart() {
    await this.page.locator('button.btn_inventory').click();
  }

  async clickBackToProducts() {
    await this.page.locator('.inventory_details_back_button').click();
    await expect(this.page).toHaveURL(/inventory/);
  }

  async openCart() {
    await this.page.locator('.shopping_cart_link').click();
    await expect(this.page).toHaveURL(/cart/);
  }
}