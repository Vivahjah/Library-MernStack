const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  
    available : {
        type: Boolean,
        required: true
    }
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);