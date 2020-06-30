const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const transactions = require("./routes/transactionsRouter");
const tests = require("./routes/testsRouter");
const reddit = require("./routes/redditRouter");

const app = express();

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(express.json());

//Manage CORS Settings
app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", ["*"]);
    res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.append("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use("/api/v1/transactions", transactions);
app.use("/api/v1/tests", tests);
app.use("/api/v1/reddit", reddit);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
}

let PORT;

if (process.env.NODE_ENV === "production") {
    PORT = process.env.LIVE_PORT;
} else if (process.env.NODE_ENV === "development") {
    PORT = process.env.DEV_PORT;
} else {
    PORT = process.env.STAGING_PORT;
}

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    )
);
