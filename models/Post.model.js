const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
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
const Post = mongoose.model('post',PostSchema);
module.exports = Post;