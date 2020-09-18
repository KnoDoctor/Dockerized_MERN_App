const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema({
    pageName: {
        type: String,
        trim: true,
        required: [true, "Please add a page name."],
    },
    pageSlug: {
        type: String,
        trim: true,
        required: [true, "Please add a page slug."],
    },
    pageData: {
        type: Object,
        required: [true, "please add object"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Page", PageSchema);
