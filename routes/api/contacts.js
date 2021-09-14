const express = require("express");

const router = express.Router();

const { joiSchema } = require("../../model/contacts/contact");
const { validation } = require("../../middlewares");
const ctrl = require("../../controllers/contacts");

const validationMiddleware = validation(joiSchema);

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validationMiddleware, ctrl.add);

router.delete("/:contactId", ctrl.delById);

router.put("/:contactId", validationMiddleware, ctrl.updateById);

module.exports = router;
