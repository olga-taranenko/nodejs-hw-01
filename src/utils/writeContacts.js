import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const data = await fs.writeFile(
    PATH_DB,
    JSON.stringify(updatedContacts, null, 2),
  );
  return data;
};
