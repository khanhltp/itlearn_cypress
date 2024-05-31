// describe('template spec', () => {
//     it('passes', () => {
//       cy.visit('https://www.saucedemo.com/')

//       cy.xpath('//input[@id="user-name"]')
//       .should('not.be.disabled')
//       .should('be.visible')

//       .type('standard_user')
//       .should('have.value','standard_user');

//       cy.xpath('//input[@id="password"]')
//       .should('not.be.disabled')
//       .should('be.visible')

//       .type('secret_sauce')
//       .should('have.value','secret_sauce');
      
//       cy.xpath('//input[@id="login-button"]').click();

//       cy.url().should('includes','/inventory.html');
//       cy.xpath('//div[@data-test="inventory-list"]');
      
//     })
//   })

describe('template spec', () => {
    it('Submit thành công', () => {
    
    let username = "user_name";
    let password = "pass_word";
    let comment = "check comment"

      cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html')

    //   Kiểm tra các phần tử có hiển thị trong trang web không

    // Bắt đầu viết script:

      cy.xpath('//input[@name="username"]')
      .should('be.visible')
      .type(username)
      .invoke('val', username);

      cy.xpath('//input[@name="password"]')
      .type(password)
      .invoke('val', password);

    //   Clear trước khi nhập
      cy.xpath('//textarea[@name="comments"]').clear().type(comment);

      cy.xpath('//input[@name="filename"]')
      .selectFile('c:/Users/Phuong Khanh/Downloads/BML_Real-1.pdf');

      cy.xpath('//input[@value="cb1"]').check();
      cy.xpath('//input[@value="cb2"]').check();
      cy.xpath('//input[@value="cb3"]').uncheck();

      cy.get('input[value="rd2"]').check();
      cy.get('input[value="rd3"]').check();
      cy.get('input[value="rd1"]').check();
      cy.get('input[value="rd2"]').should('not.be.checked');
      cy.get('input[value="rd3"]').should('not.be.checked');


      cy.get('select[name="multipleselect[]"]').select('ms2');
      cy.get('select[name="multipleselect[]"]').select('ms3');
      cy.get('select[name="multipleselect[]"]').select('ms4');
      cy.get('select[name="multipleselect[]"]').select('ms1');

      cy.get('select[name="dropdown"]').select('dd2');
      cy.get('select[name="dropdown"]').select('dd3');
      cy.get('select[name="dropdown"]').select('dd4');

      cy.get('select[name="dropdown"]').select('dd1');

      cy.get('input[type="submit"]').click();

      cy.url().should('includes','styled/the_form_processor.php');
      cy.get('li[id="_valueusername"]').should('contain.text', username);
      cy.get('li[id="_valuepassword"]').should('contain.text', password);
      cy.get('li[id="_valuecomments"]').should('contain.text', comment);
      cy.get('li[id="_valuefilename"]').should('contain.text', 'BML_Real-1.pdf');

      cy.get('li[id="_valuecheckboxes0"]').should('contain.text','cb1');
      cy.get('li[id="_valuecheckboxes1"]').should('contain.text','cb2');
      cy.get('li[id="_valuecheckboxes1"]').should('not.contain.text','cb3');
      
      cy.get('li[id="_valueradioval"]').should('contain.text','rd1');
      cy.get('li[id="_valuemultipleselect0"]').should('contain.text','ms1');
      cy.get('li[id="_valuedropdown"]').should('contain.text','dd1');
      cy.get('li[id="_valuesubmitbutton"]').should('contain.text','submit');



    })
  })