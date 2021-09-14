const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = Schema({}, { versionKey: false, timestamps: true });

const validNumber =
  /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email(),
  phone: Joi.string().pattern(validNumber).required(),
});

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  joiSchema,
};
