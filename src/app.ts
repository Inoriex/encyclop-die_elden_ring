import express from "express";
import config from "config";
import connect from "./database/mongodb"
import openRoutes from "./routes/public/openRoutes"


const APP = express();
const PORT = config.get<number>("port");
APP.use(express.json())

openRoutes(APP);
APP.listen(PORT, async () => {
  console.log("App is running");
  await connect();
});

