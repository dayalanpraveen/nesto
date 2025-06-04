import { getAgreeCheckBox, getConfirmPassword, getCreateAccountButton, getEmail, getEmailValidation, getFirstName, getLastName, getpassword, getPasswordDoNotMatchValidation, getPasswordWeakValidation, getPhoneNumber, getProvincedrpDown, getToggleLanguage, getValidationError, selectProvince } from "../locators/signup.locators"

type ValidationError = {
  field:
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phoneNumber'
  | 'password'
  | 'confirmPassword'
  | 'province'
  | 'passwordWeak';
  message: string;
};

type AccountFormData = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: number;
  password?: string;
  confirmPassword?: string;
  province?: string;
  expectSuccess: boolean;
  expectedErrors?: ValidationError[];
};

/**
 * A mapping of form field names to functions that return Cypress chainables for their corresponding validation error elements.
 * 
 * Each key represents a specific form field or validation type, and the associated function returns a Cypress.Chainable
 * that resolves to the JQuery<HTMLElement> representing the validation error for that field.
 * 
 * @remarks
 * - Standard fields (e.g., `firstName`, `lastName`, `email`, etc.) use `getValidationError()`.
 * - Special validation cases (e.g., `passwordWeak`, `passwordDoNotMatch`, `invalidEmail`) use their respective selector functions.
 * 
 * @example
 * ```typescript
 * fieldErrorSelectors.firstName().should('contain', 'First name is required');
 * ```
 */
const fieldErrorSelectors: Record<string, () => Cypress.Chainable<JQuery<HTMLElement>>> = {
  firstName: () => getValidationError(),
  lastName: () => getValidationError(),
  email: () => getValidationError(),
  phoneNumber: () => getValidationError(),
  password: () => getValidationError(),
  confirmPassword: () => getValidationError(),
  province: () => getValidationError(),
  passwordWeak: () => getPasswordWeakValidation(),
  passwordDoNotMatch: () => getPasswordDoNotMatchValidation(),
  invalidEmail: () => getEmailValidation()
};


Cypress.Commands.add('verify_account_creation', (data: AccountFormData) => {
  if (data.firstName) {
    getFirstName().type(data.firstName).should('have.value', data.firstName);
  }

  if (data.lastName) {
    getLastName().type(data.lastName).should('have.value', data.lastName);
  }

  if (data.email) {
    getEmail().type(data.email).should('have.value', data.email);
  }

  if (data.phoneNumber !== undefined) {
    getPhoneNumber().type(data.phoneNumber.toString());
  }

  if (data.password) {
    getpassword().type(data.password, { log: false });
  }

  if (data.confirmPassword) {
    getConfirmPassword().type(data.confirmPassword, { log: false });
  }

  if (data.province) {
    getProvincedrpDown().click();
    selectProvince(data.province).click();
    getProvincedrpDown().should('contain.text', data.province);
  }

  getAgreeCheckBox().click();

  cy.waitForIntercept('/api/accounts', 'createAccount', 'POST');
  getCreateAccountButton().click();

  if (data.expectSuccess) {
    cy.wait('@createAccount')
      .its('response.statusCode')
      .should('eq', 201);
  } else if (data.expectedErrors) {
    data.expectedErrors.forEach((error) => {
      const getErrorElement = fieldErrorSelectors[error.field];
      if (!getErrorElement) {
        throw new Error(`Missing selector for error field: ${error.field}`);
      }
      getErrorElement().should('contain.text', error.message);
    });
  }
});

Cypress.Commands.add('verifyFieldAndLabel', (getField: () => Cypress.Chainable, getLabel: () => Cypress.Chainable, expectedLabel: string) => {
  getField().should('exist').and('be.visible');
  getLabel().should('exist').and('contain.text', expectedLabel);
});


Cypress.Commands.add('selectLanguage', (language: string) => {
  if (language === 'fr') {
    getToggleLanguage().click();
  } else {
    cy.log('Default language is English');
  }

})
