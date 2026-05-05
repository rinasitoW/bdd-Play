// Generated from: feature\inventory.feature
import { test } from "../../fixtures/fixture";

test.describe('Product and Cart functionality', () => {

  test.beforeEach('Background', async ({ Given, loginPage, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on home page', null, { page }); 
    await Given('I Login as "valid"', null, { loginPage }); 
  });
  
  test('successfully add random item to cart', async ({ Given, When, Then, cartPage, inventoryPage, inventoryState }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I choose random item and add it to cart', null, { inventoryPage, inventoryState }); 
    await Then('I verify item is in cart', null, { cartPage, inventoryPage, inventoryState }); 
  });

  test('successfully add specific item to cart', async ({ Given, When, Then, cartPage, inventoryPage, inventoryState }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I choose random item and add it to cart', null, { inventoryPage, inventoryState }); 
    await Then('I open cart and verify the added item', null, { cartPage, inventoryPage, inventoryState }); 
  });

  test('View item details', async ({ Given, When, Then, cartPage, detailPage, inventoryPage, inventoryState }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I click on a random item', null, { detailPage, inventoryPage, inventoryState }); 
    await Then('I see the item details page', null, { detailPage, inventoryState }); 
    await When('I add the item to cart from details', null, { detailPage }); 
    await Then('I verify item is in cart', null, { cartPage, inventoryPage, inventoryState }); 
    await When('I go back to products', null, { detailPage }); 
    await Then('I see page containing "Products"', null, { inventoryPage }); 
  });

  test('Sort products by name A to Z', async ({ Given, When, Then, inventoryPage }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I sort products by "Name (A to Z)"', null, { inventoryPage }); 
    await Then('products are sorted alphabetically ascending', null, { inventoryPage }); 
  });

  test('Sort products by name Z to A', async ({ Given, When, Then, inventoryPage }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I sort products by "Name (Z to A)"', null, { inventoryPage }); 
    await Then('products are sorted alphabetically descending', null, { inventoryPage }); 
  });

  test('Sort products by price low to high', async ({ Given, When, Then, inventoryPage }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I sort products by "Price (low to high)"', null, { inventoryPage }); 
    await Then('products are sorted by price ascending', null, { inventoryPage }); 
  });

  test('Sort products by price high to low', async ({ Given, When, Then, inventoryPage }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I sort products by "Price (high to low)"', null, { inventoryPage }); 
    await Then('products are sorted by price descending', null, { inventoryPage }); 
  });

  test('Add multiple different items to cart', async ({ Given, When, Then, And, inventoryPage }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I add item at index 0 to cart', null, { inventoryPage }); 
    await And('I add item at index 1 to cart', null, { inventoryPage }); 
    await And('I add item at index 2 to cart', null, { inventoryPage }); 
    await Then('I verify 3 items are in cart', null, { inventoryPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('feature\\inventory.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I choose random item and add it to cart","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I verify item is in cart","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I choose random item and add it to cart","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I open cart and verify the added item","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I click on a random item","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I see the item details page","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When I add the item to cart from details","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then I verify item is in cart","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When I go back to products","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":33,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When I sort products by \"Name (A to Z)\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Name (A to Z)\"","children":[{"start":20,"value":"Name (A to Z)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then products are sorted alphabetically ascending","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When I sort products by \"Name (Z to A)\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Name (Z to A)\"","children":[{"start":20,"value":"Name (Z to A)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then products are sorted alphabetically descending","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":46,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When I sort products by \"Price (low to high)\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Price (low to high)\"","children":[{"start":20,"value":"Price (low to high)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then products are sorted by price ascending","stepMatchArguments":[]}]},
  {"pwTestLine":51,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":52,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When I sort products by \"Price (high to low)\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Price (high to low)\"","children":[{"start":20,"value":"Price (high to low)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":54,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then products are sorted by price descending","stepMatchArguments":[]}]},
  {"pwTestLine":57,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":58,"gherkinStepLine":47,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":59,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When I add item at index 0 to cart","stepMatchArguments":[{"group":{"start":20,"value":"0","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":60,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"And I add item at index 1 to cart","stepMatchArguments":[{"group":{"start":20,"value":"1","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":61,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"And I add item at index 2 to cart","stepMatchArguments":[{"group":{"start":20,"value":"2","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":62,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then I verify 3 items are in cart","stepMatchArguments":[{"group":{"start":9,"value":"3","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end