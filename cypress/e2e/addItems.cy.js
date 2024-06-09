describe('template spec', () => {
    before('Login và verify login success', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.wait(700000)

        cy.get('#user-name')
            .should('not.be.disabled')
            .should('be.visible')

            .type('standard_user')
            .should('have.value', 'standard_user');

        cy.get('#password')
            .should('not.be.disabled')
            .should('be.visible')

            .type('secret_sauce')
            .should('have.value', 'secret_sauce');

        cy.get('#login-button').click();

        cy.url().should('includes', '/inventory.html');
        cy.get('.inventory_list').should('be.visible');
    })
    it('Add item', () => {
        cy.get('.inventory_item_price').each(($div) => {
            if($div.text().includes('15.99')) {
                let button = $div.next('button');
                button.text().should('have.text','Add to cart')
                .click()
                .should('have.text','Remove')
            }
        })    
    })
    it('Check cart', () => {
        cy.get('a[data-test="shopping-cart-link"]').click();
        
    })
})
