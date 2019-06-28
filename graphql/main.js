const express = require('express');
const fs  = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');
const logger = require('../logger');
const typeDefs = fs.readFileSync(path.resolve(__dirname, './schema/schema.graphql')).toString('utf8');
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
let app;
let server;

try {
  app = express();
  server = new ApolloServer({ schema: schema });
  server.applyMiddleware({ app });


} catch (e) {
  logger.log({
    level: 'error',
    message: `Creating server instance: ${e}`,
    source: 'GraphQL'
  });
}

module.exports = {
  app: app,
  server: server
}



