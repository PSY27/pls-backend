const Post = require('./models/Post.model')
const resolvers = {
    Query: {
      hello: () => {
        return "Hello World";
      },
      getAllPosts: async ( )=>{
        const posts = await Post.find()
        return posts
      },
      getPostById: async (parent,{id},context,info)=>{
        return await Post.findById(id)
      }
    },
    Mutation:{
      createPost:async (parent,args,context,info)=>{
        questionName = args.post.questionName
        option1 = args.post.option1
        option2 = args.post.option2
        option3 = args.post.option3
        const question =new Post({questionName,option1,option2,option3})
        await question.save();
        return question;
      },
      deletePost: async(parent,args,context,info)=>{
        const {id} = args
        await Post.findByIdAndDelete(id)
        return "Ok Question deleted"
      },
      updatePost:async(parent,args,context,info)=>{
        const {id} = args
        questionName = args.post.questionName
        option1 = args.post.option1
        option2 = args.post.option2
        option3 = args.post.option3
        const post =await Post.findByIdAndUpdate(id,{questionName,option1,option2,option3},{new:true});
        return post
      }
    }
  };

module.exports = resolvers