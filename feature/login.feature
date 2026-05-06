Feature: Login 

  Scenario: Check login button login
    Given I am on home page
    When I click button "Login" without fill any fields
    Then I see in text containing "Username is required"


  Scenario: Check login button login with valid credentials
    Given I am on home page
    When I click button "Login" with fill valid username "standard_user" and password "secret_sauce"
    Then I see text containing "Products"


  Scenario Outline: Check login button login with invalid credentials
    Given I am on home page
    When I click button "<buttonName>" with fill invalid username "<username>" and password "<password>"
    Then I see in text containing "<errorMessage>"

    Examples:
      | buttonName | username       | password       | errorMessage                                                     |
      | Login      | standard_user  | secret_sauces  | Username and password do not match any user in this service      |
      | Login      | locked_out_user| secret_sauce   | Sorry, this user has been locked out.                            |