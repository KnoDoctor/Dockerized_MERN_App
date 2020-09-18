const express = require("express");

const router = express.Router();

const { getPages, getPage, addPage } = require("../controllers/pageController");

router.route("/").get(getPages).post(addPage);
router.route("/:pageSlug").get(getPage);

module.exports = router;
