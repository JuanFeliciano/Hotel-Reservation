import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export class UserController {
  async store(req: Request, res: Response) {
    const { username } = req.body.username;
    const { password } = req.body.password;

    const userExists = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (userExists) {
      return res.send("User Exists");
    }

    await prisma.user.create({
      data: {
        username,
        password,
      },
    });

    document
      .getElementById("loginForm")
      ?.addEventListener("submit", function (event) {
        event.preventDefault();

        window.location.href = "http://localhost:3300/home";
      });
  }
}
