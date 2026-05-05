import { expect, Locator, Page } from '@playwright/test';

export class CheckoutPage {
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly zipCodeField: Locator;
  readonly continueButton: Locator;
  readonly cancelButton: Locator;
  readonly finishButton: Locator;
  readonly cartItems: Locator;
  readonly itemTotal: Locator;
  readonly tax: Locator;
  readonly total: Locator;
  readonly completeHeader: Locator;
  readonly backHomeButton: Locator;

  constructor(private page: Page) {
    this.firstNameField = page.locator('#first-name');
    this.lastNameField = page.locator('#last-name');
    this.zipCodeField = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.cancelButton = page.locator('#cancel');
    this.finishButton = page.locator('#finish');
    this.cartItems = page.locator('.cart_item');
    this.itemTotal = page.locator('.summary_subtotal_label');
    this.tax = page.locator('.summary_tax_label');
    this.total = page.locator('.summary_total_label');
    this.completeHeader = page.locator('.complete-header');
    this.backHomeButton = page.locator('#back-to-products');
  }

  async fillCheckoutInfo(firstName: string, lastName: string, zipCode: string) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.zipCodeField.fill(zipCode);
    await this.continueButton.click();
  }

  async verifyCheckoutOverview() {
    await expect(this.page).toHaveURL(/checkout-step-two/);
  }

  async getItemTotal(): Promise<number> {
    const text = await this.itemTotal.textContent();
    return parseFloat(text!.replace('Item total: $', ''));
  }

  async getTax(): Promise<number> {
    const text = await this.tax.textContent();
    return parseFloat(text!.replace('Tax: $', ''));
  }

  async getTotal(): Promise<number> {
    const text = await this.total.textContent();
    return parseFloat(text!.replace('Total: $', ''));
  }

  async verifyTotals() {
    const itemTotal = await this.getItemTotal();
    const tax = await this.getTax();
    const total = await this.getTotal();
    expect(total).toBeCloseTo(itemTotal + tax, 2);
  }

  async finishCheckout() {
    await this.finishButton.click();
    await expect(this.page).toHaveURL(/checkout-complete/);
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }

  async cancelCheckout() {
    await this.cancelButton.click();
    await expect(this.page).toHaveURL(/cart.html$/);
  }

  async backToHome() {
    await this.backHomeButton.click();
    await expect(this.page).toHaveURL(/inventory/);
  }

  async verifyErrorMessage(message: string) {
    await expect(this.page.locator('.error-message-container')).toContainText(message);
  }
}