# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: feature\inventory-edge-cases.feature.spec.js >> Inventory Edge Cases and Negative Scenarios >> Add same item to cart twice
- Location: .features-gen\feature\inventory-edge-cases.feature.spec.js:16:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.shopping_cart_badge')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.shopping_cart_badge')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - generic [ref=e14]:
        - generic [ref=e15]: Products
        - generic [ref=e17] [cursor=pointer]:
          - generic [ref=e18]: Name (A to Z)
          - combobox [ref=e19]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e23]:
      - generic [ref=e24]:
        - link "Sauce Labs Backpack" [ref=e26] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]:
            - link "Sauce Labs Backpack" [ref=e30] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e31]: Sauce Labs Backpack
            - generic [ref=e32]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e33]:
            - generic [ref=e34]: $29.99
            - button "Add to cart" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - link "Sauce Labs Bike Light" [ref=e38] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e39]
        - generic [ref=e40]:
          - generic [ref=e41]:
            - link "Sauce Labs Bike Light" [ref=e42] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e43]: Sauce Labs Bike Light
            - generic [ref=e44]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e45]:
            - generic [ref=e46]: $9.99
            - button "Add to cart" [ref=e47] [cursor=pointer]
      - generic [ref=e48]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e50] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e51]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e54] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e55]: Sauce Labs Bolt T-Shirt
            - generic [ref=e56]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e57]:
            - generic [ref=e58]: $15.99
            - button "Add to cart" [ref=e59] [cursor=pointer]
      - generic [ref=e60]:
        - link "Sauce Labs Fleece Jacket" [ref=e62] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e63]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - link "Sauce Labs Fleece Jacket" [ref=e66] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e67]: Sauce Labs Fleece Jacket
            - generic [ref=e68]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e69]:
            - generic [ref=e70]: $49.99
            - button "Add to cart" [ref=e71] [cursor=pointer]
      - generic [ref=e72]:
        - link "Sauce Labs Onesie" [ref=e74] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e75]
        - generic [ref=e76]:
          - generic [ref=e77]:
            - link "Sauce Labs Onesie" [ref=e78] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e79]: Sauce Labs Onesie
            - generic [ref=e80]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e81]:
            - generic [ref=e82]: $7.99
            - button "Add to cart" [ref=e83] [cursor=pointer]
      - generic [ref=e84]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e86] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e87]
        - generic [ref=e88]:
          - generic [ref=e89]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e90] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e91]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e92]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e93]:
            - generic [ref=e94]: $15.99
            - button "Add to cart" [ref=e95] [cursor=pointer]
  - contentinfo [ref=e96]:
    - list [ref=e97]:
      - listitem [ref=e98]:
        - link "Twitter" [ref=e99] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e100]:
        - link "Facebook" [ref=e101] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e102]:
        - link "LinkedIn" [ref=e103] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e104]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1   | import { expect, Locator, Page } from '@playwright/test';
  2   | 
  3   | export class InventoryPage {
  4   | 
  5   |     readonly productItems: Locator;
  6   |     readonly productName: Locator;
  7   |     readonly productPrice: Locator;
  8   |     readonly addToCartButton: Locator;
  9   |     readonly cartIcon: Locator;
  10  |     readonly firstItem: Locator;
  11  |     readonly cartBadge: Locator;
  12  | 
  13  |     constructor(private page: Page) {
  14  |         this.productItems = page.locator('.inventory_item');
  15  |         this.productName = page.locator('.inventory_item_name');
  16  |         this.productPrice = page.locator('.inventory_item_price');
  17  |         this.addToCartButton = page.locator('button.btn_inventory');
  18  |         this.cartIcon = page.locator('.shopping_cart_link');
  19  |         this.firstItem = page.locator('.inventory_item').first();
  20  |         this.cartBadge = page.locator('.shopping_cart_badge');
  21  | 
  22  |     }
  23  |     verifySuccessfulLogin(text: string) {
  24  |         return expect(this.page.locator('.title')).toHaveText(text);
  25  |     }
  26  | 
  27  |     async getRandomItemIndex(): Promise<number> {
  28  |         const count = await this.productItems.count();
  29  |         return Math.floor(Math.random() * count);
  30  |     }
  31  | 
  32  |     async getProductNameByIndex(index: number): Promise<string> {
  33  |         return (await this.productName.nth(index).textContent())!.trim();
  34  |     }
  35  | 
  36  |     async getProductPriceByIndex(index: number): Promise<string> {
  37  |         return (await this.productPrice.nth(index).textContent())!.trim();
  38  |     }
  39  | 
  40  |     async addItemToCartByIndex(index: number) {
  41  |         await this.addToCartButton.nth(index).click();
  42  |     }
  43  | 
  44  | 
  45  | 
  46  |     async addtocartItemByIndex(index: number) {
  47  |         await this.page.locator('.inventory_item').nth(index).locator('button.btn_inventory').click();
  48  |     }
  49  | 
  50  |     async addFirstItemToCart() {
  51  |         const name = await this.firstItem.locator('.inventory_item_name').innerText();
  52  |         await this.firstItem.locator('button.btn_inventory').click();
  53  |         return name;
  54  |     }
  55  |     async getItemPriceByIndex(index: number) {
  56  |         return this.page.locator('.inventory_item_price').nth(index);
  57  |     }
  58  | 
  59  |     async openCart() {
  60  |         await this.page.click('.shopping_cart_link');
  61  |         await expect(this.page).toHaveURL(/cart.html$/);
  62  |     }
  63  |     async verifyItemInCart(count: number) {
> 64  |         await expect(this.cartBadge).toBeVisible();
      |                                      ^ Error: expect(locator).toBeVisible() failed
  65  |         await expect(this.cartBadge).toHaveText(String(count));
  66  |     }
  67  | 
  68  |     async sortProducts(option: string) {
  69  |         await this.page.locator('.product_sort_container').selectOption({ label: option });
  70  |     }
  71  | 
  72  |     async getAllProductNames(): Promise<string[]> {
  73  |         return await this.productName.allTextContents();
  74  |     }
  75  | 
  76  |     async getAllProductPrices(): Promise<number[]> {
  77  |         const prices = await this.productPrice.allTextContents();
  78  |         return prices.map(p => parseFloat(p.replace('$', '')));
  79  |     }
  80  | 
  81  |     async verifySortByNameAZ() {
  82  |         const names = await this.getAllProductNames();
  83  |         const sorted = [...names].sort();
  84  |         expect(names).toEqual(sorted);
  85  |     }
  86  | 
  87  |     async verifySortByNameZA() {
  88  |         const names = await this.getAllProductNames();
  89  |         const sorted = [...names].sort().reverse();
  90  |         expect(names).toEqual(sorted);
  91  |     }
  92  | 
  93  |     async verifySortByPriceLowHigh() {
  94  |         const prices = await this.getAllProductPrices();
  95  |         const sorted = [...prices].sort((a, b) => a - b);
  96  |         expect(prices).toEqual(sorted);
  97  |     }
  98  | 
  99  |     async verifySortByPriceHighLow() {
  100 |         const prices = await this.getAllProductPrices();
  101 |         const sorted = [...prices].sort((a, b) => b - a);
  102 |         expect(prices).toEqual(sorted);
  103 |     }
  104 | 
  105 |     async clickOnProduct(index: number) {
  106 |         await this.productName.nth(index).click();
  107 |     }
  108 | 
  109 |     async getProductIndex(productName: string): Promise<number> {
  110 |         const names = await this.getAllProductNames();
  111 |         return names.findIndex(name => name === productName);
  112 |     }
  113 | }
```