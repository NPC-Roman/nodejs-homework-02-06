const express = require("express");
const {
  register,
  login,
  getCurrentUser,
  logout,
} = require("../../controllers/users/index");

const router = express.Router();

const isValidId = require("../../midddlewars/isValidId");
const authenticate = require("../../midddlewars/authenticate");

router.post("/register", register);
router.post("/login", login);
router.get("/current", authenticate, isValidId, getCurrentUser);
router.post("/logout", authenticate, isValidId, logout);

module.exports = router;
