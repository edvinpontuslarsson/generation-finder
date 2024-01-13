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

    happyPathBirthYearTest(1901, /greatest generation/i);
  });

  it('Upper border value analysis for greatest generation, 1927 & 1928', () => {
    happyPathBirthYearTest(1927, /greatest generation/i);
    cy.get('#found-generation-try-again-button').click();
    happyPathBirthYearTest(1928, /silent generation/i);
  });

  // Lower border value analysis is only necessary for the earliest generation
  // because the lower border value analysis of each generation is identical to
  // the upper border value analysis of its previous generation

  // The Silent Generation: 1928 - 1945

  it('Upper border value analysis for Silent Generation, 1945 & 1946', () => {
    happyPathBirthYearTest(1945, /silent generation/i);
    cy.get('#found-generation-try-again-button').click();
    happyPathBirthYearTest(1946, /boomer/i);
  });

  // Baby Boomers: 1946 - 1964

  it('Upper border value analysis for Baby Boomers, 1964 & 1965', () => {
    happyPathBirthYearTest(1964, /boomer/i);
    cy.get('#found-generation-try-again-button').click();
    happyPathBirthYearTest(1965, /generation x/i);
  });

  // Generation X: 1965 - 1980

  it('Upper border value analysis for Generation X, 1980 & 1981', () => {
    happyPathBirthYearTest(1980, /generation x/i);
    cy.get('#found-generation-try-again-button').click();
    happyPathBirthYearTest(1981, /millenial/i);
  });

  // Millenials: 1981 - 1996

  it('Upper border value analysis for Millenials, 1996 & 1997', () => {
    happyPathBirthYearTest(1996, /millenial/i);
    cy.get('#found-generation-try-again-button').click();
    happyPathBirthYearTest(1997, /z/i);
  });

  // Generation Z: 1997 - 2012

  it('Upper border value analysis for Generation Z, 2012 & 2013', () => {
    happyPathBirthYearTest(2012, /z/i);
    cy.get('#found-generation-try-again-button').click();
    happyPathBirthYearTest(2013, /generation alpha/i);
  });

  // Generation Alpha: 2013 - 2024

  it('Upper border value analysis for generation Alpha, 2024 & 2025', () => {
    happyPathBirthYearTest(2024, /generation alpha/i);

    cy.get('#found-generation-try-again-button').click();

    cy.get('#birth-year-input').clear().type('2025');
    cy.get('#generation-finder-find-out-button').click();
    cy.get('#birth-year-error-label').should('exist');
  });
});

function happyPathBirthYearTest(
  birthYear: string | number,
  expectedGeneration: RegExp
) {
  cy.get('#birth-year-input').clear().type(`${birthYear}`);
  cy.get('#generation-finder-find-out-button').click();

  cy.get('#birth-year-error-label').should('not.exist');

  cy.get('#found-generation-heading').contains(expectedGeneration);

  // a custom function added to ../support/commands.ts
  cy.celebrityListContainsExpectedContent();
}
