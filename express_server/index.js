const express = require("express");
const mongoose = require("mongoose");
const User = require("./Model/User");
const cors = require("cors");

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
};

const PORT = 7000;
const MONGODB_URI = "mongodb://localhost:07017(express.server)";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to db

//creat function for user
// const createUser = () => {
//   const res = new User({
//     firstName: "chime",
//     lastName: "chibuike",
//     phoneNumber: 08169543479,
//     favoriteColor: "black",
//     isActive: true
//   });
//   res.save();
//   console.log(res);
// };
// createUser();
// getting form value datas
app.post("/", (req, res) => {
  console.log(req.body);
  const {
    firstName,
    lastName,
    phoneNumber,
    favoriteColor,
    isActive
  } = req.body;
  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    favoriteColor: favoriteColor,
    isActive: isActive
  });
  // newUser.save();
  console.log(newUser);
});

mongoose
  .connect(MONGODB_URI, options)
  .then(() => console.log("conneted successfully"))
  .catch(err => console.log("error occured : " + err));
app.get("/", (req, res) => res.send("hello world"));
//   app.get("/", (req, res) => res.send("hello world"));
app.get("/api/post", (req, res) => res.send("we are fetching all post"));
//start the server
app.listen(PORT, () => console.log(`server ready on http://localhost:${PORT}`));
// learn to use from this link https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb
//https://zellwk.com/blog/crud-express-mongodb/
