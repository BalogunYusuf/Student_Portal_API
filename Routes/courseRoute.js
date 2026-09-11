const express = require("express");
const {registerCourse, getAllCourses, updateCourse, deleteCourse} = require("../Controllers/courseController");


const router = express.Router();

router.post('/register/:id', registerCourse);
router.get('/getall', getAllCourses);
router.patch('/update/:courseId', updateCourse);
router.delete('/delete/:courseId', deleteCourse);

module.exports = router;