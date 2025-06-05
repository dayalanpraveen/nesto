export {};
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

import { AccountFormData } from '../support/types/account-form.type';

declare global {
  namespace Cypress {
    interface Chainable {
        /**
         * Custom command to verify account creation.
         * @example cy.verify_account_creation()
         */
        verify_account_creation(data: AccountFormData): Chainable;
        waitForIntercept(interceptUrl: string, interceptName: string, method: string): Chainable;
        verifyFieldAndLabel(getField: () => Cypress.Chainable, getLabel: () => Cypress.Chainable, expectedLabel: string): Chainable;
        selectLanguage(language: string): Chainable;
    }
  }
}


Cypress.Commands.add('waitForIntercept', (interceptUrl: string, interceptName: string, method: string) => {
    cy.intercept(method, interceptUrl).as(interceptName);
})