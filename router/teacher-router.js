const express = require('express');
const Teacher = require('../models/teachers_models')
const router = express.Router();
const {getTeachers, getTeacher, updateTeacher, deleteTeacher, createTeacher} = require('../controller/teacher.controller')

router.get('/api/teachers', getTeachers)
router.get('/api/teacher/:id',getTeacher)
router.post('/',createTeacher)
router.put('/:id', updateTeacher)
router.delete('/:id',deleteTeacher)

module.exports = router;