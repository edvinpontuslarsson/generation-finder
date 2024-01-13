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

  // border value analysis greatest generation, err msg first
  it('Lower border analysis for greatest generation, 1900 & 1901', () => {
    cy.get('#birth-year-error-label').should('not.exist');

    cy.get('#birth-year-input').clear().type('1900');
    cy.get('#generation-finder-find-out-button').click();
    cy.get('#birth-year-error-label').should('exist');
  });

  // TODO 1
  // for upper border value analysis, start with too high

  // TODO 2 maybe I can have reusable assertion for ensuring display is correct
});
