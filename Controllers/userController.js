const userModel = require ("../Models/userModel");
const bcrypt = require("bcrypt");


//create student

const createStudent = async (req, res) => {
    try {
        const {name, reg_no, email, password} = req.body
        const genSalt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, genSalt)
        const newStudent = await userModel.create({
            name, reg_no, email, password: hashedPassword
        })

        res.status(201).json({
            message: "Student created Successfully",
            data: newStudent
        })
    } catch (error) {
        res.status(500).json({
            message: "error creating student" + error.message
        })
    }
}

//login

const loginStudent = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await userModel.findOne({email})

        if (!user) {
            return res.status(404).json({
                message: "User not signed up"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(404).json({
                message: "Password is incorrect"
            })
        }
        
        return res.status(200).json({
            message: "Login successful",
            data: user
        })

    }catch (error) {
        return res.status(500).json({
            message: "Error logging in" + " " + error.message
        })
    }
}

//get all students

const getAllStudents = async (req, res) => {
    try {
        const allStudents = await userModel.find()

        return res.status(200).json({
            message: "All students fetched successfully",
            data: allStudents
        });
    } catch (error){
        return res.status(500).json({
            message: "Error fetching students" + error.message
        });
    }
}

//get student by id

const getStudentById = async (req, res) => {
    try {
        const {id} = req.params
        const student = await userModel.findById(id)

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            })
          
        }
        return res.status(200).json({
            message: "Student fetched successfully",
            data: student
        });

    } catch (error) {
            return res.status(500).json({
                message: "Error fetching student" + error.message
            });
        }
};

//update student

const updateStudent = async (req, res) => {
    try {
        const {id} = req.params
        const {name} = req.body
        const update = await userModel.findByIdAndUpdate(id, {
            name
        }, {new: true})

        return res.status(200).json({
            message:"Student updated successfully",
            data: update
        })
    } catch (error) {
        res.status(500).json({
            message: "Error updating student" + error.message
        })
    }
}

// delete student

const deleteStudent = async (req, res) => {
    try {
        const {id} = req.params
        const deleteStudent = await userModel.findByIdAndDelete(id)

        if (!deleteStudent) {
            return res.status(404).json({
                message: "Student not found"
            })
        }
        return res.status(200).json({
            message: "Student deleted successfully",
            data: deleteStudent
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error deleting student" + error.message
        })
    }
}

module.exports = {loginStudent, createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent};