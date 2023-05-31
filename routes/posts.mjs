import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection("imageLinks");
  let results = await collection.find({})
    .limit(50)
    .toArray();

  res.send(results).status(200);
});

router.post("/", async (req, res) => {
  let collection = await db.collection("imageLinks");
  let newDocument = req.body;
  newDocument.date = new Date();

  let result = await collection.deleteMany({"data.poster": newDocument.data.poster});
  result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

export default router;