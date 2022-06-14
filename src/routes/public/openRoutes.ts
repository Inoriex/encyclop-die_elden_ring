import { Express, Request, Response } from "express";
import { handleCreateUser, randomUser, allUser } from "../../controller/user.controller";
import { validate } from "../../validate/validateRessource"
import {createUserSchema} from "../../validate/user.validate"



function openRoutes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).send({ message: "✅" });
  });
  app.post("/faker/users",randomUser);
  app.post("/api/users", validate(createUserSchema), handleCreateUser);
  app.get("/api/liste", allUser,)
}
export default openRoutes

