const courseModel = require('../Models/courseModel');
const userModel = require("../Models/userModel");

//register for course

const registerCourse = async (req, res) => {
    try{
        const getStudentId = await userModel.findById(req.params.id);
        const {studentName, courseName, reg_no } = req.body
        const reqisteredCourse = await courseModel.create({
            studentName, courseName, reg_no
        })

        if(!getStudentId) {
            return res.status(404).json({
                message: "Student not found"
            })

            return res.status(201).json({
                message: "course reqistered successfully",
                data: registeredCourse
            })
        }

    }catch (error) {
        return res.status(500).json({
            message: "Course registration failed" + error.message
        })
    }
}


//get all courses

const getAllCourses = async (req, res) => {
    try {
        const getAll = await courseModel.find()

        return res.status(200).json({
            message: "All courses fetched successfully",
            data: getAll
        })
    }catch (error) {
        return res.status(500).json({
            message: "error fetching courses" + error.message
        })
    }
}

//update course

const updateCourse = async (req, res) => {
    try {
        const {courseId} = req.params
        const {courseName} = req.body
        const updateCourse = await courseModel.findByIdAndUpdate(courseId, {
            courseName
        }, {new: true})
        
        return res.status(200).json({
            message: "Course Updated successfully",
            data: updateCourse
        })
    }catch (error) {
        return res.status(500).json({
            message: "error updating course" + error.message
        })
    }
}

//delete course

const deleteCourse = async (req, res) => {
    try {
        const {courseId} = req.params
        const deleteCourse = await courseModel.findByIdAndDelete(courseId)

        if(!deleteCourse) {
            return res.status(404).json({
                message: "course not found"
            })
        }

        return res.status(200).json({
            message: "Course deleted successfully",
            data: deleteCourse
        })
    }catch (error) {
        return res.status(500).json({
            message: "Error deleting course" + error.message
        })
    }
}

module.exports = {registerCourse, getAllCourses, updateCourse, deleteCourse};