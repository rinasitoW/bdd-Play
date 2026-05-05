// Generated from: feature\login-edge-cases.feature
import { test } from "../../fixtures/fixture";

test.describe('Login Edge Cases and Negative Scenarios', () => {

  test('Login with special characters in password', async ({ Given, When, Then, loginPage, page }) => { 
    await Given('I am on home page', null, { page }); 
    await When('I click button "Login" with fill invalid username "standard_user" and password "!@#$%^&*()"', null, { loginPage }); 
    await Then('I see in text containing "Username and password do not match"', null, { loginPage }); 
  });

  test('Login with empty username only', async ({ Given, When, Then, loginPage, page }) => { 
    await Given('I am on home page', null, { page }); 
    await When('I click button "Login" without fill any fields', null, { loginPage }); 
    await Then('I see in text containing "Username is required"', null, { loginPage }); 
  });

  test('Login with very long credentials', async ({ Given, When, Then, loginPage, page }) => { 
    await Given('I am on home page', null, { page }); 
    await When('I click button "Login" with fill invalid username "a_very_long_username_that_should_not_exist_in_the_system_12345" and password "a_very_long_password_that_should_not_match_12345"', null, { loginPage }); 
    await Then('I see in text containing "Username and password do not match"', null, { loginPage }); 
  });

  test('Verify problem user can login but sees issues', async ({ Given, When, Then, inventoryPage, loginPage, page }) => { 
    await Given('I am on home page', null, { page }); 
    await When('I click button "Login" with fill valid username "problem_user" and password "secret_sauce"', null, { loginPage }); 
    await Then('I see text containing "Products"', null, { inventoryPage }); 
  });

  test('Multiple failed login attempts', async ({ Given, When, Then, loginPage, page }) => { 
    await Given('I am on home page', null, { page }); 
    await When('I click button "Login" with fill invalid username "invalid_user" and password "invalid_pass"', null, { loginPage }); 
    await Then('I see in text containing "Username and password do not match"', null, { loginPage }); 
    await When('I click button "Login" with fill invalid username "another_invalid" and password "another_pass"', null, { loginPage }); 
    await Then('I see in text containing "Username and password do not match"', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('feature\\login-edge-cases.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I click button \"Login\" with fill invalid username \"standard_user\" and password \"!@#$%^&*()\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"standard_user\"","children":[{"start":51,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":79,"value":"\"!@#$%^&*()\"","children":[{"start":80,"value":"!@#$%^&*()","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I see in text containing \"Username and password do not match\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Username and password do not match\"","children":[{"start":26,"value":"Username and password do not match","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on home page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I click button \"Login\" without fill any fields","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I see in text containing \"Username is required\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Username is required\"","children":[{"start":26,"value":"Username is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I am on home page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I click button \"Login\" with fill invalid username \"a_very_long_username_that_should_not_exist_in_the_system_12345\" and password \"a_very_long_password_that_should_not_match_12345\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"a_very_long_username_that_should_not_exist_in_the_system_12345\"","children":[{"start":51,"value":"a_very_long_username_that_should_not_exist_in_the_system_12345","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":128,"value":"\"a_very_long_password_that_should_not_match_12345\"","children":[{"start":129,"value":"a_very_long_password_that_should_not_match_12345","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I see in text containing \"Username and password do not match\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Username and password do not match\"","children":[{"start":26,"value":"Username and password do not match","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given I am on home page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I click button \"Login\" with fill valid username \"problem_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"problem_user\"","children":[{"start":49,"value":"problem_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":76,"value":"\"secret_sauce\"","children":[{"start":77,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I see text containing \"Products\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Products\"","children":[{"start":23,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given I am on home page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When I click button \"Login\" with fill invalid username \"invalid_user\" and password \"invalid_pass\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"invalid_user\"","children":[{"start":51,"value":"invalid_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":78,"value":"\"invalid_pass\"","children":[{"start":79,"value":"invalid_pass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then I see in text containing \"Username and password do not match\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Username and password do not match\"","children":[{"start":26,"value":"Username and password do not match","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When I click button \"Login\" with fill invalid username \"another_invalid\" and password \"another_pass\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"another_invalid\"","children":[{"start":51,"value":"another_invalid","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":81,"value":"\"another_pass\"","children":[{"start":82,"value":"another_pass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then I see in text containing \"Username and password do not match\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Username and password do not match\"","children":[{"start":26,"value":"Username and password do not match","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end