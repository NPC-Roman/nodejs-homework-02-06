const express = require("express");

const {
  getAllContacts,
  getById,
  removeById,
  newContact,
  updById,
  updateStatusContact,
} = require("../../controllers/index");

const isValidId = require("../../midddlewars/isValidId");
const authenticate = require("../../midddlewars/authenticate");

const router = express.Router();

router.get("/", isValidId, getAllContacts);

router.get("/:contactId", getById);

router.post("/", isValidId, newContact);

router.delete("/:contactId", removeById);

router.put("/:contactId", updById);

router.patch("/:contactId/favorite", updateStatusContact);

module.exports = router;
