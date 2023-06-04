import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

function startServer({ typeDefs, resolvers }) {
  const server = new ApolloServer({ typeDefs, resolvers });

  mongoose
    .connect("mongodb://root:example@127.0.0.1:27017/admin", {
      useNewUrlPArser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => console.error(err));

  server
    .listen()
    .then(({ url }) => console.log(`🚀 Bei, server is running at ${url}`))
    .catch((err) => console.error(err));
}

export default startServer;
