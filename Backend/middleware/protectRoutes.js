import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoutes = async (req, res, next) => {
	const token = req.cookies.jwt;

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized - Invalid Token" });
		}

		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({ error: "User not found pesti" });
		}

		req.user = user;

		next();
	} catch (error) {
		console.log(error.message);
	}
};

export default protectRoutes;
