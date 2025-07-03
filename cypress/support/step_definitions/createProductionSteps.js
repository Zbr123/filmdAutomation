// import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// import CreateProductionPage from "../pageObjects/createProductionPage";

// const createProduction = new CreateProductionPage();

// // When("I click on the side navbar", () => {
// //   productionSearch.clickSideNavbar();
// // });

// // When("I click on Productions text", () => {
// //   productionSearch.clickProductionsText();
// // });

// When("I click on Production Suite text", () => {
//   productionSearch.clickProductionSuiteText();
// });

// Then("I should see Welcome to Productions text", () => {
//   productionSearch.verifyWelcomeToProductions();
// });

// When("I click on the Create Production button", () => {
//   productionSearch.clickCreateProductionButton();
// });


// Then("I should see Production Creation text", () => {
//   productionSearch.verifyProductionCreation();
// });

// //Search Filters Field 

// When("I click on the Type dropdown", () => {
//   productionSearch.clickTypeDropdown();
// });

// When("I select {string} from the Type dropdown", (option) => {
//   productionSearch.selectTypeItem(option);
// });

// When("I click on the Genre dropdown", () => {
//   productionSearch.clickGenreDropdown();
// });

// When("I select {string} from the Genre dropdown", (gender) => {
//   productionSearch.selectGenreItem(gender);
// });


// When("I click on the Status dropdown", () => {
//   productionSearch.clickStatusDropdown();
// });

// When("I select {string} from the Status dropdown", (appearance) => {
//   productionSearch.selectStatusItem(appearance);
// });

// When("I click the Search button", () => {
//   productionSearch.clickSearchButton();
// });

// //RESULTS

// Then("I should see production search results with Type {string} in a user info job title", (type) => {
//   productionSearch.verifyTypeInJobTitle(type);
// });

// Then("I should see production search results with Status {string} in a user info job title", (status) => {
//   productionSearch.verifyStatusInJobTitle(status);
// });

// Then("I should see No result found text", () => {
//   productionSearch.verifyNoResults();
// });