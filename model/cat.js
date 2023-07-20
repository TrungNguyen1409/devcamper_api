const mongoose = require("mongoose");
const CatModel = mongoose.model("Cat", { name: String });

module.exports = CatModel;
