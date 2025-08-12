class ForumPage {
    clickButtonByText(buttonText) {
      cy.xpath(`//a[text()="${buttonText}"]`).click();
    }

    typeQuestion(text) {
       cy.xpath("//input[@placeholder='Your Question']").type(text);
    }

    typeMoreInfo(text) {
       cy.xpath("//div[@data-placeholder='More information about your question…']").type(text);
    }

    clickSubmitButton() {
       cy.xpath("//button[@id='btnSubmitForum' and text()='Submit']").click();
    }

    clickCategoryDropdown() {
       cy.xpath("//span[@class='multiselect__placeholder' and normalize-space(text())='Select Category']").click();
    }

    selectDropdownOption(optionText) {
       cy.xpath(`//ul[contains(@class,'multiselect__content')]//span[normalize-space(text())='${optionText}']`)
         .should('be.visible')
         .click();
    }

    verifyForumSuccessMessage() {
       cy.xpath("//div[contains(@class,'update_profile_mode_text') and normalize-space(text())='Your question have been saved successfully']")
       .should('be.visible');
    }

}

export default ForumPage;
