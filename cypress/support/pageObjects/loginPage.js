class LoginPage {
  enterEmail(useremail) {
    cy.get('input[placeholder="Email"]', { timeout: 20000 }) // Primary attempt
      .should('be.visible')
      .clear()
      .type(useremail)
      .then($el => {
        if ($el.length === 0) {
          cy.log('Placeholder "Email" not found, trying alternatives');
          // Try common email input types
          return cy.get('input[type="email"]', { timeout: 20000 })
            .should('be.visible')
            .clear()
            .type(useremail)
            .then($altEl => {
              if ($altEl.length === 0) {
                cy.log('Type "email" not found, capturing DOM and screenshot');
                cy.document().then(doc => {
                  cy.writeFile('cypress/debug/email-dom.html', doc.documentElement.outerHTML); // Save DOM
                });
                cy.screenshot('email-field-missing');
                throw new Error('Email input not found with any selector');
              }
            });
        }
      });
  }

  enterPassword(password) {
    cy.get('input[placeholder="Password"]', { timeout: 20000 })
      .should('be.visible')
      .clear()
      .type(password)
      .then($el => {
        if ($el.length === 0) {
          cy.log('Placeholder "Password" not found, trying alternatives');
          return cy.get('input[type="password"]', { timeout: 20000 })
            .should('be.visible')
            .clear()
            .type(password)
            .then($altEl => {
              if ($altEl.length === 0) {
                cy.log('Type "password" not found, capturing DOM and screenshot');
                cy.document().then(doc => {
                  cy.writeFile('cypress/debug/password-dom.html', doc.documentElement.outerHTML);
                });
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