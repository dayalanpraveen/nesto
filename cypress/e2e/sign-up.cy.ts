import { getFirstName, getFirstNameLabel, getLastName, getLastNameLabel, getEmail, getEmailLabel, getpassword, getPasswordLabel, getConfirmPassword, getConfirmPasswordLabel, getPhoneNumber, getPhoneNumberLabel, getProvincedrpDown, getProvinceLabel } from "../support/locators/signup.locators";
import { generateRandomUser } from "../support/utils/testData";
import { getMessage, getLabel, getProvince } from "../support/utils/dynamicLanguage";

describe('sign up page', () => {
  beforeEach('landing', () => {
    cy.visit('/signup');
    cy.selectLanguage(Cypress.env("language"));
  })

  it('should create account successfully', () => {
    const user = generateRandomUser();
    cy.verify_account_creation({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: 9876543210,
      password: 'StrongPass123!',
      confirmPassword: 'StrongPass123!',
      province: 'Ontario',
      expectSuccess: true
    });
  });

  it('should show required field validations', () => {
    cy.verify_account_creation({
      expectSuccess: false,
      expectedErrors: [
        { field: 'firstName', message: getMessage('required') },
        { field: 'email', message: getMessage('required') },
        { field: 'password', message: getMessage('required') },
      ]
    });
  });

  it('should show password weak validation', () => {
    cy.verify_account_creation({
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice@example.com',
      phoneNumber: 1234567890,
      password: '123',
      confirmPassword: '123',
      province: getProvince('Quebec'),
      expectSuccess: false,
      expectedErrors: [
        {
          field: 'passwordWeak',
          message: getMessage('weakPassword')
        }
      ]
    });

  })

  it('should show password do not match validation', () => {
    cy.verify_account_creation({
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice@example.com',
      phoneNumber: 1234567890,
      password: '123',
      confirmPassword: '12',
      province: getProvince('Quebec'),
      expectSuccess: false,
      expectedErrors: [
        {
          field: 'passwordDoNotMatch',
          message: getMessage('passwordNoMatch')
        }
      ]
    });

  })

  it('should show invalid email validation', () => {
    cy.verify_account_creation({
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'invalid-email',
      phoneNumber: 1234567890,
      password: '123',
      confirmPassword: '12',
      province: getProvince('Quebec'),
      expectSuccess: false,
      expectedErrors: [
        {
          field: 'invalidEmail',
          message: getMessage('invalidEmail')
        }
      ]
    });

  })



  it('should validate fields and labels', () => {
    const fieldsToCheck = [
      { field: getFirstName, label: getFirstNameLabel, expectedText: getLabel('firstName') },
      { field: getLastName, label: getLastNameLabel, expectedText: getLabel('lastName') },
      { field: getEmail, label: getEmailLabel, expectedText: getLabel('email') },
      { field: getPhoneNumber, label: getPhoneNumberLabel, expectedText: getLabel('phone') },
      { field: getpassword, label: getPasswordLabel, expectedText: getLabel('password') },
      { field: getConfirmPassword, label: getConfirmPasswordLabel, expectedText: getLabel('confirmPassword') },
      { field: getProvincedrpDown, label: getProvinceLabel, expectedText: getLabel('province') }
    ];

    fieldsToCheck.forEach(({ field, label, expectedText }) => {
      cy.verifyFieldAndLabel(field, label, expectedText);
    });
  });
})
