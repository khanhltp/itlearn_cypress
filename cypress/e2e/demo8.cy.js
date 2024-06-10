describe('mouse react', () => {
    // beforeEach(() => {
    //     cy.visit('https://mingo.vn/#');
    // })
    // it('Check modal', () => {
    //     cy.visit('https://mingo.vn/#');
    //     cy.get('#myModal').should('not.be.visible');
    //     cy.get('#myBtn').click();
    //     cy.get('#myModal').should('be.visible');
    //     cy.get('#myModal').within(() => {
    //         cy.get('p').should('contain', 'Some text in the Modal..');
    //         cy.get('#modalButton').click();
    //         cy.get('.close').click();            
    //     })
    //     cy.get('#myModal').should('not.be.visible');
    // });
    // // Cách 1: Tương tác vs iframe bằng source gốc
    // it('Tương tác vs iframe bằng source gốc', () => {
    // cy.visit('https://my.bizdev.vn/embed/login?type_view=&is_login=0');
    // let username = 'techtest.rd2@gmail.com';
    // let password = 'A123456!';
    // cy.get('input[placeholder="Nhập Email hoặc SĐT tài khoản VietID của bạn"]').type(username);
    // cy.get('button[class="btn btn-block btn-blue font-Sarabun-Bold font16 btn-next-icon"]').click();
    // cy.get('input[placeholder="Nhập mật khẩu của bạn"]').type(password);
    // cy.get('button[class="btn btn-block btn-blue font-Sarabun-Bold font16 btn-enter-pass"]').click();
    // cy.wait(3000);
    // cy.visit('https://my.bizdev.vn/');
    // cy.wait(3000)
    // })
    // it('Tương tác vs iframe dùng JS', () => {
    //     cy.visit('https://my.bizdev.vn/login');
    //     let username = 'techtest.rd2@gmail.com';
    //     let password = 'A123456!';
    // cy.wait(3000)
    // cy.get('#embed_login').should('be.visible')
    // cy.get('#embed_login').then(($iframe) => {
    //     let iframeDoc = $iframe.contents().find('body');
    //     cy.log(iframeDoc);

    //     cy.wrap(iframeDoc).find('input[placeholder="Nhập Email hoặc SĐT tài khoản VietID của bạn"]').type(username);

    //     cy.wrap(iframeDoc).find('button[class="btn btn-block btn-blue font-Sarabun-Bold font16 btn-next-icon"]').click();
    //     cy.wrap(iframeDoc).find('input[placeholder="Nhập mật khẩu của bạn"]').click();

    // cy.get('#embed_login').then(($iframe) => {
    //     cy.log($iframe.contents())
    //     cy.wait(3000)
    //     const iframeDoc = $iframe.contents().find('body');
    //     cy.log(iframeDoc)
    //     cy.wrap(iframeDoc).find('input[placeholder="Nhập Email hoặc SĐT tài khoản VietID của bạn"]').type(username);

    // })

    it('Tương tác vs iframe dùng thư viện ngoài', () => {
        cy.visit('https://my.bizdev.vn/login');
        let username = 'techtest.rd2@gmail.com';
        let password = 'A123456!';
        cy.wait(3000)
        cy.get('#embed_login').should('be.visible')
        cy.get('#embed_login').then(($iframe) => {
            let iframeDoc = $iframe.contents().find('body');
            cy.log(iframeDoc);

            cy.wrap(iframeDoc).find('input[placeholder="Nhập Email hoặc SĐT tài khoản VietID của bạn"]').type(username);

            cy.wrap(iframeDoc).find('button[class="btn btn-block btn-blue font-Sarabun-Bold font16 btn-next-icon"]').click();
            cy.wrap(iframeDoc).find('input[placeholder="Nhập mật khẩu của bạn"]').click();
        })

    it('Tương tác vs iframe dùng thư viện ngoài', () => {
        cy.visit('https://my.bizdev.vn/login');
        let username = 'techtest.rd2@gmail.com';
        let password = 'A123456!';
        
        cy.frameLoaded('#embed_login')
        cy.iframe('#embed_login').within(() => {
            cy.get('input[placeholder="Nhập Email hoặc SĐT tài khoản VietID của bạn"]').type(username);
            cy.get('button[class="btn btn-block btn-blue font-Sarabun-Bold font16 btn-next-icon"]').click();
            cy.get('input[placeholder="Nhập mật khẩu của bạn"]').type(password);
            cy.get('button[class="btn btn-block btn-blue font-Sarabun-Bold font16 btn-enter-pass"]').click();
            cy.wait(3000);
            cy.visit('https://my.bizdev.vn/');
            cy.wait(3000) 
        })

    })
    it('Check pop-up', () => {
        cy.visit('https://mingo.vn/#');
        let url = 'https://mingo.vn/'
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url;
            })
        })
        cy.get('#popupLink').click();
        cy.url().should('include', 'mingo.vn');
        cy.get('#myBtn').should('be.visible')

    });
})



})
