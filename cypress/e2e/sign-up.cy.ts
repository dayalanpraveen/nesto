import { getFirstName, getFirstNameLabel, getLastName, getLastNameLabel, getEmail, getEmailLabel, getpassword, getPasswordLabel, getConfirmPassword, getConfirmPasswordLabel, getPhoneNumber, getPhoneNumberLabel, getProvincedrpDown, getProvinceLabel } from "../support/locators/sign-up.locators";
import { generateRandomUser } from "../support/utils/test-data";
import { getMessage, getLabel, getProvince } from "../support/utils/dynamic-language";
import { ProvinceCode } from "../support/utils/province-code";

describe('sign up page', () => {
  beforeEach('navigate to signup page and select the desired language', () => {
    cy.visit('/signup');
    cy.selectLanguage(Cypress.env("language")|| "en");
  })

  it('should create account successfully', () => {
    const user = generateRandomUser();
    cy.verify_account_creation({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: "987-654-3210",
      password: 'StrongPass123!',
      confirmPassword: 'StrongPass123!',
      province: getProvince('Ontario'),
      provinceCode: ProvinceCode.Ontario,
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
      phoneNumber: '1234567890',
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
      phoneNumber: '1234567890',
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
      phoneNumber: '1234567890',
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

  it('should show account already exists validation', () => {
    cy.verify_account_creation({
      firstName: 'John',
      lastName: 'Doe',
      email: 'johne@example.com',
      phoneNumber: '1234567890',
      password: 'Lexus@rh450h+',
      confirmPassword: 'Lexus@rh450h+',
      province: getProvince('Ontario'),
      expectSuccess: false,
      expectedErrors: [
        {
          field: 'accountAlreadyExists',
          message: getMessage('accountAlreadyEXists')
        }
      ]
    });

  })

  it('should throw generic error validation for whitespace', () => {
    const user = generateRandomUser();
    cy.verify_account_creation({
      firstName: " ",
      lastName: user.lastName,
      email: user.email,
      phoneNumber: "987-654-3210",
      password: 'StrongPass123!',
      confirmPassword: 'StrongPass123!',
      province: getProvince('Ontario'),
      provinceCode: ProvinceCode.Ontario,
      expectSuccess: false,
      expectedErrors: [
        {
          field: 'genericError',
          message: getMessage('genericError')
        }
      ]
    });
  });

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
