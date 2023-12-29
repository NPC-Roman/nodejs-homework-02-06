const contacts = require("../models/contacts");

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await contacts.getContactById(contactId);

    if (!contact) {
      const error = new Error("Contact not found");
      error.status = 404;
      throw error;
    }

    res.json({
      status: "success",
      code: 200,
      data: {
        result: contact,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
