# 🎭 E-commerce Test Automation Framework
> Playwright + TypeScript + BDD (Cucumber) + Page Object Model

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 📋 Overview

This project is an end-to-end test automation framework built for an e-commerce web application. It demonstrates the implementation of **Behaviour-Driven Development (BDD)** using Cucumber with Gherkin syntax, combined with the **Page Object Model (POM)** design pattern for clean, maintainable, and scalable test structure.

The framework covers functional testing, edge case scenarios, and negative testing across core e-commerce modules — achieving 

---

## 🗂️ Framework Architecture

```
BDD-PRAC/
│
├── feature/                          # Gherkin test scenarios
│   ├── cart.feature                  # Cart functional scenarios
│   ├── checkout-edge-cases.feature   # Checkout edge cases & negative tests
│   ├── inventory-edge-cases.feature  # Inventory edge cases & negative tests
│   ├── inventory.feature             # Inventory functional scenarios
│   ├── login-edge-cases.feature      # Login edge cases & negative tests
│   └── login.feature                 # Login functional scenarios
│
├── pages/                            # Page Object Model classes
│   ├── CartPage.ts                   # Cart page interactions
│   ├── CheckoutPage.ts               # Checkout page interactions
│   ├── DetailInventoryPage.ts        # Product detail page interactions
│   ├── InventoryPage.ts              # Inventory/product list interactions
│   └── LoginPage.ts                  # Login page interactions
│
├── step/                             # BDD step definitions (glue code)
│   ├── cart.step.ts                  # Cart step implementations
│   ├── checkout-edge-cases.step.ts   # Checkout edge case steps
│   ├── home.step.ts                  # Home page steps
│   ├── inventory-edge-cases.step.ts  # Inventory edge case steps
│   └── inventory.step.ts             # Inventory step implementations
│
├── fixtures/                         # Reusable test setup & teardown
│
├── playwright-report/                # Generated HTML test reports
├── test-results/                     # Test result artifacts
│
├── .env                              # Environment variables (not committed)
├── .gitignore                        # Git ignore rules
├── package.json                      # Project dependencies
├── package-lock.json                 # Dependency lock file
├── playwright.config.js              # Playwright framework configuration
└── tsconfig.json                     # TypeScript configuration
```

---

## 🧪 Test Coverage

### Modules Covered

| Module | Feature File | Test Type | Scenarios |
|--------|-------------|-----------|-----------|
| **Login** | `login.feature` | Functional | Valid login, button behavior |
| **Login** | `login-edge-cases.feature` | Edge Case + Negative | Empty fields, special characters, long credentials, multiple failed attempts, problem user |
| **Inventory** | `inventory.feature` | Functional | Product listing, cart functionality |
| **Inventory** | `inventory-edge-cases.feature` | Edge Case + Negative | Boundary scenarios, invalid interactions |
| **Cart** | `cart.feature` | Functional | Add to cart, checkout flow |
| **Checkout** | `checkout-edge-cases.feature` | Edge Case + Negative | Validation, boundary inputs |

### Test Design Techniques Applied

| Technique | Where Applied |
|-----------|--------------|
| **Equivalence Partitioning** | Login credentials, inventory filters |
| **Boundary Value Analysis** | Quantity inputs, form field lengths |
| **Negative Testing** | Invalid credentials, empty fields, wrong formats |
| **Error Guessing** | Special characters, very long inputs, concurrent actions |
| **Real Use Scenarios** | End-to-end cart and checkout journeys |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Playwright](https://playwright.dev/) | Browser automation and test runner |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe scripting language |
| [Cucumber](https://cucumber.io/) | BDD framework with Gherkin syntax |
| [Node.js](https://nodejs.org/) | Runtime environment |
| [GitHub](https://github.com/) | Version control and code repository |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or above)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rinasitoW/bdd-Play.git
cd BDD-PRAC
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

### Running Tests

Run all tests:
```bash
npm test
```

Run specific feature file:
```bash
npx playwright test feature/login.feature
```

Run with headed browser (visible):
```bash
npx playwright test --headed
```

Run with Playwright UI mode:
```bash
npx playwright test --ui
```

### Viewing Test Report

After running tests, open the HTML report:
```bash
npx playwright show-report
```
---

## 🏗️ Design Patterns

### Page Object Model (POM)

Each page of the application has a dedicated TypeScript class that encapsulates all interactions with that page. This ensures:
- **Single responsibility** — each class handles one page
- **Reusability** — page methods reused across multiple test scenarios
- **Maintainability** — UI changes only require updating one class

```typescript
// Example: LoginPage.ts
export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto(process.env.BASE_URL!);
  }

  async login(username: string, password: string) {
    await this.page.fill('[data-test="username"]', username);
    await this.page.fill('[data-test="password"]', password);
    await this.page.click('[data-test="login-button"]');
  }

  async getErrorMessage() {
    return this.page.textContent('[data-test="error"]');
  }
}
```

### BDD with Gherkin

Test scenarios are written in plain English using Gherkin syntax — readable by testers, developers, and business stakeholders:

```gherkin
# Example: login-edge-cases.feature
Feature: Login Edge Cases and Negative Scenarios

  Scenario: Login with empty username only
    Given I am on the login page
    When I enter "" as username and "secret_sauce" as password
    And I click the login button
    Then I should see an error message

  Scenario: Login with special characters in password
    Given I am on the login page
    When I enter "standard_user" as username and "p@$$w0rd!" as password
    And I click the login button
    Then I should see an error message

  Scenario: Multiple failed login attempts
    Given I am on the login page
    When I attempt to login with invalid credentials 3 times
    Then I should see an error message each time
```

---

## 📁 Environment Configuration

Create a `.env` file in the root directory:

```env
BASE_URL=https://your-app-url.com
USERNAME=standard_user
PASSWORD=secret_sauce
HEADLESS=true
```

---

## 🤝 About This Project

This project was developed as part of my professional portfolio to demonstrate test automation skills using modern tools and best practices. It reflects my experience in:

- Designing and implementing automated test frameworks from scratch
- Applying appropriate test design techniques (BVA, EP, Negative Testing)
- Writing maintainable and scalable automation code
- Covering not just happy path but edge cases and negative scenarios
- Reducing test flakiness for reliable automation coverage

---

## 👩‍💻 Author

**Rina Sito Wulandari**
QA Engineer | Automation Tester | BA/PO Proxy

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rina-sito-wulandari-a5ba5898)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rinasitoW/)
📧 rinasito@gmail.com

