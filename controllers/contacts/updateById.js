// const { productSchema } = require("../../model/contacts");
const { Contact } = require("../../model/contacts");

const updateById = async (req, res, next) => {
  try {
    // const { error } = productSchema.validate(req.body);
    // if (error) {
    //   return res.status(400).json({
    //     message: error.message,
    //   });
    // }

    const { contactId } = req.params;
    const contact = await Contact.findByIdAndUpdate(contactId, req.body);
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
