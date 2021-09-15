const ApiEror = require("../error/ApiError");
module.exports = function (err, req, res, next) {
  if (err instanceof ApiEror) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: "Непредвиденая ошибка" });
};
