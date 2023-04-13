const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER ROUTE & CONTROLLER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN ROUTE & CONTROLLER
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("User not found!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Invalid Password!");

    const { password, ...data } = user._doc;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
