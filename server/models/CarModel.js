const mongoose = require("mongoose");

const schema = new mongoose.Schema({
brand: String,
model: String,
year: Number,
engineVolume: Number},
 { timestamps: true }
)

export default mongoose.Model("Car", schema)