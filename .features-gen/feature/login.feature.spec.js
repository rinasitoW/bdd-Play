// Generated from: feature\login.feature
import { test } from "../../fixtures/fixture";

test.describe('Login', () => {

  test('Check login button login', async ({ Given, When, Then, loginPage, page }) => { 
    await Given('I am on home page', null, { page }); 
    await When('I click button "Login" without fill any fields', null, { loginPage }); 
    await Then('I see in text containing "Username is required"', null, { loginPage }); 
  });

  test('Check login button login with valid credentials', async ({ Given, When, Then, inventoryPage, loginPage, page }) => { 
    await Given('I am on home page', null, { page }); 
    await When('I click button "Login" with fill valid username "standard_user" and password "secret_sauce"', null, { loginPage }); 
    await Then('I see text containing "Products"', null, { inventoryPage }); 
  });

  test.describe('Check login button login with invalid credentials', () => {

    test('Example #1', async ({ Given, When, Then, loginPage, page }) => { 
      await Given('I am on home page', null, { page }); 
      await When('I click button "Login" with fill invalid username "standard_user" and password "secret_sauces"', null, { loginPage }); 
      await Then('I see in text containing "Username and password do not match any user in this service"', null, { loginPage }); 
    });

    test('Example #2', async ({ Given, When, Then, loginPage, page }) => { 
      await Given('I am on home page', null, { page }); 
      await When('I click button "Login" with fill invalid username "locked_out_user" and password "secret_sauce"', null, { loginPage }); 
      await Then('I see in text containing "Sorry, this user has been locked out."', null, { loginPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('feature\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click button \"Login\" without fill any fields","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I see in text containing \"Username is required\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Username is required\"","children":[{"start":26,"value":"Username is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given I am on home page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I click button \"Login\" with fill valid username \"standard_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"standard_user\"","children":[{"start":49,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":77,"value":"\"secret_sauce\"","children":[{"start":78,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I see text containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I am on home page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I click button \"Login\" with fill invalid username \"standard_user\" and password \"secret_sauces\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"standard_user\"","children":[{"start":51,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":79,"value":"\"secret_sauces\"","children":[{"start":80,"value":"secret_sauces","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I see in text containing \"Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Username and password do not match any user in this service\"","children":[{"start":26,"value":"Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I am on home page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I click button \"Login\" with fill invalid username \"locked_out_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"locked_out_user\"","children":[{"start":51,"value":"locked_out_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":81,"value":"\"secret_sauce\"","children":[{"start":82,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I see in text containing \"Sorry, this user has been locked out.\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Sorry, this user has been locked out.\"","children":[{"start":26,"value":"Sorry, this user has been locked out.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end