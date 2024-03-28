import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.CONNECTION_STRING);
		console.log("connected to ohmygosh");
	} catch (error) {
		console.log("pesti may error", error.message);
	}
};
export default connectToMongoDB;
