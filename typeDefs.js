const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = gql`
type Question{
  id:ID
  questionName: String
  option1: String
  option2: String
  option3: String
}
  type Query {
    hello: String
    getAllPosts:[Question]
    getPostById(id:ID): Question
  }
  
  input QuestionInput{
  questionName: String
  option1: String
  option2: String
  option3: String
  }

  type Mutation{
    createPost(post:QuestionInput):Question
    deletePost(id:ID):String
    updatePost(id:ID,post:QuestionInput):Question
  }
`;
module.exports= typeDefs