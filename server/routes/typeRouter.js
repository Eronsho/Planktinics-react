const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");
const chekRole = require("../middleware/chekRoleMiddeware");

router.post("/", chekRole("ADMIN"), typeController.create);
router.get("/", typeController.getAll);

module.exports = router;
