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

Cypress.Commands.add(
  'invalidBirthYearInputTest',
  (invalidInput?: number | string) => {
    cy.get('#birth-year-error-label').should('not.exist');

    if (invalidInput) {
      cy.get('#birth-year-input').clear().type(`${invalidInput}`);
    }

    cy.get('#generation-finder-find-out-button').click();

    cy.get('#birth-year-error-label').should('exist');
  }
);

Cypress.Commands.add(
  'happyPathBirthYearTest',
  (birthYear: number, expectedGeneration: RegExp) => {
    cy.get('#birth-year-input').clear().type(`${birthYear}`);
    cy.get('#generation-finder-find-out-button').click();

    cy.get('#birth-year-error-label').should('not.exist');

    cy.get('#found-generation-heading').contains(expectedGeneration);

    // TODO also test born between string

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
  }
);
