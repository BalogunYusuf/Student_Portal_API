const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    reg_no: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    course: [{type: mongoose.Schema.Types.ObjectId, ref: "Course"}]
})

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;