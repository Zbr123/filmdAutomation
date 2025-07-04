import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pageObjects/loginPage";

const login = new LoginPage();


// Given("I am on the login page", () => {
//   cy.visit("https://filmd-apps-dev-uks-app-app-01.azurewebsites.net/acc/login");
// });


// When("I enters email {string} and password {string}", (email, password) => {
//   login.enterEmail(email);
//   login.enterPassword(password);
// });

Given("I am on the login page", () => {
  cy.visit(Cypress.env('baseUrl') + "/acc/login", { failOnStatusCode: false, timeout: 20000 }) // Explicitly set login page
    .then(() => {
      cy.url().should('include', '/acc/login'); // Verify URL
      cy.get('body').should('not.contain', '403'); // Check for 403
      cy.get('input[type="email"]', { timeout: 20000 }) // Quick check
        .should('be.visible')
        .then($el => {
          if ($el.length === 0) {
            cy.log('Email input not found, capturing screenshot');
            cy.screenshot('login-page-error');
          }
        });
    });
  cy.wait(4000); // Keep for now to stabilize
});

When("I enters email {string} and password {string}", (email, password) => {
  login.enterEmail(email || Cypress.env('validEmail'));
  login.enterPassword(password || Cypress.env('validPassword'));
});


When("clicks on login button", () => {
  login.clickLogin();
});

Then("I should see the dashboard page", () => {
  login.verifyDashboardVisible();
});

Then("I should see an error message {string}", (errorMessage) => {
  login.verifyErrorMessage(errorMessage);
});

