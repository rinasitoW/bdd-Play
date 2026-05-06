import { expect, Locator, Page } from '@playwright/test';

export class InventoryPage {

    readonly productItems: Locator;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly addToCartButton: Locator;
    readonly cartIcon: Locator;
    readonly firstItem: Locator;
    readonly cartBadge: Locator;

    constructor(private page: Page) {
        this.productItems = page.locator('.inventory_item');
        this.productName = page.locator('.inventory_item_name');
        this.productPrice = page.locator('.inventory_item_price');
        this.addToCartButton = page.locator('button.btn_inventory');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.firstItem = page.locator('.inventory_item').first();
        this.cartBadge = page.locator('.shopping_cart_badge');

    }
    verifySuccessfulLogin(text: string) {
        return expect(this.page.locator('.title')).toHaveText(text);
    }

    async getRandomItemIndex(): Promise<number> {
        const count = await this.productItems.count();
        return Math.floor(Math.random() * count);
    }

    async getProductNameByIndex(index: number): Promise<string> {
        return (await this.productName.nth(index).textContent())!.trim();
    }

    async getProductPriceByIndex(index: number): Promise<string> {
        return (await this.productPrice.nth(index).textContent())!.trim();
    }

    async addItemToCartByIndex(index: number) {
        await this.addToCartButton.nth(index).click();
    }



    async addtocartItemByIndex(index: number) {
        await this.page.locator('.inventory_item').nth(index).locator('button.btn_inventory').click();
        await expect(this.cartBadge).toBeVisible();
    }

    async addFirstItemToCart() {
        const name = await this.firstItem.locator('.inventory_item_name').innerText();
        await this.firstItem.locator('button.btn_inventory').click();
        return name;
    }
    async getItemPriceByIndex(index: number) {
        return this.page.locator('.inventory_item_price').nth(index);
    }

    async openCart() {
        await this.page.click('.shopping_cart_link');
        await expect(this.page).toHaveURL(/cart.html$/);
    }
    async verifyItemInCart(count: number) {
        await expect(this.cartBadge).toBeVisible();
        await expect(this.cartBadge).toHaveText(String(count));
    }

    async sortProducts(option: string) {
        await this.page.locator('.product_sort_container').selectOption({ label: option });
    }

    async getAllProductNames(): Promise<string[]> {
        return await this.productName.allTextContents();
    }

    async getAllProductPrices(): Promise<number[]> {
        const prices = await this.productPrice.allTextContents();
        return prices.map(p => parseFloat(p.replace('$', '')));
    }

    async verifySortByNameAZ() {
        const names = await this.getAllProductNames();
        const sorted = [...names].sort();
        expect(names).toEqual(sorted);
    }

    async verifySortByNameZA() {
        const names = await this.getAllProductNames();
        const sorted = [...names].sort().reverse();
        expect(names).toEqual(sorted);
    }

    async verifySortByPriceLowHigh() {
        const prices = await this.getAllProductPrices();
        const sorted = [...prices].sort((a, b) => a - b);
        expect(prices).toEqual(sorted);
    }

    async verifySortByPriceHighLow() {
        const prices = await this.getAllProductPrices();
        const sorted = [...prices].sort((a, b) => b - a);
        expect(prices).toEqual(sorted);
    }

    async clickOnProduct(index: number) {
        await this.productName.nth(index).click();
    }

    async getProductIndex(productName: string): Promise<number> {
        const names = await this.getAllProductNames();
        return names.findIndex(name => name === productName);
    }
}