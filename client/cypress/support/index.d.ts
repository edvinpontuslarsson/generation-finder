declare namespace Cypress {
  interface Chainable {
    /**
     * Asserts that:
     * Birth year form exists and work as expected.
     * The error label is not present.
     * The correct generation is displayed after birth year submission.
     * Celebrity list exists and contains expected child elements.
     */
    happyPathBirthYearTest(
      birthYear: number,
      expectedGeneration: RegExp
    ): Chainable<Element>;
  }
}
