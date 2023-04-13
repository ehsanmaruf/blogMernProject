const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require("multer");
const path = require("path");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_STRING;

app.use(express.json()); //parse data
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/cat", categoryRoute);

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Database"))
  .then(() => app.listen(PORT))
  .then(console.log(`Listening on Port ${PORT}`))
  .catch((err) => console.log(err));
