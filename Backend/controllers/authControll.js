import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

//SignUpuser
export const signUpUser = async (req, res) => {
	try {
		const { email, username, password, gender } = req.body;

		const user = await User.findOne({ username });

		if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}

		//hashPassword
		const salt = await bcryptjs.genSalt(5);
		const hashPassword = await bcryptjs.hash(password, salt);

		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

		const sex = "Male";
		const newUser = new User({
			email,
			username,
			password: hashPassword,
			gender,
			profilePic: gender === sex.toLowerCase() ? boyProfilePic : girlProfilePic,
		});

		if (newUser) {
			//generate jwt token
			generateTokenAndSetCookie(newUser._id, res);

			await newUser.save();
			res.status(201).json({
				_id: newUser._id,
				email: newUser.email,
				username: newUser.username,
				profilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.message });
	}
};

//LoginUser
export const loginUser = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
		const isPasswordCorrect = await bcryptjs.compare(password, user.password);

		if (user && isPasswordCorrect) {
			generateTokenAndSetCookie(user._id, res);
			res.status(200).json({
				_id: user._id,
				email: user.email,
				username: user.username,
				profilePic: user.profilePic,
			});
			console.log("success");
		} else {
			res.status(400).json({ error: "Invalid username or password" });
			console.log("invalid username or password");
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.message });
	}
};

//LogoutUser
export const logoutUser = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logout successfully" });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: error.message });
	}
};
