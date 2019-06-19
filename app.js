const graphQl = require('./graphql/main');
const grpc  = require('./grpc/main');

graphQl.app.listen(3000, () => {
  console.log(`GraphQL Server Started at http://localhost:3000${graphQl.server.graphqlPath}`);
});

graphQl.app.get('/', function (req, res) {
  res.send('Hello World!');
});

grpc.start('50051');



