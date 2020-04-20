const members = require("../ModelOne/User");

exports.create = function(req, res) {
  var entry = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    favoriteColor: req.body.favoriteColor,
    isActive: req.body.isActive
  });
  entry.save();
  console.log("successful");

  res.redirect(301, "/");
};

expoers.getNote = (req, res) => {
  res.render("newnote", { title: "members - newnote" });
};
