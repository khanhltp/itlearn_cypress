// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('inputText', function (element, text) {
  element
    .click()
    .clear()
    .type(text)
    .should('have.value',text);
  // .invoke('val')
  // .then(function (val) {
  //   expect(val).to.eq(text)
  // })
})

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Cypress.Commands.add('checkDisplay', function (element, text) {
  element
    .should('be.visible')
    .should('have.text', text)
})

Cypress.Commands.add('checkURL', function (text) {
  cy.url().should('includes', text);
})

Cypress.Commands.add('checkColor', function (element, text_color, background_color, border_color) {
  element
  .should('be.visible')
    .should('have.css', 'color', text_color)
    .should('have.css', 'background-color', background_color)
    .should('have.css', 'border-color', border_color);
})
