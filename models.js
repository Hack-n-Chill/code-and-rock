const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const juschema = new Schema({
    email:{
       type:String,
       required:true
    },
    password:{
       type:String,
       required:true
    }
}, { timestamps: true });

const Student = mongoose.model('Student', juschema);
module.exports = Student;

