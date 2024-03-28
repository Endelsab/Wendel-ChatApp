import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.WENDEL_URI);
		console.log("connected to ohmygosh");
	} catch (error) {
		console.log("pesti may error", error.message);
	}
};
export default connectToMongoDB;
