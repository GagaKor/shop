"ues strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/getList", ctrl.output.getList);
router.delete("/api/shop/:id", ctrl.output.deleteShop);

router.post("/api/shop", ctrl.process.saveShop);
router.post("/api/item", ctrl.process.saveItem);

module.exports = router;
