const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const CatModel = require("./model/cat");

//load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();
const kitty = new CatModel({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));

// Route files
const bootcamps = require("./routes/bootcamps");

const app = express();

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 3030;

app.listen(
  PORT,
  console.log(` Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
