import express from "express";
//const express = require("express");
import bodyParser from "body-parser";
//const bodyParser = require("body-parser");
import mongoose from "mongoose";
//const mongoose = require("mongoose");
import cors from "cors";

import postRoutes from "./routes/posts.mjs";

//const cors = require("cors");

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://regantek:regantek123@cluster0.vuula.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
