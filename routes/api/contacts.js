const express = require("express");
const router = express.Router();

const contactsOperations = require("../../model");
const { productSchema } = require("../../validation");

router.get("/", async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts();
    res.json({ contacts });
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await contactsOperations.getContactById(contactId);
    if (!contact) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    res.json({ contact });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
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
});

router.delete("/:contactId", async (req, res, next) => {
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
});

router.put("/:contactId", async (req, res, next) => {
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
});

module.exports = router;
