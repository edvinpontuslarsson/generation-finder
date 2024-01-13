declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to check the content of the celebrity list.
     * @example cy.celebrityListContainsExpectedContent()
     */
    celebrityListContainsExpectedContent(): Chainable<Element>;
  }
}
