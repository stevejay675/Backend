const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MONGO_DB_CONFIG } = require("./config/app.config");
const cors = require("cors");

//connection to mungodb
mongoose
  .connect(MONGO_DB_CONFIG.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection to MONGODB sucessfull!!");
  })
  .catch((error) => {
    console.log("error connecting to MungoDB", error);
  });
//enable corse
app.use(cors());

app.use(express.json());

app.use("/api", require("./router/app.route"));

app.listen(8000, () => {
  console.log("server started on port 8000");
});