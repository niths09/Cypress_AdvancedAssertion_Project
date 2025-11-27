# Cypress Test Automation – Login Advanced Assertions

This repository contains automated test scripts written using **Cypress** for validating the login functionality of the Practice Test Automation website:  
https://practicetestautomation.com/practice-test-login/

The project demonstrates **advanced assertions**, **XPath usage**, **positive & negative login tests** and **best practices** for UI automation.

---

## Project Structure

```
Cypress/
  ├── e2e/
  │ └── advancedAssertions.cy.js # Test file containing login validations
  ├── support/
  │ └── commands.js 
  └── fixtures/ 
```

---

## Features Covered

### **Test Case 1 – Valid Login**
- Visit login page  
- Validate page title  
- Validate username & password fields  
- Assert attributes: `type`, `id`, `value`  
- Validate login button visibility & state  
- Validate success message after login  
- Assert logout button text & visibility  

### **Test Case 2 – Invalid Login**
- Enter incorrect credentials  
- Click login  
- Validate error message  
- CSS assertion on error text color  

---

## Running the Tests

### Run tests in **headed** Cypress UI:
```bash
npx cypress open
```

### Run tests in **headless** mode:
```bash
npx cypress run
```

---

## Dependencies Used
- **Cypress**
- **Cypress-XPath**

Install XPath if not added:
```bash
npm install -D cypress-xpath
```

Add this to *cypress/support/e2e.js*:
```js
require('cypress-xpath');
```
