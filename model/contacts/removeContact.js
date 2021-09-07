const fs = require("fs/promises");
const filePath = require("./filePath");

const listContacts = require("./listContacts");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === +contactId);
  if (idx === -1) {
    return null;
  }
  const newContacts = contacts.filter((contact) => contact.id !== +contactId);
  const newContactsString = JSON.stringify(newContacts);
  await fs.writeFile(filePath, newContactsString);
  return contacts[idx];
};

module.exports = removeContact;
