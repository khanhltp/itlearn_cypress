let url = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login';
let main_heading = '.mainHeading';
let customer_login = 'button[ng-click="customer()"]';
let bank_manager_login = 'button[ng-click="manager()"]';
let home = 'button[ng-click="home()"]';

export default class LoginUI {
    visitURL() {
        console.log(url)
        return cy.visit(url);
    }
    getMainHeading() {
        return cy.get(main_heading);
    }
    getCustomnerLogin() {
        return cy.get(customer_login);
    }
    getBankManagerLogin() {
        return cy.get(bank_manager_login);
    }
    getHome() {
        return cy.get(home);
    }
}
let add_customer = 'button[ng-click="addCust()"]';
let open_account = 'button[ng-click="openAccount()"]';
let customers = 'button[ng-click="showCust()"]';

export class Manager {
    getAddCustomer() {
        return cy.get(add_customer);
    }
    getOpenAccount() {
        return cy.get(open_account);
    }
    getCustomers() {
        return cy.get(customers);
    }
    checkOrigionalButtonColor(button) {
        cy.checkColor(button,'rgb(51, 51, 51)', 'rgb(240, 240, 240)','rgba(0, 0, 0, 0)');
    }
    checkClickedkButtonColor(button) {
        cy.checkColor(button,'rgb(255, 255, 255)', 'rgb(40, 96, 144)', 'rgb(18, 43, 64)');
    }
}

let first_name_label = 'div[class="marTop"] div:nth-child(1) label:nth-child(1)';
let first_name_input = 'input[placeholder="First Name"]';

let last_name_label = 'label[xpath="1"]';
let last_name_input = 'input[placeholder="Last Name"]';

let post_code_label = 'div:nth-child(3) label:nth-child(1)';
let post_code_input = 'input[placeholder="Post Code"]';

let submit = 'button[type="submit"]';

export class AddCustomer {
    getFirstNameLabel() {
        return cy.get(first_name_label);
    }
    getFirstNameInput() {
        return cy.get(first_name_input);
    }
    getLastNameLabel() {
        return cy.get(last_name_label);
    }
    getLastNameInput() {
        return cy.get(last_name_input);
    }
    getPostCodeLabel() {
        return cy.get(post_code_label);
    }
    getPostCodeInput() {
        return cy.get(post_code_input);
    }
    getSubmit() {
        return cy.get(submit);
    }
}
let customer_label = document.querySelector(`div[class="marTop"] div:nth-child(1) label:nth-child(1)`);
let customer_list = '#userSelect';
let currency_label = 'label[xpath="//label[normalize-space()="Currency :"]"';
let currency_list = '#currency';
let process = 'button[type="submit"]';
export class OpenAccount {
    // getCustomerLabel() {
    //     return cy.get(customer_label);
    // }
    // getCurrencyLabel() {
    //     return cy.get(currency_label);
    // }
    selectCustomer(value) {
        cy.get(customer_list).select(value)
    }
    selectCurrency(value) {
        cy.get(currency_list).select(value)
    }
    getProcess() {
        return cy.get(process);
    }
}
let search = 'input[placeholder="Search Customer"]'
export class Customers {
    getSearch() {
        return cy.get(search);
    }
}
