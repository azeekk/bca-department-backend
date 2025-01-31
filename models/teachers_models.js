const mongoose = require('mongoose')

const TeacherSchema = mongoose.Schema(
    {
        name: {
            type:String,
            required :  true
        },
        
        qualification: {
            type:String,
            required : true
        },

        imageURL : {
            type:String,
            required : true
        }
    },
    {
        timestamps:true
    }

);

const Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher;