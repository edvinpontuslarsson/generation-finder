// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('celebrityListContainsExpectedContent', () => {
    cy.get('#celebrity-list')
    .children()
    .should('have.length.at.least', 1)

    // each child element should contain expected content
    .each((element) => {
      cy.wrap(element).find('img').should('exist');

      cy.wrap(element).find('a').should('not.be.empty');

      cy.wrap(element)
        .find('div[id^="celebrity-birth-year-"]')
        .contains(/born in/i)
        .should('exist');
    });
});
