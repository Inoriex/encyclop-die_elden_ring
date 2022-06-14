import {Request, Response} from "express";
import { createUser, arrayUser, inserInBdd, listeUser } from "../services/user.service";
import { createRandomUser } from "../services/user.service";
import { CreateUserInput } from "../validate/user.validate";

export async function handleCreateUser(req: Request<{},{}, any>["body"], res: Response) {
    try {
        const user = await createUser(req.body)
        res.status(200).send({
          message: "User created successfully✅",
          user: user,
        });
    } catch(error: any) {
        res.status(400).send(error);
    }

}

export async function randomUser(req: Request, res: Response) {
  try {
    const users = await arrayUser();
    await inserInBdd(users);
    res.status(200).send({
      message: "ff",
      users: users,
    });
  } catch (error: any) {
    res.status(400).send(error);
  }
}

export async function allUser(req: Request, res: Response) {
  try {
    const liste = await listeUser();
    res.status(200).send({
      message: "je suis pas venue ici pour soufrir OK !",
      liste: liste,
    })
  }catch (error: any) {
    res.status(400).send(error);
  }
}