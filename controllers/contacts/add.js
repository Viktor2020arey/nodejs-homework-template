const contactsOperations = require("../../model");
const { productSchema } = require("../../validation");

const add = async (req, res, next) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    const newContact = await contactsOperations.addContact(req.body);
    res.status(201).json({ newContact });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
