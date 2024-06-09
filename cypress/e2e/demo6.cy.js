// const { afterEach } = require("mocha");

describe('Table', () => {
    before(() => {
        cy.log('Start')
    })

    beforeEach(() => {
        cy.visit('https://mingo.vn/#');
    })

    after(() => {
        cy.log('end')
    })
    afterEach(() => {
        cy.log('after each')
    })
    it('Check 1 click', () => {

        cy.get('#clickButton').click();
        cy.get('#message').should('have.text', 'Button clicked!');
    })

    it('Check dbclick', () => {
        cy.get('#dblClickButton').dblclick();
        cy.get('#message').should('have.text', 'Button double-clicked!');
    })

    it('Check right click', () => {
        cy.get('#rightClickButton').rightclick();
        cy.get('#message').should('have.text', 'Right button clicked!');
    })

    it('Check focus button', () => {
        cy.get('#rightClickButton').focus()
        .should('be.focused');
    })
    it('Check blur button', () => {
        cy.get('#rightClickButton').focus().blur()
        .should('not.be.focused');
    })

    it('Check alert message', () => {
        cy.get('#alertButton').click()
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('This is an alert message!')
            return true;
        });
        cy.get('#alertButton').click();
    })

    it('Check alert confirm', () => {
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Do you confirm this action?');
            return true;
        });
        cy.get('#confirmButton').click();
        cy.get('#confirmResult').should('have.text', 'Confirm result: true')
    })

    it('Check alert cancel', () => {
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Do you confirm this action?');
            return false;
        });
        cy.get('#confirmButton').click();
        cy.get('#confirmResult').should('have.text', 'Confirm result: false')
    })

    it('Check prompt: OK', () => {
        let text = 'abc'
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(text);
        });
        cy.get('#promptButton').click();
        cy.get('#promptResult').should('have.text', 'Prompt result: ' + text)
    })

    it('Check prompt: cancel', () => {
        let text = false
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(false)
        });
        cy.get('#promptButton').click();
        cy.get('#promptResult').should('have.text', 'Prompt result: ' + text)
    })

    it('Check viewport and screenshot', () => {
        cy.viewport(1200, 720);
        // cy.screenshot('large-screen');

        cy.viewport('iphone-6');
        // cy.screenshot('iphone-6');
    })

    it('Change attribute', () => {
        cy.get('#text-change-class')
            .invoke('attr', 'style', 'color: yellow')
            .should('have.attr', 'style', 'color: yellow')
    })

    it('Add attribute', () => {
        cy.get('#text-change-class')
            .invoke('addClass', 'style-text')
            .should('have.class', 'style-text')
        cy.wait(5000);
    })

    it('Remove attribute', () => {
        cy.get('#text-change-class')
            .invoke('addClass', 'style-text')
            .should('have.class', 'style-text')
    })

    it('Toggle class', () => {
        cy.get('#some-text')
        .invoke('toggleClass', 'style-text')
        .should('not.have.class', 'style-text');

        cy.get('#some-text')
        .invoke('toggleClass', 'style-text')
        .should('have.class', 'style-text');
    })

    it('Log thông tin món ăn "Popular" trong mục salad', () => {
        cy.visit('https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm')
        cy.get('a[href="javascript:void(0)"]')
            .contains('Salad')
            .click()
        cy.get('#Pasta h1').each(($h1) => {
            if ($h1.text().includes('Popular')) {
                let popular = $h1.next('p').text();
                cy.log(popular)
                cy.log($h1.length)
            }
        })
    })    
})


