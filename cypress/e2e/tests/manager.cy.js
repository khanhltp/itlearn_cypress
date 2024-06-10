import LoginUI, { AddCustomer, Manager, OpenAccount } from "../pages/manager";
let login = new LoginUI();
describe('bank manager flows', () => {
    it('manager login', () => {
        login.visitURL();

        cy.checkDisplay(login.getMainHeading(), 'XYZ Bank');
        cy.checkDisplay(login.getHome(), 'Home');
        cy.checkDisplay(login.getBankManagerLogin(), 'Bank Manager Login');
        cy.checkDisplay(login.getCustomnerLogin(), 'Customer Login');

        let manager = new Manager()
        login.getBankManagerLogin().click();
        cy.checkURL('/#/manager');

        cy.checkDisplay(manager.getAddCustomer(), 'Add Customer\n\t\t');
        cy.checkDisplay(manager.getOpenAccount(), 'Open Account\n\t\t');
        cy.checkDisplay(manager.getCustomers(), 'Customers\n\t\t');
        // cy.checkDisplay(manager.getSubmit(),'Add Customer');

        manager.checkOrigionalButtonColor(manager.getAddCustomer());
        manager.checkOrigionalButtonColor(manager.getOpenAccount());
        manager.checkOrigionalButtonColor(manager.getCustomers());

        manager.getAddCustomer().click();
        cy.wait(500)
        cy.checkURL('/#/manager/addCust');

        manager.checkClickedkButtonColor(manager.getAddCustomer());
        manager.checkOrigionalButtonColor(manager.getOpenAccount());
        manager.checkOrigionalButtonColor(manager.getCustomers());

        let add_customer = new AddCustomer();
        cy.checkDisplay(add_customer.getFirstNameLabel(), 'First Name :')
        // cy.checkDisplay(add_customer.getLastNameLabel(), 'Last Name :');
        cy.checkDisplay(add_customer.getPostCodeLabel(), 'Post Code :');

        let first_name = 'It';
        let last_name = 'Learn';
        let post_code = '10000';
        cy.inputText(add_customer.getFirstNameInput(), first_name);
        cy.inputText(add_customer.getLastNameInput(), last_name);
        cy.inputText(add_customer.getPostCodeInput(), post_code);

        add_customer.getSubmit().click();

        cy.on('window:alert', (text) => {
            expect(text).to.contains('Customer added successfully with customer id :')
            let id = text.substring(46,100);
            cy.log(id)
        });
    
        // cy.on('window:alert', (text) => {
        //     alertText = text;
        //   });
      
        //   // Trigger the alert by clicking the button
        //   cy.get('#alertButton').click().then(() => {
        //     // Now you can use the alertText variable within this .then() block
        //     cy.log('Captured alert text: ' + alertText);
      
        //     // Further assertions or actions using the alert text
        //     expect(alertText).to.contains('Customer added successfully with customer id :');});

        manager.getOpenAccount().click();
        cy.wait(500)
        cy.checkURL('#/manager/openAccount');

        manager.checkOrigionalButtonColor(manager.getAddCustomer());
        manager.checkClickedkButtonColor(manager.getOpenAccount());
        manager.checkOrigionalButtonColor(manager.getCustomers());

        let open_account = new OpenAccount();
        // cy.checkDisplay(open_account.getCustomerLabel());
        // cy.checkDisplay(open_account.getCurrencyLabel());

        open_account.selectCustomer(first_name + " " + last_name);
        let currency = 'Dollar';
        open_account.selectCurrency(currency);
        open_account.getProcess().click();

        cy.on('window:alert', (text) => {
            expect(text).to.contains('Account created successfully with account Number :1')
            let account_number = text.substring(50,100);
            cy.log(account_number)
        });
        


        manager.getCustomers().click();
        cy.wait(500)
        cy.checkURL('/#/manager/list');

        manager.checkOrigionalButtonColor(manager.getAddCustomer());
        manager.checkOrigionalButtonColor(manager.getOpenAccount());
        manager.checkClickedkButtonColor(manager.getCustomers());

        // New customer is added and apprear in table
        cy.get('tbody').within(() => {
            cy.get('td').each(($td) => {
                let first_name_col = $td
                let last_name_col = first_name_col.next('td')
                let post_code_col = last_name_col.next('td')
                let account_number_col = post_code_col.next('td')
                if (first_name_col === first_name) {
                    expect(last_name_col.text()).to.equal(last_name);
                    expect(post_code_col.text()).to.equal(post_code);
                    expect(account_number_col.text()).to.equal()
                }
            })
        })
        // // Search customer
        // // Delete customer
        // cy.get('tbody').contains('tr', first_name).find('td').find('button').click();
        // cy.get('tbody').within(() => {
        //     cy.get('td').each(($td) => {
        //         expect($td.text()).not.to.equal(last_name, first_name, post_code);
        //     })
        // })

        // })

    })

})