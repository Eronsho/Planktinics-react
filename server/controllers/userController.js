const ApiEror = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");
const generateJwt = (id, email, role, name) => {
  return jwt.sign({ id, email, role, name }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};
class UserController {
  async reqistration(req, res, next) {
    const { email, password, role, name } = req.body;
    if (!email || !password) {
      return next(ApiEror.badRequest("Некоректный email или password"));
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(
        ApiEror.badRequest("ползьзователь с таким email уже сушуествуеть ")
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      email,
      role,
      password: hashPassword,
      name,
    });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role, user.name);
    return res.json({ token });
  }
  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiEror.internal("Пользвотель не найдень"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiEror.internal("Указань не верный парол"));
    }
    const token = generateJwt(user.id, user.email, user.role, user.name);
    return res.json({ token });
  }
  async chek(req, res, next) {
    const token = generateJwt(
      req.user.id,
      req.user.email,
      req.user.role,
      req.user.name
    );
    res.json({ token });
  }
}

module.exports = new UserController();
