// Generated from: feature\cart.feature
import { test } from "../../fixtures/fixture";

test.describe('Cart and Checkout functionality', () => {

  test.beforeEach('Background', async ({ Given, loginPage, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on home page', null, { page }); 
    await Given('I Login as "valid"', null, { loginPage }); 
  });
  
  test('Successfully checkout with valid information', async ({ Given, When, Then, And, cartPage, checkoutPage, inventoryPage, inventoryState }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I choose random item and add it to cart', null, { inventoryPage, inventoryState }); 
    await And('I open cart and verify the added item', null, { cartPage, inventoryPage, inventoryState }); 
    await And('I proceed to checkout', null, { cartPage }); 
    await And('I fill checkout information with "John" "Doe" "12345"', null, { checkoutPage }); 
    await Then('I verify checkout overview and totals', null, { checkoutPage }); 
    await When('I finish the checkout', null, { checkoutPage }); 
    await Then('I see order completion message', null, { checkoutPage }); 
    await And('I return to home page', null, { checkoutPage }); 
  });

  test('Cancel checkout from information step', async ({ Given, When, Then, And, cartPage, checkoutPage, inventoryPage, inventoryState, page }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I choose random item and add it to cart', null, { inventoryPage, inventoryState }); 
    await And('I open cart and verify the added item', null, { cartPage, inventoryPage, inventoryState }); 
    await And('I proceed to checkout', null, { cartPage }); 
    await When('I cancel the checkout', null, { checkoutPage }); 
    await Then('I am back to cart page', null, { page }); 
  });

  test('Checkout with missing information', async ({ Given, When, Then, And, cartPage, checkoutPage, inventoryPage, inventoryState }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I choose random item and add it to cart', null, { inventoryPage, inventoryState }); 
    await And('I open cart and verify the added item', null, { cartPage, inventoryPage, inventoryState }); 
    await And('I proceed to checkout', null, { cartPage }); 
    await When('I try to continue without filling information', null, { checkoutPage }); 
    await Then('I see error message "Error: First Name is required"', null, { checkoutPage }); 
  });

  test('Remove item from cart', async ({ Given, When, Then, And, cartPage, inventoryPage, inventoryState }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I choose random item and add it to cart', null, { inventoryPage, inventoryState }); 
    await And('I open cart and verify the added item', null, { cartPage, inventoryPage, inventoryState }); 
    await When('I remove the item from cart', null, { cartPage, inventoryState }); 
    await Then('the cart is empty', null, { cartPage }); 
  });

  test('Add multiple items to cart', async ({ Given, When, Then, And, cartPage, checkoutPage, inventoryPage, inventoryState }) => { 
    await Given('I see page containing "Products"', null, { inventoryPage }); 
    await When('I add first item to cart', null, { inventoryPage, inventoryState }); 
    await And('I add second item to cart', null, { inventoryPage }); 
    await Then('I verify 2 items are in cart', null, { inventoryPage }); 
    await When('I open cart and verify both items', null, { cartPage, inventoryPage }); 
    await And('I proceed to checkout', null, { cartPage }); 
    await And('I fill checkout information with "Jane" "Smith" "67890"', null, { checkoutPage }); 
    await Then('I verify checkout overview and totals for multiple items', null, { checkoutPage }); 
    await When('I finish the checkout', null, { checkoutPage }); 
    await Then('I see order completion message', null, { checkoutPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('feature\\cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I choose random item and add it to cart","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I open cart and verify the added item","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I fill checkout information with \"John\" \"Doe\" \"12345\"","stepMatchArguments":[{"group":{"start":33,"value":"\"John\"","children":[{"start":34,"value":"John","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"Doe\"","children":[{"start":41,"value":"Doe","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":46,"value":"\"12345\"","children":[{"start":47,"value":"12345","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I verify checkout overview and totals","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I finish the checkout","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I see order completion message","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And I return to home page","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I choose random item and add it to cart","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And I open cart and verify the added item","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When I cancel the checkout","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then I am back to cart page","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":27,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When I choose random item and add it to cart","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"And I open cart and verify the added item","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"And I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When I try to continue without filling information","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then I see error message \"Error: First Name is required\"","stepMatchArguments":[{"group":{"start":20,"value":"\"Error: First Name is required\"","children":[{"start":21,"value":"Error: First Name is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":41,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When I choose random item and add it to cart","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"And I open cart and verify the added item","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When I remove the item from cart","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then the cart is empty","stepMatchArguments":[]}]},
  {"pwTestLine":49,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I Login as \"valid\"","isBg":true,"stepMatchArguments":[{"group":{"start":11,"value":"\"valid\"","children":[{"start":12,"value":"valid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":50,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"Given I see page containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":51,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When I add first item to cart","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"And I add second item to cart","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then I verify 2 items are in cart","stepMatchArguments":[{"group":{"start":9,"value":"2","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":54,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When I open cart and verify both items","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"And I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"And I fill checkout information with \"Jane\" \"Smith\" \"67890\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Jane\"","children":[{"start":34,"value":"Jane","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"Smith\"","children":[{"start":41,"value":"Smith","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"67890\"","children":[{"start":49,"value":"67890","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":57,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then I verify checkout overview and totals for multiple items","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"When I finish the checkout","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then I see order completion message","stepMatchArguments":[]}]},
]; // bdd-data-end