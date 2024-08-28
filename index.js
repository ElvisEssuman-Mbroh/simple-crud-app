const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const Product = require("./models/product.model.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);



app.listen(3000, () => {
  console.log("server is running on Port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect(
    "mongodb+srv://elvisemb7:H%40mburger1@elvisemb.cdtsm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Elvisemb"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });
