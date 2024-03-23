import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.CONNECTION_STRING);
		console.log("connected to ohmygosh");
	} catch (error) {
		console.log("Can't connect to MongoDb", error.message);
	}
};
export default connectToMongoDB;
