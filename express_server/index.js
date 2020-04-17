const express = require("express");
const mongoose = require("mongoose");
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
};
const PORT = 7000;
const MONGODB_URI = "mongodb://localhost:07017(express.server)";
const app = express();
//connect to db
mongoose
  .connect(MONGODB_URI, options)
  .then(() => console.log("conneted successfully"))
  .catch(err => console.log("error occured : " + err));
//start the server
app.get("/", (req, res) => res.send("hello world"));
app.get("/api/post", (req, res) => res.send("we are fetching all post"));
app.listen(PORT, () => console.log(`server ready on http://localhost:${PORT}`));
