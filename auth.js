const jwt = require("jsonwebtoken");
const JWT_SECRET = "sec3et"; 

function auth(req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(403).json({
                message: "Authorization token missing"
            });
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.id; 
        next();
    } catch (error) {
        res.status(403).json({
            message: "Invalid or expired token"
        });
    }
}

module.exports = {
    auth,
    JWT_SECRET
};
