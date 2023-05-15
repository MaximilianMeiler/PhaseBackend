import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("users");
  let results = await collection.find({})
    .toArray();

  res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
  let collection = await db.collection("users");
  let query = {"data.deviceID": req.params.id};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

router.post("/", async (req, res) => {
  let collection = await db.collection("users");
  let newDocument = req.body;
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

export default router;