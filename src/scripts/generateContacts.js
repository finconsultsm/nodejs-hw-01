import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  const newContacts = Array.from({ length: number }, createFakeContact);

  const contacts = await readContacts();
  contacts.push(...newContacts);

  await writeContacts(contacts);
};

generateContacts(5);
