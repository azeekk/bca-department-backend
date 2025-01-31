const Teacher = require('../models/teachers_models')

const getTeachers = async (req,res) => {
    try {
        const teachers = await Teacher.find({})
        res.status(200).json(teachers)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const createTeacher = async (req,res) => {
    try {
        const books = await Teacher.create(req.body)
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}



const getTeacher = async(req,res) => {
    try {
        const {id} = req.params;

        const teachers = await Teacher.findById(id);
        res.status(200).json(teachers)
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const updateTeacher = async(req,res) => {
    try {
        const {id} = req.params;
        const updatedteacher = await Teacher.findByIdAndUpdate(id, req.body)
        res.status(200).json(updatedteacher)
    } catch (error) {
        res.status(500).json({message : error.message}) 
    }
}

const deleteTeacher = async(req,res) => {
    try {
        const {id} = req.params;
        const deleteTeacher = await Teacher.findByIdAndDelete(id,req.body)
        res.status(200).json(deleteTeacher)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

module.exports = {
    getTeachers,
    getTeacher,
    updateTeacher,
    deleteTeacher,
    createTeacher
}