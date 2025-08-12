import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ForumPage from "../pageObjects/forumPostPage";

const forum = new ForumPage();

When('I click on {string} button', (buttonText) => {
  forum.clickButtonByText(buttonText);
});

When("I enter {string} in your Question field", (text) => {
  forum.typeQuestion(text);
});

When("I enter {string} int the morre information field", (text) => {
  forum.typeMoreInfo(text);
});

When("I click on Category dropdown", () => {
  forum.clickCategoryDropdown();
});

When("I select Directing from dropdown", () => {
  forum.selectDropdownOption("Directing");
});

When("I clicks on Submit button", () => {
  forum.clickSubmitButton();
});

Then("I should see forum success message", () => {
  forum.verifyForumSuccessMessage();
});
