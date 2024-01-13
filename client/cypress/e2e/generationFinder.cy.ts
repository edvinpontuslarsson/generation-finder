describe('Tests of the generation finder', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Error message if empty birth year', () => {
    cy.get('#birth-year-error-label').should('not.exist');
    cy.get('#generation-finder-find-out-button').click();
    cy.get('#birth-year-error-label').should('exist');
  });

  // The Greatest Generation: 1901 - 1927

  it('Lower border value analysis for greatest generation, 1900 & 1901', () => {
    cy.get('#birth-year-input').clear().type('1900');
    cy.get('#generation-finder-find-out-button').click();
    cy.get('#birth-year-error-label').should('exist');

    cy.get('#birth-year-input').clear().type('1901');
    cy.get('#generation-finder-find-out-button').click();
    cy.get('#birth-year-error-label').should('not.exist');

    cy.get('#found-generation-heading').contains(/greatest generation/i);

    cy.celebrityListContainsExpectedContent();
  });

  it('Upper border value analysis for greatest generation, 1927 & 1928', () => {
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

  // Lower border value analysis is only necessary for the earliest generation
  // because the lower border value analysis of each generation is identical to
  // the upper border value analysis of its previous generation

  // The Silent Generation: 1928 - 1945

  it('Upper border value analysis for Silent Generation, 1945 & 1946', () => {
    cy.get('#birth-year-input').clear().type('1945');
    cy.get('#generation-finder-find-out-button').click();

    cy.get('#found-generation-heading').contains(/silent generation/i);
    cy.celebrityListContainsExpectedContent();

    cy.get('#found-generation-try-again-button').click();

    cy.get('#birth-year-input').clear().type('1946');
    cy.get('#generation-finder-find-out-button').click();

    cy.get('#found-generation-heading').contains(/boomer/i);
    cy.celebrityListContainsExpectedContent();
  });

  // Baby Boomers: 1946 - 1964

  it('Upper border value analysis for Baby Boomers, 1964 & 1965', () => {
    cy.get('#birth-year-input').clear().type('1964');
    cy.get('#generation-finder-find-out-button').click();

    cy.get('#found-generation-heading').contains(/boomer/i);
    cy.celebrityListContainsExpectedContent();

    cy.get('#found-generation-try-again-button').click();

    cy.get('#birth-year-input').clear().type('1965');
    cy.get('#generation-finder-find-out-button').click();

    cy.get('#found-generation-heading').contains(/generation x/i);
    cy.celebrityListContainsExpectedContent();
  });

  // Generation X: 1965 - 1980

  it('Upper border value analysis for Generation X, 1980 & 1981', () => {
    cy.get('#birth-year-input').clear().type('1980');
    cy.get('#generation-finder-find-out-button').click();

    cy.get('#found-generation-heading').contains(/generation x/i);
    cy.celebrityListContainsExpectedContent();

    cy.get('#found-generation-try-again-button').click();

    cy.get('#birth-year-input').clear().type('1981');
    cy.get('#generation-finder-find-out-button').click();

    cy.get('#found-generation-heading').contains(/millenial/i);
    cy.celebrityListContainsExpectedContent();
  });

  // Millenials: 1981 - 1996

  it('Upper border value analysis for Millenials, 1996 & 1997', () => {
    cy.get('#birth-year-input').clear().type('1996');
    cy.get('#generation-finder-find-out-button').click();

    cy.get('#found-generation-heading').contains(/millenial/i);
    cy.celebrityListContainsExpectedContent();

    cy.get('#found-generation-try-again-button').click();

    cy.get('#birth-year-input').clear().type('1997');
    cy.get('#generation-finder-find-out-button').click();

    cy.get('#found-generation-heading').contains(/z/i);
    cy.celebrityListContainsExpectedContent();
  });

  // Generation Z: 1997 - 2012

  it('Upper border value analysis for Generation Z, 2012 & 2013', () => {
    cy.get('#birth-year-input').clear().type('2012');
    cy.get('#generation-finder-find-out-button').click();

    cy.get('#found-generation-heading').contains(/z/i);
    cy.celebrityListContainsExpectedContent();

    cy.get('#found-generation-try-again-button').click();

    cy.get('#birth-year-input').clear().type('2013');
    cy.get('#generation-finder-find-out-button').click();

    cy.get('#found-generation-heading').contains(/generation alpha/i);
    cy.celebrityListContainsExpectedContent();
  });

  // Generation Alpha: 2013 - 2024

  it('Upper border value analysis for generation Alpha, 2024 & 2025', () => {
    cy.get('#birth-year-input').clear().type('2025');
    cy.get('#generation-finder-find-out-button').click();
    cy.get('#birth-year-error-label').should('exist');

    cy.get('#birth-year-input').clear().type('2024');
    cy.get('#generation-finder-find-out-button').click();
    cy.get('#birth-year-error-label').should('not.exist');

    cy.get('#found-generation-heading').contains(/generation alpha/i);

    cy.celebrityListContainsExpectedContent();
  });
});
