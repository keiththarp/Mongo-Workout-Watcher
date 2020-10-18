//Require environment variables
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');


const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// all api routes
const apiRoutes = require("./routes/api-routes");
app.use("/api", apiRoutes);

// all html routes
const htmlRoutes = require("./routes/html-routes");
app.use("", htmlRoutes);

mongoose.connect(process.env.MONGODB_URI || "", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});