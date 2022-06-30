const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = gql`
type Question{
  _id:ID!
  questionName: String
  option1: String
  option2: String
  option3: String
  category:String
}
type Category{
  _id:ID!
  categoryName:String
  questionslist:[Question]

}
  type Query {
    hello: String
    getAllPosts:[Question]
    getPostById(id:ID): Question
    getAllCategories:[Category]
  }

  input QuestionInput{
  questionName: String
  option1: String
  option2: String
  option3: String
  category:String
  }

  type Mutation{
    createPost(post:QuestionInput):Question
    deletePost(id:ID):String
    updatePost(id:ID,post:QuestionInput):Question
    createCategory(categoryName:String ):Category
  }
`;
module.exports= typeDefs