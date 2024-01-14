// const authenticate = async (req, res, next) => {
//   const { authorization } = req.headers;
//   if (!authorization) {
//     return next(HttpError(401, "Authorization not defined"));
//   }
//   const [bearer, token] = authorization.split(" ");
//   if (bearer !== "Bearer") {
//     return next(
//       res.status(400).json({
//         status: "error",
//         code: 400,
//         message: "Authorization not define",
//       })
//     );
//   }
//   try {
//     const { id } = jwt.verify(token, JWT_SECRET);
//     const user = await User.findById(id);
//     if (!user || !user.token || token !== user.token) {
//       return next(
//         res.status(400).json({
//           status: "error",
//           code: 400,
//           message: "`${id} is not valid`",
//         })
//       );
//     }
//     req.user = user;
//     next();
//   } catch (error) {
//     next(
//       res.status(400).json({
//         status: "error",
//         code: 400,
//         message: "`${id} is not valid`",
//       })
//     );
//   }
// };

// module.exports = authenticate;

import jwt from "jsonwebtoken";
import User from "../models/users";
const { JWT_SECRET } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return next(
      res.status(401).json({
        status: "error",
        code: 401,
        message: "Authorization not define",
      })
    );
  }
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    return next(
      res.status(401).json({
        status: "error",
        code: 401,
        message: "Authorization not define",
      })
    );
  }
  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id);
    if (!user || !user.token || token !== user.token) {
      return next(HttpError(401));
    }
    req.user = user;
    next();
  } catch (error) {
    next(
      res.status(401).json({
        status: "error",
        code: 401,
        message: "Authorization not define",
      })
    );
  }
};

export default authenticate;
