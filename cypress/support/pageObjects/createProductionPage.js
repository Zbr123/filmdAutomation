class CreateProductionPage {

  clickSideNavbar() {
    cy.xpath('//a[@id="navbarDropdownMM-1" and contains(@class, "nav-link dropdown-toggle menu-bar-icon")]').click();
  }

  clickProductionsText() {
    cy.xpath('//span[contains(@class, "qLink-link-menuText") and contains(text(), "Productions")]').click();
  }

  clickProductionSuiteText() {
    cy.xpath('//a[contains(@class, "qLink-link dropdown-item icon") and .//span[contains(@class, "qLink-subLink-menuText") and contains(text(), "Productions Suite")]]').click();
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




  clickTypeDropdown() {
    cy.xpath('//div[contains(@class, "multiselect__select") and ancestor::div[contains(@class, "form-group") and .//label[contains(text(), "Type") or contains(text(), "Type")]]]').click({ force: true });
  }

  selectTypeItem(option) {
    cy.xpath(`//li[contains(@class, "multiselect__element") and .//span[contains(text(), "${option}")]]`).first().click();
  }


  clickGenreDropdown() {
    cy.xpath('//div[contains(@class, "multiselect__select") and ancestor::div[contains(@class, "form-group") and .//label[contains(text(), "Genre") or contains(text(), "Genre")]]]').click({ force: true });
  }

  selectGenreItem(gender) {
    cy.xpath(`//li[contains(@class, "multiselect__element") and .//span[contains(text(), "${gender}")]]`).first().click();
  }


  clickStatusDropdown() {
    cy.xpath('//div[contains(@class, "multiselect__select") and ancestor::div[contains(@class, "form-group") and .//label[contains(text(), "Status") or contains(text(), "Status")]]]').click({ force: true });
  }

  selectStatusItem(appearance) {
    cy.xpath(`//li[contains(@class, "multiselect__element") and .//span[contains(text(), "${appearance}")]]`).first().click();
  }

  clickSearchButton() {
    cy.xpath('//button[@id="btnSearch1" and contains(@class, "btn btn-primary btn-block text-uppercase")]').click();
  }

  verifyTypeInJobTitle(type) {
    cy.xpath(`//div[contains(@class, "user_info_job_title") and contains(text(), "${type}")]`).should('be.visible');
  }

  verifyStatusInJobTitle(status) {
    cy.xpath(`//div[contains(@class, "user_info_job_title") and contains(text(), "${status}")]`).should('be.visible');
  }

  verifyNoResults() {
    cy.xpath('//div[contains(@class, "col-12") and contains(text(), "No result found")]').should('be.visible');
  }







}

export default CreateProductionPage;