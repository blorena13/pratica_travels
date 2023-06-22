import express from "express";
import httpStatus from "http-status";
import dotenv from "dotenv";
import router from "./routes/index.routes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(router);
const port = process.env.PORT || 5000;

app.get("/health", (req, res) => res.sendStatus(httpStatus.OK));

app.listen(port, () => {
  console.log(`Server is up and running or port: ${port}`);
})