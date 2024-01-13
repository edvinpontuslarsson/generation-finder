import {
  invalidBirthYearInputTest,
  happyPathBirthYearTest,
  clickTryAgainButton,
} from './e2eHelpers';

Cypress.Commands.add('invalidBirthYearInputTest', invalidBirthYearInputTest);
Cypress.Commands.add('happyPathBirthYearTest', happyPathBirthYearTest);
Cypress.Commands.add('clickTryAgainButton', clickTryAgainButton);
