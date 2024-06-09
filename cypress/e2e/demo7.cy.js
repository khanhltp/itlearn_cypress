describe('mouse react', () => {
     beforeEach(() => {
        cy.visit('https://mingo.vn/#');
    })
    it('Hover - Change color', () => {
        // cy.visit('https://mingo.vn/#');
        cy.get('#hover-box')
        // .should('have.style', 'background-color: lightblue')
        .trigger('mouseover')
        .wait(5000)
        .should('have.class', 'hover-box hovered')
        // .should('have.style', 'background-color: lightcoral')
       
        .trigger('mouseout')
        .should('have.class', 'hover-box')
    })
    it('Hover - Display tooltip', () => {
        cy.get('.tooltip')
        .realHover()
        .wait(5000)
        cy.get('#tooltip-text').should('have.text','Tooltip text')
    })
    it('Scroll to bottom', () => {
        cy.get('#scroll-container').scrollTo('bottom');
        cy.wait(5000);
        cy.get('#scroll-container').should(($el) => {
            expect($el[0].scrollTop).to.equal($el[0].scrollHeight - $el[0].clientHeight);
        });
    });
})
     

// describe('mouse react', () => {
// //     beforeEach(() => {
// //        cy.visit('https://demoqa.com/droppable');
// //    })
//    it('Drag drop', () => {
//        // cy.visit('https://mingo.vn/#');
//        cy.visit('https://demoqa.com/droppable');
//        cy.wait(6000);
//        cy.get('#draggable').as('source');
//        cy.xpath('#droppable').as('target');
//        cy.get('@source').trigger('mousedown', { which: 1});
//        cy.get('@target').trigger('mousemove', { clientX: 100, clientY: 0}).trigger('mouseup', { force: true });
//    })
// })