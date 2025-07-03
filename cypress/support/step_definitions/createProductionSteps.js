import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CreateProductionPage from "../pageObjects/createProductionPage";

const createProduction = new CreateProductionPage();


When("I click on Production Suite text", () => {
  createProduction.clickProductionSuite();
});

Then("I should see Welcome to Productions text", () => {
  createProduction.verifyWelcomeToProductions();
});

When("I click on the Create Production button", () => {
  createProduction.clickCreateProductionButton();
});


Then("I should see Production Creation text", () => {
  createProduction.verifyProductionCreation();
});

When("I click the image upload icon", () => {
  createProduction.clickImageUploadIcon();
});


When("I upload an image from desktop", () => {
  createProduction.uploadImageFromDesktop();
});


When('I enter {string} in {string} field', (value, label) => {
  createProduction.enterValueInField(label, value);
});

When('I click on the {string} dropdown', (label) => {
  createProduction.clickDynamicDropdown(label);
});

When('I select {string} from the {string} dropdown', (option, label) => {
  createProduction.selectDynamicDropdownOption(label, option);
});

When('I check the {string} checkbox', (labelText) => {
  createProduction.checkCheckboxByLabel(labelText);
});

When('I click on the {string} button', (buttonLabel) => {
  createProduction.clickButtonByLabel(buttonLabel);
});

Then('I should see the submitted project title', () => {
  createProduction.verifySubmittedProjectTitle();
});



