import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import EditBioPage from "../pageObjects/editBioPage";

const editBio = new EditBioPage();

When("I click on add bio text", () => {
  editBio.clickAddBio();
});

When("I click on edit profile button", () => {
  editBio.clickEditProfile();
});

When("I enters status {string} in status field", (text) => {
  editBio.typeUpdateStatus(text);
});

When("I enters Short Bio {string} in the field", (shortbio) => {
  editBio.typeShortBio(shortbio);
});

When("I click on the availability dropdown", () => {
  editBio.clickProfessionsDropdown();
});

When("I select {string} from the Professions dropdown", (option) => {
  editBio.selectProfessionsItem(option);
});

When("I click on the Gender identity dropdown", () => {
  editBio.clickGenderIdentityDropdown();
});

When("I select {string} from the Gender identity dropdown", (gender) => {
  editBio.selectGenderIdentityItem(gender);
});


When("I click on the Ethinic Appearance dropdown", () => {
  editBio.clickEthinicAppearanceDropdown();
});

When("I select {string} from the Ethinic Appearance dropdown", (appearance) => {
  editBio.selectEthinicAppearanceItem(appearance);
});


When("I click the save button", () => {
  editBio.clickSaveButton();
});

Then("I should see the message {string}", (message) => {
  editBio.verifyProfileMessage(message);
});

