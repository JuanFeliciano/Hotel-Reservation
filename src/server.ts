import express from "express";
import { router } from "./routes";

const app = express();
app.use(router);

app.listen(3300, () => console.log("app running on port 3300!"));
