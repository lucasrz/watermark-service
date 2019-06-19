const express = require('express');
const fs  = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');
const typeDefs = fs.readFileSync(path.resolve(__dirname, './schema/schema.graphql')).toString('utf8');
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();
const server = new ApolloServer({ schema: schema });
server.applyMiddleware({ app });

module.exports = {
  app: app,
  server: server
}
