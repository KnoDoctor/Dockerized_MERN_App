const express = require("express");

const router = express.Router();

const { getRedditData } = require("../connectors/redditConnector");

router.route("/:subreddit").get(getRedditData);

module.exports = router;
