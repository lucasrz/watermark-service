const graphQl = require('./graphql/main');
const grpc  = require('./grpc/main');
const logger = require('./logger')
const graphqlPort = '3000';

graphQl.app.listen(graphqlPort, () => {
  logger.log({
    level: 'info',
    message: `Server Started at http://localhost:${graphqlPort}`,
    source: 'GraphQL'
  });
});

graphQl.app.get('/', function (req, res) {
  res.send('Hello World!');
});

grpc.start('50051');



