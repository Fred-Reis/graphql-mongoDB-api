import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

function startServer({ typeDefs, resolvers }) {
  const server = new ApolloServer({ typeDefs, resolvers });

  mongoose.connect("mongodb://localhost:27017/graphql", {
    useNewUrlPArser: true,
    useUnifiedTopology: true,
  });

  server
    .listen()
    .then(({ url }) => console.log(`🚀 Bei, server is running at ${url}`))
    .catch((err) => console.error(err));
}

export default startServer;
