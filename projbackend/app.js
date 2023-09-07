require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");

//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED");
  });

//Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//MyRoutes
app.use("/api", authRoutes);

//PORT
const port = process.env.PORT || 8000;

//Starting Server
app.listen(port, () => {
  console.log(`Server is runing at ${port}`);
});
