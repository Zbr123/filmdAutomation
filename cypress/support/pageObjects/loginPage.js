class LoginPage {
  enterEmail(useremail) {
    cy.get('input[placeholder="Email"]').clear().type(useremail);
  }

  enterPassword(password) {
    cy.get('input[placeholder="Password"]').clear().type(password);
  }

  clickLogin() {
    cy.get('button[id="btnLogin"]').click();
  }

  verifyDashboardVisible() {
    cy.xpath('//h1[contains(text(), "Dashboard")]').should('be.visible');
  }

  verifyErrorMessage(errorMessage) {
    cy.xpath(`//div[contains(@class, "fl-errorMsg__info") and contains(text(), "${errorMessage}")]`)
      .should('be.visible');
  }
}

export default LoginPage;