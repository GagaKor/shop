"ues strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/getList", ctrl.output.getList);

router.post("/saveShop", ctrl.process.saveShop);
router.post("/saveItem", ctrl.process.saveItem);

module.exports = router;
