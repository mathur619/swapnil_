const express = require("express");
const router = express.Router();
const Hotel = require("../models/Hotel");
const keys = require("../config/keys");

router.get("/", (req, res) => {
  console.log("hey");
  return res.send("jnhbhin");
});

router.post("/getRoom", (req, res) => {
  console.log("post room");
  Hotel.find({ rooms: { $gte: req.body.rooms } }).then(hotels => {
    return res.send("found hotels");
  });
});

router.post("/fillHotel", (req, res) => {
  console.log("fillHotel");
  const newHotel = new Hotel({
    name: req.body.name,
    rooms: req.body.rooms,
    price: req.body.price
  });
  newHotel
    .save()
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

module.exports = router;
