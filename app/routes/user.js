const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

const path = "user";

router.get(`/${path}`, controller.getData);
router.post(`/${path}`, controller.postData);

module.exports = router;
