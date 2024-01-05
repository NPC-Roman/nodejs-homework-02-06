const express = require("express");
const {
  getAllContacts,
  getById,
  removeById,
  newContact,
  updById,
  updateStatusContact,
} = require("../../controllers/index");

const router = express.Router();

const isValidId = require("../../midddlewars/isValidId");
const authenticate = require("../../midddlewars/authenticate");

router.get("/", authenticate, isValidId, getAllContacts);
router.get("/:contactId", authenticate, getById);
router.post("/", authenticate, isValidId, newContact);
router.delete("/:contactId", authenticate, removeById);
router.put("/:contactId", authenticate, updById);
router.patch("/:contactId/favorite", authenticate, updateStatusContact);

module.exports = router;
