import {
  invalidBirthYearInputTest,
  happyPathBirthYearTest,
  clickTryAgainButton,
} from '../support/e2eHelpers';

const greatestGenerationRange = {
  minYear: 1901,
  maxYear: 1927,
};
const silentGenerationRange = {
  minYear: 1928,
  maxYear: 1945,
};
const boomerRange = {
  minYear: 1946,
  maxYear: 1964,
};
const genXRange = {
  minYear: 1965,
  maxYear: 1980,
};
const millenialRange = {
  minYear: 1981,
  maxYear: 1996,
};
const genZRange = {
  minYear: 1997,
  maxYear: 2012,
};
const generationAlphaRange = {
  minYear: 2013,
  maxYear: 2024,
};

describe('Tests of the generation finder', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Error message if empty birth year', () => {
    invalidBirthYearInputTest();
  });

  it('Error message if non-numerical birth year input', () => {
    invalidBirthYearInputTest('non-numerical text');
  });

  it('Error message if non-numerical birth year input', () => {
    cy.get('#birth-year-error-label').should('not.exist');

    cy.get('#birth-year-input').clear().type('non-numerical text');
    cy.get('#generation-finder-find-out-button').click();
    cy.get('#birth-year-error-label').should('exist');
  });

  // The Greatest Generation: 1901 - 1927

  it('Lower border value analysis for greatest generation, 1900 & 1901', () => {
    invalidBirthYearInputTest(1900);
    happyPathBirthYearTest(
      1901,
      /greatest generation/i,
      greatestGenerationRange
    );
  });

  it('Upper border value analysis for greatest generation, 1927 & 1928', () => {
    happyPathBirthYearTest(
      1927,
      /greatest generation/i,
      greatestGenerationRange
    );
    clickTryAgainButton();
    happyPathBirthYearTest(
      1928,
      /silent generation/i,
      silentGenerationRange
    );
  });

  // Lower border value analysis is only necessary for the earliest generation
  // because the lower border value analysis of each generation is identical to
  // the upper border value analysis of its previous generation

  // The Silent Generation: 1928 - 1945

  it('Upper border value analysis for Silent Generation, 1945 & 1946', () => {
    happyPathBirthYearTest(
      1945,
      /silent generation/i,
      silentGenerationRange
    );
    clickTryAgainButton();
    happyPathBirthYearTest(1946, /boomer/i, boomerRange);
  });

  // Baby Boomers: 1946 - 1964

  it('Upper border value analysis for Baby Boomers, 1964 & 1965', () => {
    happyPathBirthYearTest(1964, /boomer/i, boomerRange);
    clickTryAgainButton();
    happyPathBirthYearTest(1965, /generation x/i, genXRange);
  });

  // Generation X: 1965 - 1980

  it('Upper border value analysis for Generation X, 1980 & 1981', () => {
    happyPathBirthYearTest(1980, /generation x/i, genXRange);
    clickTryAgainButton();
    happyPathBirthYearTest(1981, /millenial/i, millenialRange);
  });

  // Millenials: 1981 - 1996

  it('Upper border value analysis for Millenials, 1996 & 1997', () => {
    happyPathBirthYearTest(1996, /millenial/i, millenialRange);
    clickTryAgainButton();
    happyPathBirthYearTest(1997, /z/i, genZRange);
  });

  // Generation Z: 1997 - 2012

  it('Upper border value analysis for Generation Z, 2012 & 2013', () => {
    happyPathBirthYearTest(2012, /z/i, genZRange);
    clickTryAgainButton();
    happyPathBirthYearTest(2013, /generation alpha/i, generationAlphaRange);
  });

  // Generation Alpha: 2013 - 2024

  it('Upper border value analysis for generation Alpha, 2024 & 2025', () => {
    happyPathBirthYearTest(2024, /generation alpha/i, generationAlphaRange);
    clickTryAgainButton();
    invalidBirthYearInputTest(2025);
  });

  it('Lower border analysis for greatest generation, 1900 & 1901', () => {
    cy.get('#birth-year-input').clear().type('1900');
    cy.get('#generation-finder-find-out-button').click();
    cy.get('#birth-year-error-label').should('exist');

    cy.get('#birth-year-input').clear().type('1901');
    cy.get('#generation-finder-find-out-button').click();
    cy.get('#birth-year-error-label').should('not.exist');

    cy.get('#found-generation-heading').contains(/greatest generation/i);

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
