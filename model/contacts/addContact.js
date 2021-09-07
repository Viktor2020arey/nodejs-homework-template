const listContacts = require("./listContacts");

const addContact = async (body) => {
  const { name } = body;

  const contacts = await listContacts();
  const nameContact = contacts.find((contact) => contact.name === name);
  if (nameContact) {
    throw new Error(`Контакт с именем ${name} уже существует `);
  }
  const id = Math.max(...contacts.map(({ id }) => id)) + 1;
  const addContact = { id, ...body };
  const newContacts = [...contacts, addContact];
  const newContactsString = JSON.stringify(newContacts);
  await fs.writeFile(filePath, newContactsString);
  return addContact;
};

module.exports = addContact;
