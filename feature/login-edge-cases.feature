Feature: Login Edge Cases and Negative Scenarios

  Scenario: Login with special characters in password
    Given I am on home page
    When I click button "Login" with fill invalid username "standard_user" and password "!@#$%^&*()"
    Then I see in text containing "Username and password do not match"

  Scenario: Login with empty username only
    Given I am on home page
    When I click button "Login" without fill any fields
    Then I see in text containing "Username is required"

  Scenario: Login with very long credentials
    Given I am on home page
    When I click button "Login" with fill invalid username "a_very_long_username_that_should_not_exist_in_the_system_12345" and password "a_very_long_password_that_should_not_match_12345"
    Then I see in text containing "Username and password do not match"

  Scenario: Verify problem user can login but sees issues
    Given I am on home page
    When I click button "Login" with fill valid username "problem_user" and password "secret_sauce"
    Then I see text containing "Products"

  Scenario: Multiple failed login attempts
    Given I am on home page
    When I click button "Login" with fill invalid username "invalid_user" and password "invalid_pass"
    Then I see in text containing "Username and password do not match"
    When I click button "Login" with fill invalid username "another_invalid" and password "another_pass"
    Then I see in text containing "Username and password do not match"