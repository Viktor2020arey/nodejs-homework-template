const express = require("express");

const router = express.Router();

const {
  joiSchema,
  JoiFavoriteSchema,
} = require("../../model/contacts/contact");
const { validation } = require("../../middlewares");
const ctrl = require("../../controllers/contacts");

const validationMiddleware = validation(joiSchema);
const validationFavoriteMiddleware = validation(JoiFavoriteSchema);

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validationMiddleware, ctrl.add);

router.delete("/:contactId", ctrl.delById);

router.put("/:contactId", validationMiddleware, ctrl.updateById);

router.patch(
  "/:contactId/favorite",
  validationFavoriteMiddleware,
  ctrl.updateStatusContact
);

module.exports = router;
