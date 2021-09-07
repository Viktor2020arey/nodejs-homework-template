const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(filePath);
  const contacts = JSON.parse(data);
  return contacts;
};

module.exports = listContacts;
