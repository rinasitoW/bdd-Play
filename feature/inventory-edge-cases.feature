Feature: Inventory Edge Cases and Negative Scenarios

Background:
Given I am on home page
  Given I Login as "valid"

  Scenario: Verify all products are visible on page
    Given I see page containing "Products"
    Then I verify products count is greater than 0

  Scenario: Verify product names are not empty
    Given I see page containing "Products"
    When I click on a random item
    Then I verify the product name is not empty
    And I verify the product name matches the details page

  Scenario: Maximum items in cart functionality
    Given I see page containing "Products"
    When I add all available products to cart
    Then I verify all products are in cart

  Scenario: Product price validation
    Given I see page containing "Products"
    When I click on a random item
    Then I verify the price is displayed correctly
    And I verify the price is a valid number

  Scenario: Empty inventory after logout and login
    Given I see page containing "Products"
    When I add item at index 0 to cart
    And I logout and login again
    Then I verify cart is empty

  Scenario: Verify product descriptions are not empty
    Given I see page containing "Products"
    When I click on a random item
    Then I verify product description is not empty
    And I verify product description contains valid text