"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mediaController_1 = require("../controllers/mediaController");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Media Route get request");
});
router.post("/", (req, res) => {
    res.send("Media Route post request");
});
router.get("/getmedias", mediaController_1.getMediaItems);
router.get("/getmedia/:id", mediaController_1.getMediaById);
router.post("/addmedias", mediaController_1.createMediaItem);
exports.default = router;
