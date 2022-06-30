const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
    questionName:{
            type:String,
            required:true,
        },
    option1:{
            type:String,
            required:true,
        },
    option2:{
            type:String,
            required:true,
        },
    option3:{
            type:String,
            required:true,
        },
    });
const Question = mongoose.model('Question',questionSchema);
module.exports = Question;