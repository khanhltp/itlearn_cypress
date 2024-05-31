// describe('template spec', () => {
//     it('passes', () => {
//       cy.visit('https://mingo.vn/')
//       cy.get('#textInput').type('abc123').should('have.value','abc123');
//       cy.get('#emailInput').type('useremail@gmail.com').should('have.value','useremail@gmail.com');
//       cy.get('#passwordInput').type('abc123').should('have.value','abc123');
//       cy.get('#dateInput').type('2024-05-22').should('have.value', '2024-05-22');
//       cy.get('#checkboxInput').check();
//       cy.get('#radioInput2').check();
//       cy.get('#selectInput').select('Option 2')
//       cy.get('button[type = "submit"]').click();
//     //   cy.get('form').submit();
//     })
//   })


describe('template spec', () => {
    it('Login và verify login success', () => {
      cy.visit('https://www.saucedemo.com/')
      

      cy.get('#user-name')
      .should('not.be.disabled')
      .should('be.visible')

      .type('standard_user')
      .should('have.value','standard_user');
      
      cy.get('#password')
      .should('not.be.disabled')
      .should('be.visible')

      .type('secret_sauce')
      .should('have.value','secret_sauce');
      
      cy.get('#login-button').click();

      cy.url().should('includes','/inventory.html');
      cy.get('.inventory_list').should('be.visible');

    })


    it('wrong password', () => {
      cy.visit('https://www.saucedemo.com/')
      

      cy.get('#user-name')
      .should('not.be.disabled')
      .should('be.visible')

      .type('standard_user')
      .should('have.value','standard_user');
      
      cy.get('#password')
      .should('not.be.disabled')
      .should('be.visible')

      .type('wrong_password')
      .should('have.value','wrong_password');
      
      cy.get('#login-button').click();

      cy.get('.error-message-container h3')
      .should('be.visible')
      .should('contain.text', 'Username and password do not match');
    })

    it('locked_out_user', () => {
      cy.visit('https://www.saucedemo.com/')
      

      cy.get('#user-name')
      .should('not.be.disabled')
      .should('be.visible')

      .type('locked_out_user')
      .should('have.value','locked_out_user');
      
      cy.get('#password')
      .should('not.be.disabled')
      .should('be.visible')

      .type('secret_sauce')
      .should('have.value','secret_sauce');
      
      cy.get('#login-button').click();

      cy.get('.error-message-container h3')
      .should('be.visible')
      .should('contain.text', 'Sorry, this user has been locked out');
    })
  })