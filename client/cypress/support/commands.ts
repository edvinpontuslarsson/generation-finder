/**
 * Asserts that:
 * The error label is not initially present.
 * The error label should exist after this invalid input.
 */
function invalidBirthYearInputTest(invalidInput?: number | string) {
  cy.get('#birth-year-error-label').should('not.exist');

  if (invalidInput) {
    cy.get('#birth-year-input').clear().type(`${invalidInput}`);
  }

  cy.get('#generation-finder-find-out-button').click();

  cy.get('#birth-year-error-label').should('exist');
}

/**
 * Asserts that:
 * Birth year form exists and work as expected.
 * The error label is not present.
 * The correct generation is displayed after birth year submission.
 * Celebrity list exists and contains expected child elements.
 */
function happyPathBirthYearTest(birthYear: number, expectedGeneration: RegExp) {
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

function clickTryAgainButton() {
  cy.get('#found-generation-try-again-button').click();
}

Cypress.Commands.add('invalidBirthYearInputTest', invalidBirthYearInputTest);
Cypress.Commands.add('happyPathBirthYearTest', happyPathBirthYearTest);
Cypress.Commands.add('clickTryAgainButton', clickTryAgainButton);
