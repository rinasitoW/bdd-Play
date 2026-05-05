Feature: Cart and Checkout Edge Cases and Negative Scenarios

Background:
Given I am on home page
  Given I Login as "valid"

  Scenario: Verify cart persists after page refresh
    Given I see page containing "Products"
    When I choose random item and add it to cart
    And I refresh the page
    Then I verify cart item persists

  Scenario: Checkout with only first name
    Given I see page containing "Products"
    When I choose random item and add it to cart
    And I open cart and verify the added item
    And I proceed to checkout
    When I fill checkout with only first name "John"
    Then I see error message "Error: Last Name is required"

  Scenario: Checkout with only last name
    Given I see page containing "Products"
    When I choose random item and add it to cart
    And I open cart and verify the added item
    And I proceed to checkout
    When I fill checkout with only last name "Doe"
    Then I see error message "Error: First Name is required"

  Scenario: Checkout with only zip code
    Given I see page containing "Products"
    When I choose random item and add it to cart
    And I open cart and verify the added item
    And I proceed to checkout
    When I fill checkout with only zip code "12345"
    Then I see error message "Error: First Name is required"

  Scenario: Verify checkout total calculation accuracy
    Given I see page containing "Products"
    When I add item at index 0 to cart
    And I add item at index 1 to cart
    And I open cart and verify both items
    And I proceed to checkout
    And I fill checkout information with "Jane" "Smith" "67890"
    Then I verify the total calculation is correct

  Scenario: Verify checkout flow before completion
    Given I see page containing "Products"
    When I choose random item and add it to cart
    And I open cart and verify the added item
    And I proceed to checkout
    And I fill checkout information with "Test" "User" "12345"
    Then I verify checkout overview and totals

  Scenario: Verify cart badge updates correctly
    Given I see page containing "Products"
    When I choose random item and add it to cart
    Then I verify cart badge shows 1
    When I choose random item and add it to cart
    Then I verify cart badge shows 2
    When I open cart and verify both items
    And I remove all items from cart
    Then I verify cart badge is not visible