const url = 'https://www.saucedemo.com/';
const username = '#user-name';
const password = '#password';
const button = '#login-button';

export default class LoginUI {
    get visitURL() {
        return cy.visit(url);
    }
    get getUsername() {
        return cy.get(username);
    }
    get getPassword() {
        return cy.get(password)
    }
    get getButton() {
        return cy.get(button);
    }
}