export const getFirstName = () => cy.get('[data-test-id="firstName"]');

export const getLastName = () => cy.get('[data-test-id="lastName"]');

export const getEmail = () => cy.get('[data-test-id="email"]');

export const getPhoneNumber = () => cy.get('[data-test-id="phone"]');

export const getpassword = () => cy.get('[data-test-id="password"]');

export const getConfirmPassword = () => cy.get('[data-test-id="passwordConfirm"]');

export const getProvincedrpDown = () => cy.get('#select_province');

export const selectProvince = (province: string) => cy.get('.react-select__menu').contains('.react-select__option', province);

export const getValidationError = () => cy.get('[data-test-id="validation_errors_isRequired"]');

export const getAgreeCheckBox = () => cy.get('#checkbox_leadDistributeConsentAgreement');

export const getCreateAccountButton = () => cy.get('[data-test-id="createYourAccount"]');

export const getPasswordWeakValidation = () => cy.get('[data-test-id="validation_errors_passwordsTooWeak"]');

export const getPasswordDoNotMatchValidation = () => cy.get('[data-test-id="validation_errors_passwordsMustMatch"]');

export const getEmailValidation = () => cy.get('[data-test-id="validation_errors_invalidEmail"');

export const getFirstNameLabel = () => cy.get('[data-test-id="input_label-firstName"]');

export const getLastNameLabel = () => cy.get('[data-test-id="input_label-lastName"]');

export const getEmailLabel = () => cy.get('[data-test-id="input_label-email"]');

export const getPhoneNumberLabel = () => cy.get('[data-test-id="input_label-phone"]');

export const getPasswordLabel = () => cy.get('[data-test-id="input_label-password"]');

export const getConfirmPasswordLabel = () => cy.get('[data-test-id="input_label-passwordConfirm"]');

export const getProvinceLabel = () => cy.get('.react-select__placeholder');

export const getToggleLanguage = () => cy.get('[data-test-id="toggle-language"]');