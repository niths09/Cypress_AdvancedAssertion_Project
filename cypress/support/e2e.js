// Prevent Cypress from failing tests due to site script errors
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-xpath')