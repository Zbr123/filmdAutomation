import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pageObjects/loginPage";

const login = new LoginPage();


// Given("I am on the login page", () => {
//   cy.visit("https://filmd-apps-dev-uks-app-app-01.azurewebsites.net/acc/login");
// });
////


// When("I enters email {string} and password {string}", (email, password) => {
//   login.enterEmail(email);
//   login.enterPassword(password);
// });

//new code

Given("I am on the login page", () => {
  cy.visit(Cypress.env('baseUrl') + "/acc/login", { failOnStatusCode: false, timeout: 20000 }); // Match manual URL
  cy.wait(4000); // Keep for stabilization
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

