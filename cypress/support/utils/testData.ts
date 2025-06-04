import { faker } from '@faker-js/faker';

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

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
