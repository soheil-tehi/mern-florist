const express = require("express");
const Router = require("./Router/AppRouter");
require("dotenv").config();
const app = express();
const cors = require("cors");

//mongoDB
const mongoose = require("mongoose");

//middleware
app.use(cors());
app.use("/florist", Router);
app.use(express.json());
app.use(express.static("public"));
//mongoDB Connection
const uri = process.env.URI_PATH;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("mongoose connections is successful");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("app listen on port 5000 success");
});
