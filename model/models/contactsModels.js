const { Schema, model } = require("mongoose");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      // match: emailRegexp,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Contact = model("contact", contactSchema);

module.exports = Contact;
