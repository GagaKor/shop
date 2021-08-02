"ues strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/getList", ctrl.output.getList);

router.post("/sendData", ctrl.process.sendData);

module.exports = router;
