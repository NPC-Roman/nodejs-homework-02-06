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

router.get("/", getAllContacts);

router.get("/:contactId", getById);

router.post("/", newContact);

router.delete("/:contactId", removeById);

router.put("/:contactId", updById);

router.patch("/:contactId/favorite", updateStatusContact);

module.exports = router;
