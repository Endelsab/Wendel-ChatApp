import User from "../models/userModel.js";

export const getUserSideBar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;
		const filteredUsers = await User.find({
			_id: { $ne: loggedInUserId },
		}).select("-password");
		
		console.log("LOGGEDUSERID :", loggedInUserId);

		res.status(200).json(filteredUsers);
		console.log(filteredUsers);
	} catch (error) {
		res.status(500).json({ error: error.message });
		console.log(error.message);
	}
};
