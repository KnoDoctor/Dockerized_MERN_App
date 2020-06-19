const express = require("express");

const router = express.Router();

const {
    getTests,
    addTest,
    deleteTest,
} = require("../controllers/testsController");

router.route("/").get(getTests).post(addTest);
router.route("/:id").delete(deleteTest);

module.exports = router;
