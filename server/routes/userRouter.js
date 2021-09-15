const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddeware = require("../middleware/authMiddeware");

router.post("/reqistration", userController.reqistration);
router.post("/login", userController.login);
router.get("/auth", authMiddeware, userController.chek);

module.exports = router;
