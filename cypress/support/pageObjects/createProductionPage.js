class CreateProductionPage {

  clickProductionSuite() {
    cy.xpath('//span[contains(@class, "d-block qLink-subLink-menuText") and contains(text(), "Production Suite")]').click();
  }

  verifyWelcomeToProductions() {
    cy.xpath('//div[contains(@class, "header_video__sec_title") and contains(text(), "Welcome to Productions")]').should('be.visible');
  }

  clickCreateProductionButton() {
    cy.xpath('//button[contains(@class, "btn btn-block btn-primary text-uppercase") and contains(text(), "Create A Production")]').click();
  }

  verifyProductionCreation() {
    cy.xpath('//h1[@id="pageTitleHeading" and contains(text(), "Production Creation")]').should('be.visible');
  }

  clickImageUploadIcon() {
    cy.xpath('//label[contains(@class, "custom-file-label") and @for="uploadProfileImage" and .//span[contains(text(), "Add Photo")]]').click({ force: true });
  }

  uploadImageFromDesktop() {
    const imagePath = 'images/profile.png'; // path inside cypress/fixtures/images/
    cy.get('input[type="file"]#uploadProfileImage').attachFile(imagePath);
  }


enterValueInField(label, value) {
  let selector;

  switch (label) {
    case 'Production Title':
      selector = 'input[name="projectName"]';
      break;
    case 'Location':
      selector = 'input[name="search_location"]';
      break;
    case 'Production Bio':
      selector = 'textarea#projectBio';
      break;
    default:
      throw new Error(`Unsupported field label: ${label}`);
  }

  cy.get(selector).clear().type(value);
}

clickDynamicDropdown(labelText) {
  cy.xpath(`//div[contains(@class, "form-group") and .//label[contains(text(), "${labelText}")]]
    //div[contains(@class, "multiselect__select")]`).click({ force: true });
}

selectDynamicDropdownOption(labelText, optionText) {
  cy.xpath(`//div[contains(@class, "form-group") and .//label[contains(text(), "${labelText}")]]
    //ul[contains(@class, "multiselect__content")]//li//span[contains(text(), "${optionText}")]`).first().click({ force: true });
}

checkCheckboxByLabel(labelText) {
  // Escaping curly quotes or odd characters in label
  cy.xpath(`//label[normalize-space(text())="${labelText}"]`).click({ force: true });
}

clickButtonByLabel(labelText) {
  cy.xpath(`//button[contains(@id, 'btnSubmitProject') and contains(text(), "${labelText}")]`).click({ force: true });
}

verifySubmittedProjectTitle() {
  cy.get('.view-project > .article__title > .custom-font-weight-bolder')
    .should('be.visible');
}







}

export default CreateProductionPage;