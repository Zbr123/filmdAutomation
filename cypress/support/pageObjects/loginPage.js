class LoginPage {
  enterEmail(useremail) {
    cy.get('input[placeholder="Email"]', { timeout: 10000 }) // Increased timeout to 10s
      .should('be.visible')
      .clear()
      .type(useremail)
      .then($el => {
        if ($el.length === 0) {
          cy.log('Element with placeholder="Email" not found, trying alternatives');
          cy.get('input[type="email"]', { timeout: 10000 }) // Fallback selector
            .should('be.visible')
            .clear()
            .type(useremail);
        }
      });
  }

  enterPassword(password) {
    cy.get('input[placeholder="Password"]', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(password)
      .then($el => {
        if ($el.length === 0) {
          cy.log('Element with placeholder="Password" not found, trying alternatives');
          cy.get('input[type="password"]', { timeout: 10000 }) // Fallback selector
            .should('be.visible')
            .clear()
            .type(password);
        }
      });
  }
  // enterEmail(useremail) {
  //   cy.get('input[placeholder="Email"]').clear().type(useremail);
  // }

  // enterPassword(password) {
  //   cy.get('input[placeholder="Password"]').clear().type(password);
  // }

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