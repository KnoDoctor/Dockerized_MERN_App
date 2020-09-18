const Page = require("../models/Page");

// @desc    Get Pages
// @route   GET /api/v1/pages/
// @access  Public
exports.getPages = async (req, res, next) => {
    try {
        const pages = await Page.find();

        return res.status(200).json({
            success: true,
            count: pages.length,
            data: pages,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};

// @desc    Get Page
// @route   GET /api/v1/pages/:id
// @access  Public
exports.getPage = async (req, res, next) => {
    try {
        const page = await Page.findOne({ pageSlug: req.params.pageSlug });

        if (!page) {
            return res.status(404).json({
                success: false,
                error: "No page found",
            });
        }
        return res.status(200).json({
            success: true,
            data: page,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};

// @desc    Add a Page
// @route   POST /api/v1/pages
// @access  Public
exports.addPage = async (req, res, next) => {
    try {
        const page = await Page.findOneAndUpdate(
            { pageSlug: req.body.pageSlug },
            req.body,
            {
                upsert: true,
                new: true,
                setDefaultsOnInsert: true,
                runValidators: true,
            }
        );

        return res.status(201).json({
            sucess: true,
            data: page,
        });
    } catch (err) {
        if (err.name === "ValidationError") {
            const messages = Object.values(err.errors).map(
                (val) => val.message
            );

            return res.status(400).json({
                success: false,
                error: messages,
            });
        } else {
            return res.status(500).json({
                success: false,
                error: "Server Error",
            });
        }
    }
};
