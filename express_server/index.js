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

// geting the collection from the mongodb
app.get("/app", async (req, res) => {
  const UserObject = await User.find(); //geting the collection from mongodb
  // console.log(UserObject);
  res.send(UserObject); //sending the collection to the route been specified
});

// app.get("/app/:id/", async (req, res) => {
//   // this get the id from the route url
//   const { id } = req.params;
//   const UserObject = await User.findById({ _id: id });

//   res.send(UserObject); //sending the collection to the route been specified
// });
//find by firstName
// app.get("/app/:firstName/", async (req, res) => {
//   // this get the id from the route url
//   const { firstName } = req.params;
//   const UserObject = await User.find({ firstName: firstName }).limit(2);

//   res.send(UserObject); //sending the collection to the route been specified
// });
// adding limit
// app.get("/app/:id", async (req, res) => {
//   // this get the id from the route url
//   const { id } = req.params;
//   const UserObject = await User.findById({ _id: id }).limit(10);

//   res.send(UserObject); //sending the collection to the route been specified
// });

app.put("/app/:id", async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndUpdate(id, req.body, (err, updated) => {
    if (err) {
      return err;
    } else {
      console.log(updated);
      res.send(updated);
    }
  });
  // console.log(id);
});
app.get("/", (req, res) => res.send("hello world"));
app.get("/api/post", (req, res) => res.send("we are fetching all post"));
//send html file
// app.get("/api/pages", (req, res) =>
//   res.sendFile(__dirname + "/Html file/index.html")
// );
//connect to db
mongoose
  .connect(MONGODB_URI, options)
  .then(() => console.log("conneted successfully"))
  .catch(err => console.log("error occured : " + err));

//start the server
app.listen(PORT, () => console.log(`server ready on http://localhost:${PORT}`));
