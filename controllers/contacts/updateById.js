const { Contact } = require("../../model/contacts");

const updateById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
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
