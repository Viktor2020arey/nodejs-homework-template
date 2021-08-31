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

const getContactById = async (contactId) => {};

const removeContact = async (contactId) => {};

const addContact = async (body) => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
