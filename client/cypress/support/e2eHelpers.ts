/**
 * Asserts that:
 * The error label is not initially present.
 * The error label should exist after this invalid input.
 */
export function invalidBirthYearInputTest(invalidInput?: number | string) {
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
export function happyPathBirthYearTest(
  birthYear: number,
  expectedGeneration: RegExp,
  generationRange: { minYear: number; maxYear: number }
) {
  cy.get('#birth-year-input').clear().type(`${birthYear}`);
  cy.get('#generation-finder-find-out-button').click();

  cy.get('#birth-year-error-label').should('not.exist');

  cy.get('#found-generation-heading').contains(expectedGeneration);

  cy.get('#found-generation-description').contains(
    `${generationRange.minYear}`
  );
  cy.get('#found-generation-description').contains(
    `${generationRange.maxYear}`
  );

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

export function clickTryAgainButton() {
  cy.get('#found-generation-try-again-button').click();
}
