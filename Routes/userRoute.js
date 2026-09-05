const express = require("express");

const userRoute = express.Router();
const {createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent} = require("../controllers/userController");

userRoute.post("/new-student", createStudent);
userRoute.get("/all-students", getAllStudents);
userRoute.get("/student/:id", getStudentById);
userRoute.patch("/update-student/:id", updateStudent);
userRoute.delete("/delete-student/:id", deleteStudent);

module.exports = userRoute;