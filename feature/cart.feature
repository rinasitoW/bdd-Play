Feature: Cart and Checkout functionality

Background:
Given I am on home page
  Given I Login as "valid"

  Scenario: Successfully checkout with valid information
    Given I see page containing "Products"
    When I choose random item and add it to cart
    And I open cart and verify the added item
    And I proceed to checkout
    And I fill checkout information with "John" "Doe" "12345"
    Then I verify checkout overview and totals
    When I finish the checkout
    Then I see order completion message
    And I return to home page

  Scenario: Cancel checkout from information step
    Given I see page containing "Products"
    When I choose random item and add it to cart
    And I open cart and verify the added item
    And I proceed to checkout
    When I cancel the checkout
    Then I am back to cart page

  Scenario: Checkout with missing information
    Given I see page containing "Products"
    When I choose random item and add it to cart
    And I open cart and verify the added item
    And I proceed to checkout
    When I try to continue without filling information
    Then I see error message "Error: First Name is required"

  Scenario: Remove item from cart
    Given I see page containing "Products"
    When I choose random item and add it to cart
    And I open cart and verify the added item
    When I remove the item from cart
    Then the cart is empty

  Scenario: Add multiple items to cart
    Given I see page containing "Products"
    When I add first item to cart
    And I add second item to cart
    Then I verify 2 items are in cart
    When I open cart and verify both items
    And I proceed to checkout
    And I fill checkout information with "Jane" "Smith" "67890"
    Then I verify checkout overview and totals for multiple items
    When I finish the checkout
    Then I see order completion message