describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://demoqa.com/text-box')
  cy.wait(3000);
      cy.get('#userName').type('student');
      cy.get('#userEmail').type('useremail@gmail.com');
      cy.get('#currentAddress').type('Hà Nội');
      cy.get('#permanentAddress').type('Hà Nội');
      cy.get('#submit').click();
  
    })
  })