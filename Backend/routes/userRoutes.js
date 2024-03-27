import express from "express";
import protectRoutes from "../middleware/protectRoutes.js";
import { getUserSideBar } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get("/", protectRoutes, getUserSideBar);

export default userRoutes;
