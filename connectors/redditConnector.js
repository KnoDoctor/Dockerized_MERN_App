const axios = require("axios");

// @desc    Get Reddit Data
// @route   GET /api/v1/reddit/:subreddit
// @access  Public
exports.getRedditData = async (req, res, next) => {
    const subreddit = req.params.subreddit;

    axios
        .get("https://www.reddit.com/r/" + subreddit + ".json")
        .then((response) => {
            const tests = response;

            return res.status(200).json({
                success: true,
                count: tests.data.data.dist,
                posts: tests.data.data.children,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
