const contactsOperations = require("../../model");
const { productSchema } = require("../../validation");

const updateById = async (req, res, next) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    const { contactId } = req.params;
    const contact = await contactsOperations.updateContact(contactId, req.body);
    if (!contact) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.json({ contact });
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
