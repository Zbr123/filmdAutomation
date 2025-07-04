class LoginPage {
  // enterEmail(useremail) {
  //   cy.get('input[placeholder="Email"]', { timeout: 20000 }) // Primary attempt
  //     .should('be.visible')
  //     .clear()
  //     .type(useremail)
  //     .then($el => {
  //       if ($el.length === 0) {
  //         cy.log('Placeholder "Email" not found, trying type="email"');
  //         cy.get('input[type="email"]', { timeout: 20000 }) // Fallback
  //           .should('be.visible')
  //           .clear()
  //           .type(useremail);
  //       }
  //     });
  // }

  // enterPassword(password) {
  //   cy.get('input[placeholder="Password"]', { timeout: 20000 })
  //     .should('be.visible')
  //     .clear()
  //     .type(password)
  //     .then($el => {
  //       if ($el.length === 0) {
  //         cy.log('Placeholder "Password" not found, trying type="password"');
  //         cy.get('input[type="password"]', { timeout: 20000 })
  //           .should('be.visible')
  //           .clear()
  //           .type(password);
  //       }
  //     });
  // }
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