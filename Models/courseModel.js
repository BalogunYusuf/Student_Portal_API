const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    studentName: {type: String, required: true},
    courseName : {type: String, required: true},
    reg_no: {type: String, required: true},
}, {timestamps: true});

const courseModel = mongoose.model("Course", courseSchema);
module.exports = courseModel;