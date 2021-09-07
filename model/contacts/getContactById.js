const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const selectContact = contacts.find((contact) => contact.id === +contactId);
  if (!selectContact) {
    return null;
  }
  return selectContact;
};

module.exports = getContactById;
