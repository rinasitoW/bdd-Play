// Generated from: feature\inventory-edge-cases.feature
import { test } from "../../fixtures/fixture";

test.describe('Inventory Edge Cases and Negative Scenarios', () => {

  test.beforeEach('Background', async ({ Given, loginPage, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on home page', null, { page }); 
    await Given('I Login as "valid"', null, { loginPage }); 
  });
  
  test('Verify all products are visible on page', async ({ Given, Then, inventoryPage }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await Then('I verify products count is greater than 0', null, { inventoryPage }); 
  });

  test('Add same item to cart twice', async ({ Given, When, Then, And, inventoryPage }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I add item at index 0 to cart', null, { inventoryPage }); 
    await And('I add item at index 0 to cart', null, { inventoryPage }); 
    await Then('I verify 1 items are in cart', null, { inventoryPage }); 
  });

  test('Maximum items in cart functionality', async ({ Given, When, Then, inventoryPage }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I add all available products to cart', null, { inventoryPage }); 
    await Then('I verify all products are in cart', null, { inventoryPage }); 
  });

  test('Product price validation', async ({ Given, When, Then, And, detailPage, inventoryPage, inventoryState }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I click on a random item', null, { detailPage, inventoryPage, inventoryState }); 
    await Then('I verify the price is displayed correctly', null, { detailPage }); 
    await And('I verify the price is a valid number', null, { detailPage }); 
  });

  test('Empty inventory after logout and login', async ({ Given, When, Then, And, inventoryPage, loginPage, page }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I add item at index 0 to cart', null, { inventoryPage }); 
    await And('I logout and login again', null, { loginPage, page }); 
    await Then('I verify cart is empty', null, { inventoryPage }); 
  });

  test('Verify product descriptions are not empty', async ({ Given, When, Then, And, detailPage, inventoryPage, inventoryState }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I click on a random item', null, { detailPage, inventoryPage, inventoryState }); 
    await Then('I verify product description is not empty', null, { detailPage }); 
    await And('I verify product description contains valid text', null, { detailPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('feature\\inventory-edge-cases.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I verify products count is greater than 0","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I add item at index 0 to cart","stepMatchArguments":[{"group":{"start":20,"value":"0","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I add item at index 0 to cart","stepMatchArguments":[{"group":{"start":20,"value":"0","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I verify 1 items are in cart","stepMatchArguments":[{"group":{"start":9,"value":"1","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":23,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I add all available products to cart","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I verify all products are in cart","stepMatchArguments":[]}]},
  {"pwTestLine":29,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I click on a random item","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I verify the price is displayed correctly","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"And I verify the price is a valid number","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When I add item at index 0 to cart","stepMatchArguments":[{"group":{"start":20,"value":"0","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":39,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And I logout and login again","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then I verify cart is empty","stepMatchArguments":[]}]},
  {"pwTestLine":43,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":45,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When I click on a random item","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then I verify product description is not empty","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"And I verify product description contains valid text","stepMatchArguments":[]}]},
]; // bdd-data-end