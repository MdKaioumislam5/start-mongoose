import express, { Application } from "express";
import cors from "cors";

const app: Application = express();
import userRouts from "./app/modules/user/user.route";

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouts);

export default app;
