describe('Table', () => {
    it('Kiểm tra theo index', () => {
        cy.visit('https://mingo.vn/#')
        let mail = 'hang.mp@example.com'
        let haveMail = false;
        cy.get('table[id="dataTable"]').within(() => {
            cy.get('tbody td:nth-child(3)').each(($td) => {
                let i = $st;
                console.log(i)
                let output = $td.text()
                if (output === mail) {
                    haveMail = true;
                    expect(output).to.equal(mail);
                }
            })
        })
    })
    it('Tìm kiếm từ khóa Hằng và kiểm tra', () => {
        cy.visit('https://mingo.vn/#')
        let word = 'Hằng'
        cy.get('input[placeholder="Search"]')
            .type(word)


        // #tableBody tr:visible nghĩa là chỉ lấy những tr đang visible (ko display)
        cy.get('#tableBody tr:visible').should('have.length', 1)
            .and('contain', word);


    })

    it('Tìm ra Hằng và click vào button', () => {
        cy.visit('https://mingo.vn/#')

        cy.get('#tableBody').contains('tr', 'hang')
            .find('button[class="click-btn"]')
            .click();
    })

    it('Trong Normal list có Apple', () => {
        cy.visit('https://mingo.vn/#')
        cy.get('ul[class="list-group"] li').each(($li) => {
            let list_item_text = $li.text();
            if (list_item_text === 'Apple') {
                expect(list_item_text).to.equal('Apple');
            }
        })
    })

    it('Click vào service trong menu list', () => {
        cy.visit('https://mingo.vn/#')
        cy.get('.nav-item.dropdown')
            .contains('Services')
            .should('exist')
            .click()

        cy.get('.dropdown-menu')
            .contains('Web Design')
            .should('exist')
            .click()
    })

    // list các button có chung class tab link - tìm paris - click paris (contain text paris)
    // ktra paris có visible không, ktra nội dung text hiển thị 

    it('Kiểm tra tab link', () => {
        cy.visit('https://mingo.vn/#')
        cy.get('button[class="tablinks"]')
            .contains('Paris')
            .should('be.visible')
            .click()
    })

    it('Tìm pizza hot và log ra nguyên liệu', () => {
        cy.visit('https://www.w3schools.com/w3css/tryw3css_templates_pizza.htm')
        cy.get('#Pizza h1').each(($h1) => {
            if ($h1.text().includes('Hot!')) {
                let hot = $h1.next('p').text();
                cy.log(hot);
            }
        });
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
            }
        })
    })
})

