import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoutes = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;

		if (!token) {
			return res.status(400).json({ error: "No token provided" });
		} else {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			if (!decoded) {
				return res.status(400).json({ error: "Invalid token" });
			}
			const user = await User.findById(decoded.userId).select("-password");

			if (!user) {
				return res.status(400).json({ error: "No user found" });
			}
			req.user = user;
			next();
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
		console.log(error.message);
	}
};

export default protectRoutes;
