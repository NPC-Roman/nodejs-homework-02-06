const express = require("express");

const {
  getAllContacts,
  getById,
  removeById,
  newContact,
  updById,
  updateStatusContact,
} = require("../../controllers/index");

const { isValidId } = require("../../middlewars/isValidId");

const router = express.Router();

router.get("/", getAllContacts);

router.get("/:contactId", isValidId, getById);

router.post("/", newContact);

router.delete("/:contactId", isValidId, removeById);

router.put("/:contactId", isValidId, updById);

router.patch("/:contactId/favorite", isValidId, updateStatusContact);

module.exports = router;
