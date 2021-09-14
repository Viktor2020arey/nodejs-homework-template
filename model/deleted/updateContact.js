const fs = require("fs/promises");
const filePath = require("./filePath");

const listContacts = require("./listContacts");

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === +contactId);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = { ...contacts[idx], ...body };
  await fs.writeFile(filePath, JSON.stringify(contacts));
  return contacts[idx];
};

module.exports = updateContact;
