import { Router } from "express";
import { createUser } from "../controller/userController";

const userRoutes = Router();

userRoutes.post('/users', createUser);

export default userRoutes;
