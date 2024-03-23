import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connMongodb.js";
import router from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";


const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", router);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);



app.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Listening on port ${PORT}`);
});
