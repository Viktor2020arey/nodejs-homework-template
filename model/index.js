const fs = require("fs/promises");
const path = require("path");

// const contacts = require("./contacts.json");

const filePath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  try {
    const data = await fs.readFile(filePath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    throw error;
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const selectContact = contacts.find((contact) => contact.id === +contactId);
    if (!selectContact) {
      return null;
    }
    return selectContact;
  } catch (error) {
    throw error;
  }
};

const removeContact = async (contactId) => {};

const addContact = async (body) => {
  try {
    const { name, email, phone } = body;

    const contacts = await listContacts();
    // const nameContact = contacts.find((contact) => contact.name === name);
    // if (nameContact) {
    //   throw new Error(`Контакт с именем ${name} уже существует `);
    // }
    const id = Math.max(...contacts.map(({ id }) => id)) + 1;
    const addContact = { id, ...body };
    const newContacts = [...contacts, addContact];
    const newContactsString = JSON.stringify(newContacts);
    await fs.writeFile(filePath, newContactsString);
    return addContact;
  } catch (error) {
    throw error;
  }
};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
