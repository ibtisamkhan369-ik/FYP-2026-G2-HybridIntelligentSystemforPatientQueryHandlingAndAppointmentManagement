const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ==========================
// REGISTER
// ==========================
exports.register = async (req, res) => {
    try {
        const { full_name, email, password, phone } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = `
        INSERT INTO users
        (full_name,email,password_hash,phone,role)
        VALUES (?,?,?,?,?)
        `;

        db.query(
            sql,
            [full_name, email, hashedPassword, phone, "Patient"],
            (err, result) => {
                if (err) {
                    return res.status(500).json(err);
                }

                res.json({
                    success: true,
                    message: "Patient Registered Successfully"
                });
            }
        );

    } catch (error) {
        res.status(500).json(error);
    }
};

// ==========================
// LOGIN
// ==========================
exports.login = (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, results) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (results.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Invalid Email or Password"
            });
        }

        const user = results[0];

        const match = await bcrypt.compare(password, user.password_hash);

        if (!match) {
            return res.status(401).json({
                success: false,
                message: "Invalid Email or Password"
            });
        }

        const token = jwt.sign(
            {
                id: user.user_id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.json({
            success: true,
            message: "Login Successful",
            token,
            user: {
                id: user.user_id,
                full_name: user.full_name,
                email: user.email,
                role: user.role
            }
        });

    });

};