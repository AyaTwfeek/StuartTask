import PageInteractions from '../utilities/page-interactions.js';
let page = new PageInteractions();

// -- This is a parent command --
Cypress.Commands.add('dismissHomePopups', () => {
    cy.fixture('home-popups.json').then((popups) => { 
        page.clickButton(popups.selectors.refundPackageButton, 50000)
        page.clickButton(popups.selectors.testingScenariosButton, 50000)        
    })    
 })