import LoginUI from "../demo4_pages/demo4";
let loginUI = new LoginUI();


describe('Test log in', () => {
  it('standard_user', () => {
    loginUI.visitURL;

    cy.inputText(loginUI.getUsername, 'standard_user')
      .should('not.be.disabled')
      .should('be.visible')
      .should('have.value', 'standard_user');

    cy.inputText(loginUI.getPassword, 'secret_sauce')
      .should('not.be.disabled')
      .should('be.visible')
      .should('have.value', 'secret_sauce');

    loginUI.getButton.click();

    cy.url().should('includes','/inventory.html');
    cy.get('.inventory_list').should('be.visible');

  })


  it('wrong_password', () => {

    loginUI.visitURL;

    cy.inputText(loginUI.getUsername, 'standard_user')
      .should('not.be.disabled')
      .should('be.visible')
      .should('have.value', 'standard_user');

    cy.inputText(loginUI.getPassword, 'wrong_password')
      .should('not.be.disabled')
      .should('be.visible')
      .should('have.value', 'wrong_password');

    loginUI.getButton.click();

    cy.get('.error-message-container h3')
      .should('be.visible')
      .should('contain.text', 'Username and password do not match');
  })

  it('locked_out_user', () => {

    loginUI.visitURL;

    cy.inputText(loginUI.getUsername, 'locked_out_user')
      .should('not.be.disabled')
      .should('be.visible')
      .should('have.value', 'locked_out_user');

    cy.inputText(loginUI.getPassword, 'secret_sauce')
      .should('not.be.disabled')
      .should('be.visible')
      .should('have.value', 'secret_sauce');

    loginUI.getButton.click();

    cy.get('.error-message-container h3')
      .should('be.visible')
      .should('contain.text', 'Sorry, this user has been locked out');
  })

  // Dùng authencommand
    it('Login dùng authencommand', () => {
      cy.login();
      cy.url().should('includes','/inventory.html');
    cy.get('.inventory_list').should('be.visible');
    })
  })