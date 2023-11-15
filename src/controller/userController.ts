import { ServiceUser } from "../service/serviceUser";
import { Request, Response } from "express";

const serviceUser = new ServiceUser();

export function createUser(req: Request, res: Response) {
    const { name, username } = req.body;
    try {
        const user = serviceUser.create(name, username);
        return res.status(201).json(user);
    } catch (error: any) {
        return res.status(400).json({ error: error.message });
    }
}
