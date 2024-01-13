// invalidBirthYearInputTest  is a custom function added to the cy object
// happyPathBirthYearTest     is a custom function added to the cy object
// tryAgain                   is a custom function added to the cy object

// see the file "../support/e2eHelpers.ts" for custom functions

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
    cy.invalidBirthYearInputTest();
  });

  it('Error message if non-numerical birth year input', () => {
    cy.invalidBirthYearInputTest('non-numerical text');
  });

  // The Greatest Generation: 1901 - 1927

  it('Lower border value analysis for greatest generation, 1900 & 1901', () => {
    cy.invalidBirthYearInputTest(1900);
    cy.happyPathBirthYearTest(1901, /greatest generation/i, greatestGenerationRange);
  });

  it('Upper border value analysis for greatest generation, 1927 & 1928', () => {
    cy.happyPathBirthYearTest(1927, /greatest generation/i, greatestGenerationRange);
    cy.clickTryAgainButton();
    cy.happyPathBirthYearTest(1928, /silent generation/i, silentGenerationRange);
  });

  // Lower border value analysis is only necessary for the earliest generation
  // because the lower border value analysis of each generation is identical to
  // the upper border value analysis of its previous generation

  // The Silent Generation: 1928 - 1945

  it('Upper border value analysis for Silent Generation, 1945 & 1946', () => {
    cy.happyPathBirthYearTest(1945, /silent generation/i, silentGenerationRange);
    cy.clickTryAgainButton();
    cy.happyPathBirthYearTest(1946, /boomer/i, boomerRange);
  });

  // Baby Boomers: 1946 - 1964

  it('Upper border value analysis for Baby Boomers, 1964 & 1965', () => {
    cy.happyPathBirthYearTest(1964, /boomer/i, boomerRange);
    cy.clickTryAgainButton();
    cy.happyPathBirthYearTest(1965, /generation x/i, genXRange);
  });

  // Generation X: 1965 - 1980

  it('Upper border value analysis for Generation X, 1980 & 1981', () => {
    cy.happyPathBirthYearTest(1980, /generation x/i, genXRange);
    cy.clickTryAgainButton();
    cy.happyPathBirthYearTest(1981, /millenial/i, millenialRange);
  });

  // Millenials: 1981 - 1996

  it('Upper border value analysis for Millenials, 1996 & 1997', () => {
    cy.happyPathBirthYearTest(1996, /millenial/i, millenialRange);
    cy.clickTryAgainButton();
    cy.happyPathBirthYearTest(1997, /z/i, genZRange);
  });

  // Generation Z: 1997 - 2012

  it('Upper border value analysis for Generation Z, 2012 & 2013', () => {
    cy.happyPathBirthYearTest(2012, /z/i, genZRange);
    cy.clickTryAgainButton();
    cy.happyPathBirthYearTest(2013, /generation alpha/i, generationAlphaRange);
  });

  // Generation Alpha: 2013 - 2024

  it('Upper border value analysis for generation Alpha, 2024 & 2025', () => {
    cy.happyPathBirthYearTest(2024, /generation alpha/i, generationAlphaRange);
    cy.clickTryAgainButton();
    cy.invalidBirthYearInputTest(2025);
  });
});
