require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);

app.use(express.json());

app.use("/api/posts", postRoute);

app.use("/api/user", authRoute);
app.listen(3001, () => console.log("Server Up"));
