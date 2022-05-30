
const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const ProductSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        desc: {type: String, required: true},
        img: {type: String, required: true},
        categories: {type: Array},
        type: {type: String},
        price: {type: Number, required: true},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);