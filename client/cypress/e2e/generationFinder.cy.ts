describe('Tests of the generation finder', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Expected title exists', () => {
    cy.get('#generation-finder-top-heading').contains(/generation finder/i);
  });

  it('Error message if empty birth year', () => {
    cy.get('#birth-year-error-label').should('not.exist');
    cy.get('#generation-finder-find-out-button').click();
    cy.get('#birth-year-error-label').should('exist');
  });

  it('Lower border analysis for greatest generation, 1900 & 1901', () => {
    cy.get('#birth-year-input').clear().type('1900');
    cy.get('#generation-finder-find-out-button').click();
    cy.get('#birth-year-error-label').should('exist');

    cy.get('#birth-year-input').clear().type('1901');
    cy.get('#generation-finder-find-out-button').click();
    cy.get('#birth-year-error-label').should('not.exist');

    cy.get('#found-generation-heading').contains(/greatest generation/i);

    cy.celebrityListContainsExpectedContent();
  });

  it('Upper border analysis for greatest generation, 1927 & 1928', () => {
    cy.get('#birth-year-input').clear().type('1927');
    cy.get('#generation-finder-find-out-button').click();

    cy.get('#found-generation-heading').contains(/greatest generation/i);
    cy.celebrityListContainsExpectedContent();

    cy.get('#found-generation-try-again-button').click();

    cy.get('#birth-year-input').clear().type('1928');
    cy.get('#generation-finder-find-out-button').click();

    cy.get('#found-generation-heading').contains(/silent generation/i);
    cy.celebrityListContainsExpectedContent();
  });

  // TODO do for generation alpha now also, special also
});
