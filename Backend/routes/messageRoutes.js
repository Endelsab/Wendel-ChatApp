import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import protectRoutes from "../middleware/protectRoutes.js";

const messageRoutes = express.Router();


messageRoutes.get("/:id", protectRoutes, getMessages);
messageRoutes.post("/send/:id", protectRoutes, sendMessage);


export default messageRoutes;
