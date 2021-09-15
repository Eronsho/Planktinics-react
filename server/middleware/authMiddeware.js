const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1]; // Bearer asfkalsfksf
    if (!token) {
      return res
        .status(401)
        .json({ message: "не авторизован токен не правилный" });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (e) {
    console.log(e);
    res.status(401).json({ message: "не авторизован ошибка" });
  }
};
