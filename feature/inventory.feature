Feature: Product and Cart functionality

Background:
Given I am on home page
  Given I Login as "valid"

  Scenario: successfully add random item to cart
    Given I see page containing "Products"
    When I choose random item and add it to cart
    Then I verify item is in cart

Scenario: successfully add specific item to cart
    Given I see page containing "Products"
    When I choose random item and add it to cart
    Then I open cart and verify the added item

Scenario: View item details
    Given I see page containing "Products"
    When I click on a random item
    Then I see the item details page
    When I add the item to cart from details
    Then I verify item is in cart
    When I go back to products
    Then I see page containing "Products"

Scenario: Sort products by name A to Z
    Given I see page containing "Products"
    When I sort products by "Name (A to Z)"
    Then products are sorted alphabetically ascending

Scenario: Sort products by name Z to A
    Given I see page containing "Products"
    When I sort products by "Name (Z to A)"
    Then products are sorted alphabetically descending

Scenario: Sort products by price low to high
    Given I see page containing "Products"
    When I sort products by "Price (low to high)"
    Then products are sorted by price ascending

Scenario: Sort products by price high to low
    Given I see page containing "Products"
    When I sort products by "Price (high to low)"
    Then products are sorted by price descending

Scenario: Add multiple different items to cart
    Given I see page containing "Products"
    When I add item at index 0 to cart
    And I add item at index 1 to cart
    And I add item at index 2 to cart
    Then I verify 3 items are in cart
