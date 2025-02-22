import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    for (let i = 1; i <= number; i += 1) {
      contacts.push(createFakeContact());
    }
    writeContacts(contacts);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
