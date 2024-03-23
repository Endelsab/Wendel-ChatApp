import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		email: String,
		username: String,
		password: String,
		gender: String,
		profilePic: String,
	},
	{
		timestamps: true,
	},
);

const User = mongoose.model("users", userSchema);

export default User;
