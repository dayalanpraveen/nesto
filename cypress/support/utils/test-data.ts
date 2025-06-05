import { faker } from '@faker-js/faker';

/**
 * Capitalizes the first letter of the given word and converts the rest to lowercase.
 *
 * @param word - The string to capitalize.
 * @returns The capitalized string.
 */
function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/**
 * Generates a random user object with a first name, last name, and email address.
 *
 * - The first and last names are generated using the `faker` library and capitalized.
 * - The email is constructed from a sanitized, lowercase version of the first name,
 *   a random 3-digit number, and the domain `@gmail.com`.
 *
 * @returns An object containing:
 *   - `firstName`: The capitalized random first name.
 *   - `lastName`: The capitalized random last name.
 *   - `email`: A generated email address based on the first name.
 */
export function generateRandomUser() {
  const rawFirstName = faker.person.firstName();
  const rawLastName = faker.person.lastName();

  const firstName = capitalize(rawFirstName);
  const lastName = capitalize(rawLastName);

  // Create a clean version for the email
  const cleanFirstName = firstName.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const email = `${cleanFirstName}${faker.number.int({ min: 100, max: 999 })}@gmail.com`;

  return {
    firstName,
    lastName,
    email,
  };
}
