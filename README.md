# nesto

This repository contains end-to-end (E2E) tests for the nesto application using Cypress.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/dayalanpraveen/nesto.git
   cd nesto
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

## Running Cypress Tests

### Open Cypress Test Runner (Interactive Mode)

```sh
npx cypress open
```
NOTE: By default, the test triggered will take the english language as default. Handling of multiple languages is done in the headless mode by using the Cypress.env variable. 

This will launch the Cypress Test Runner UI, where you can select and run tests interactively.

### Run Cypress Tests in Headless Mode for the language English

```sh
npx cypress run --env language=en   
```

### Run Cypress Tests in Headless Mode for the language French

```sh
npx cypress run --env language=fr
```


This will execute all tests in the terminal without the UI.

## Project Structure

- `cypress/e2e/` - Contains E2E test files (e.g., `sign-up.cy.ts`).
- `cypress/support/` - Custom commands, page objects, locators, and utilities.
- `cypress/fixtures/` - Test data files.
- `cypress.config.ts` - Cypress configuration file.

## Additional Notes

- For more information, see the [Cypress documentation](https://docs.cypress.io/).