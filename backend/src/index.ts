import { ApolloServer } from "apollo-server-express";
import express from "express";
import datasource from "./db";

import { buildSchema } from "type-graphql";

import cors from "cors";
import BookResolver from "./resolvers/book.resolver";

const app = express();

export interface MyContext {
  req: express.Request;
  res: express.Response;
}

export async function startServer() {
  const schema = await buildSchema({
    resolvers: [BookResolver],
    validate: false,
  });
  console.log("hello2");

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
  });
  await server.start();
  app.use("/", cors<cors.CorsRequest>({ origin: "*" }), express.json());
  await datasource.initialize();

  server.applyMiddleware({ app, path: "/" });

  await new Promise<void>((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server lancé sur http://localhost:4000`);
}

startServer();
