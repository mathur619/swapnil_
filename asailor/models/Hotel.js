const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
  name: {
    type: String
    // required: true
  },
  rooms: {
    type: Number
    // required: true
  },
  price: {
    type: Number
    // required: true
  }
});

module.exports = Hotel = mongoose.model("hotel", HotelSchema);
