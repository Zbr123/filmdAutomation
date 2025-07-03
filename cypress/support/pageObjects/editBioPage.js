class EditBioPage {

    
  clickAddBio() {
    cy.xpath('//a[@id="navbarDropdownMenuLink-4"]').click();
  }

  clickEditProfile() {
    cy.xpath('//a[contains(text(), "Edit profile")]').first().click();

  }

  typeUpdateStatus(text) {
    cy.xpath('//input[@id="updateStatus"]').clear().type(text);
  }

  typeShortBio(shortbio) {
    cy.xpath('//textarea[@placeholder="Enter a short 300 character max bio."]').clear().type(shortbio);
  }

  clickProfessionsDropdown() {
    cy.xpath('//div[contains(@class, "multiselect__select") and ancestor::div[contains(@class, "form-group") and .//label[contains(text(), "Profession") or contains(text(), "Role")]]]').click({ force: true });
  }

  selectProfessionsItem(option) {
    cy.xpath(`//li[contains(@class, "multiselect__element") and .//span[contains(text(), "${option}")]]`).first().click();
  }


  clickGenderIdentityDropdown() {
    cy.xpath('//div[contains(@class, "multiselect__select") and ancestor::div[contains(@class, "form-group") and .//label[contains(text(), "Gender") or contains(text(), "Identity")]]]').click({ force: true });
  }

  selectGenderIdentityItem(gender) {
    cy.xpath(`//li[contains(@class, "multiselect__element") and .//span[contains(text(), "${gender}")]]`).first().click();
  }


  clickEthinicAppearanceDropdown() {
    cy.xpath('//div[contains(@class, "multiselect__select") and ancestor::div[contains(@class, "form-group") and .//label[contains(text(), "Ethnic") or contains(text(), "Appearance")]]]').click({ force: true });
  }

  selectEthinicAppearanceItem(appearance) {
    cy.xpath(`//li[contains(@class, "multiselect__element") and .//span[contains(text(), "${appearance}")]]`).first().click();
  }

  clickSaveButton() {
    cy.xpath('//a[contains(@class, "btn btn-outline-white btn-block text-uppercase") and contains(text(), "Save")]').click();
  }

  verifyProfileMessage(message) {
    cy.xpath(`//div[contains(@class, "update_profile_mode_text") and contains(text(), "${message}")]`).should('be.visible');
  }



}

export default EditBioPage;