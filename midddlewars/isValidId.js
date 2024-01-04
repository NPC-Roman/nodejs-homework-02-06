const { isValidObectId } = require("mongoose");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObectId(id)) {
    next(
      res.status(400).json({
        status: "error",
        code: 400,
        message: "`${id} is not valid`",
      })
    );
  }
};

module.exports = isValidId;
