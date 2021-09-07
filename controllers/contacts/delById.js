const contactsOperations = require("../../model/contacts");

const delById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const deleteContact = await contactsOperations.removeContact(contactId);
    if (!deleteContact) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    res.json({ deleteContact });
  } catch (error) {
    next(error);
  }
};

module.exports = delById;
