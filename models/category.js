const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
categoryName:{
    type:String,
    unique:true,
    required:true,  
},
questionslist:[
    {type:mongoose.Schema.Types.ObjectId,
    ref:'Question'}
]
})
const Category = mongoose.model('Category',categorySchema);
module.exports = Category;