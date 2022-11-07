import PageInteractions from '../utilities/page-interactions.js';
let page = new PageInteractions();

// -- This is a parent command --
Cypress.Commands.add('login', function(email, password) {
    cy.visit('/log-in');    
    cy.fixture('login.json').as('login');
    page.writeText(this.login.selectors.email, email);
    page.writeText(this.login.selectors.password, password);
    page.clickButton(this.login.selectors.loginButton);
 })