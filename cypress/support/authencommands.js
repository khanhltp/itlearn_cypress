import LoginUI from "../e2e/pages/saucedemo";
let loginUI = new LoginUI();

Cypress.Commands.add("login", function () {
    loginUI.visitURL;
    cy.inputText(loginUI.getUsername, 'standard_user')
    cy.inputText(loginUI.getPassword, 'secret_sauce')
    loginUI.getButton.click();

    cy.url().should('includes','/inventory.html');
    cy.get('.inventory_list').should('be.visible');
  })