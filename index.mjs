import "./loadEnv.mjs";
import posts from "./routes/posts.mjs";
import posts from "./routes/users.mjs";
import cors from "cors";
import express from "express";

const app = express()
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/posts", posts);
app.use("/users", posts);

app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
 })