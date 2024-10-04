import cors from "cors";
import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Testing
app.get("/", (req: Request, res: Response) => {
  res.send("Application running successfully!");
});

export default app;
