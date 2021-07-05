import express, { Request, Response } from "express";
import { getUser } from "../usecase/get-user";

export const userRouter = express.Router();

userRouter.get("/:username", async (req: Request, res: Response) => {
  try {
    const user = await getUser(req.params.username)
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
});