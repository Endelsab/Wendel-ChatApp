import User from "../models/userModel.js";

export const getUserSideBar = async (req, res) => {
	try {
		const loggedInUserId = req.user.id;
		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(
			"-password",
		);

		res.status(200).json(filteredUsers);
	} catch (error) {
		res.status(500).json({ error: error.message });
		console.log(error.message);
	}
};