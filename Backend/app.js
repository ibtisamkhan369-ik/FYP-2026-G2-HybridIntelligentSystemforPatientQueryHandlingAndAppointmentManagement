const cors = require("cors");
const express = require("express");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());


const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Hybrid Intelligent Hospital System API"
    });
});

app.get("/test-db", (req, res) => {
    db.query("SELECT NOW() AS currentTime", (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(results);
    });
});

module.exports = app;