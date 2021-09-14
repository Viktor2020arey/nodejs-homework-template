// const contactsOperations = require("../../model/contacts");
// const { productSchema } = require("../../validation");

const { Contact } = require("../../model/contacts");

const add = async (req, res, next) => {
  try {
    // const { error } = productSchema.validate(req.body);
    // if (error) {
    //   return res.status(400).json({
    //     message: error.message,
    //   });
    // }

    const result = await Contact.create(req.body);
    res.status(201).json({ result });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
