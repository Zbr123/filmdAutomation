class LoginPage {
  enterEmail(useremail) {
    cy.get('input[placeholder="Email"]', { timeout: 15000 }) // Increased to 15s
      .should('be.visible')
      .clear()
      .type(useremail)
      .then($el => {
        if ($el.length === 0) {
          cy.log('Primary selector failed, trying alternatives');
          cy.get('input[type="email"]', { timeout: 15000 }) // Fallback
            .should('be.visible')
            .clear()
            .type(useremail)
            .then($altEl => {
              if ($altEl.length === 0) {
                cy.log('No email input found, capturing screenshot');
                cy.screenshot('email-field-missing'); // Debug screenshot
                throw new Error('Email input not found with any selector');
              }
            });
        }
      });
  }

  enterPassword(password) {
    cy.get('input[placeholder="Password"]', { timeout: 15000 })
      .should('be.visible')
      .clear()
      .type(password)
      .then($el => {
        if ($el.length === 0) {
          cy.log('Primary selector failed, trying alternatives');
          cy.get('input[type="password"]', { timeout: 15000 }) // Fallback
            .should('be.visible')
            .clear()
            .type(password)
            .then($altEl => {
              if ($altEl.length === 0) {
                cy.log('No password input found, capturing screenshot');
                cy.screenshot('password-field-missing');
                throw new Error('Password input not found with any selector');
              }
            });
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