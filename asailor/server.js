const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const room = require("./routes/room");

const app = express();

//DB config
const db = require("./config/keys").mongoURI;

// connect to database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/room", room);

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Listening on port: ${port}`));
