const Category = require('./models/category.js');
const Post = require('./models/question.js')
const resolvers = {
    Query: {
      hello: () => {
        return "Hello World";
      },
      getAllPosts: async ( )=>{
        const posts = await Post.find()
        return posts
      },
      getAllCategories:async()=>{
        const categories = await Category.find().populate('questionslist')
        return categories
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
        category = args.post.category
        console.log(category);
        const question =new Post({questionName,option1,option2,option3,category})
        await question.save();
        const cat  = await Category.findOne({categoryName:category})
        if(cat.questionslist==undefined || cat.questionslist==null){
          cat.questionslist=[]
        }
        cat.questionslist.push(question.id)
        await cat.save()
        console.log(cat);
        // const data= cat.populate("questionslist")
        // console.log(data);
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
      },
      createCategory:async(parent,args,context,info)=>{
        const categoryName = args.categoryName
        const category = new Category({categoryName})
        category.questionslist=[]
        await category.save()
        return category
        
      }
    }
  };

module.exports = resolvers