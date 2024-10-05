import express from "express";
import dotenv from "dotenv";

import Book from "./models/bookModel.js";
import dbStart from "./db/db.js";

const app = express();
const port = 3000;
dotenv.config();
console.log("Hey before");
dbStart();
console.log("Hey after");

app.get("/books", async (req, res) => {
  const books = await Book.find({});
  res.json(books);
});

app.listen(port, () => {
  console.log(`Book Service running at http://localhost:${port}`);
});
