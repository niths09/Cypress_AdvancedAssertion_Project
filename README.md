# Cypress Advanced Assertions – Practice Test Automation Login Project

## Overview

This project automates the **Login** and **Error Validation** flows of the
**Practice Test Automation - Test Login Page** using Cypress.

It focuses heavily on:

* Advanced UI Assertions
* Attribute validations (type, id, value, text)
* XPath-based selectors
* Clean structure using `beforeEach()`
* Positive & negative test flows
* Assertions on success messages, error messages and Logout button

The project includes two complete test cases:

1. **Successful Login - Full page & element validation**
2. **Invalid Login - Error message & CSS validation**

---

## Test Scenarios Covered

### 1️⃣ Validate Successful Login & Dashboard Assertions

Includes:

* Validating page title
* Verifying Username field:

  * Visibility
  * Enabled state
  * Attribute checks (`type`, `id`)
  * Input value
* Verifying Password field:

  * Visibility
  * Enabled state
  * Attribute checks (`type`, `id`)
  * Input value
* Login button assertions:

  * Visible
  * Enabled
  * Text check
* Dashboard Assertions after Login:

  * Heading: “Logged In Successfully”
  * Success text message
  * Logout button visibility, enabled state, and text
* Logout flow validation

---

### 2️⃣ Validate Error Message Using Advanced Assertions

Flow covered:

* Enter incorrect credentials
* Validate displayed error message
* Assert error text:

  * “Your username is invalid!”
* Assert CSS color of error message
* Ensure error is visible on the UI

---

## Tech Stack

| Component     | Description                               |
| ------------- | ----------------------------------------- |
| **Framework** | Cypress                                   |
| **Language**  | JavaScript (ES6)                          |
| **Selectors** | XPath using `cypress-xpath`               |
| **Browser**   | Chrome (default)                          |
| **Approach**  | Hooks + Assertions + XPath-based locators |

---

## Step-by-Step Setup

### 1️⃣ Create Project Folder

```
mkdir Cypress_LoginSignup_Demo
cd Cypress_LoginSignup_Demo
```

### 2️⃣ Initialize Node Project

```
npm init -y
```

### 3️⃣ Install Cypress & Dependencies

```
npm install cypress cypress-xpath --save-dev
```

### 4️⃣ Open Cypress

```
npx cypress open
```

This creates the full Cypress folder structure.

---

## Folder Structure

```
Cypress_PracticeTest_Login/
│
├── cypress/
│   ├── e2e/
│   │   └── advancedAssertions.cy.js          # Both test cases
│   ├── support/
│   │   ├── commands.js                      
│   │   └── e2e.js
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## Key Features

* Extensive use of **advanced Cypress assertions**
* UI validation of each field and component
* XPath selectors for accurate element targeting
* Positive & negative login cases both covered
* Validations for:

  * Visibility
  * Enabled/Disabled state
  * Attributes (type, id)
  * Value checks
  * Text checks
  * CSS properties
* Full post-login dashboard verification

---

## Running the Tests

### Run using Cypress GUI

```
npx cypress open
```

Select:

```
advancedAssertions.cy.js
```

### Run in Headless Mode

```
npx cypress run
```

---
