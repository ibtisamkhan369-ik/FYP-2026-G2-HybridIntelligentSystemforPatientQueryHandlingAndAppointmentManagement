const { authorizeRoles } = require("../middleware/roleMiddleware");

const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/profile", verifyToken, (req, res) => {
    res.json({
        success: true,
        message: "Protected Route Accessed",
        user: req.user
    });
});

module.exports = router;
router.get(
    "/patient-dashboard",
    verifyToken,
    authorizeRoles("Patient"),
    (req, res) => {
        res.json({
            success: true,
            message: "Welcome Patient Dashboard"
        });
    }
);

router.get(
    "/admin-dashboard",
    verifyToken,
    authorizeRoles("Admin"),
    (req, res) => {
        res.json({
            success: true,
            message: "Welcome Admin Dashboard"
        });
    }
);