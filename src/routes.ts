import { Request, Response } from "express";
import { Router } from "express";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/content/index.html");
});

router.get("/home", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/content/profile.hmtl");
});
