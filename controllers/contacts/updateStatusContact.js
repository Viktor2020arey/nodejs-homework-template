const { Contact } = require("../../model/contacts");

const updateStatusContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const { favorite } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      contactId,
      { favorite },
      { new: true }
    );
    if (!contact) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    return contact
      ? res.status(200).json({ contact })
      : res.status(404).json({ message: "Not found" });
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusContact;
