const {
  makeExecutableSchema,
  addMockFunctionsToSchema,
  mockServer
} = require('graphql-tools');
const fs  = require('fs');
const path = require('path');
const { graphql } = require('graphql');
const testCaseA = {
  id: 'Test case A',
  query: `
    query {
      getWatermark(content: "book") {
        title
        author
        content
        topic
      }
    }
  `,
  expected: {
    title: 'Hello World',
    content: 'Hello World',
    author: 'Hello World',
    topic: 'Hello World'
  }
};

const testCaseB = {
  id: 'Test case A',
  query: `
    query {
      getWatermark(content: "journal") {
        title
        author
        content
      }
    }
  `,
  expected: {
    title: 'Hello World',
    content: 'Hello World',
    author: 'Hello World'
  }
};

describe('GraphQL Schema', () => {
  const typeDefs = fs.readFileSync(path.resolve(__dirname, './schema/schema.graphql')).toString('utf8');
  
  const mockSchema = makeExecutableSchema({ typeDefs });

  addMockFunctionsToSchema({ schema: mockSchema });

  it('Should have valid type definitions', async () => {
    expect(async () => {
      const MockServer = mockServer(typeDefs);

      await MockServer.query(`{ __schema { types { name } } }`);
    }).not.toThrow();
  });

  it(`Should return the right data for the query: ${testCaseA.id}`, async () => {
    graphql(mockSchema, testCaseA.query).then((result) => {
      expect(result.data.getWatermark.length).toBeGreaterThan(1);
      expect(result.data.getWatermark[0]).toEqual(testCaseA.expected);
      
    })
  });

  it(`Should return the right data for the query: ${testCaseB.id}`, async () => {
    graphql(mockSchema, testCaseB.query).then((result) => {
      expect(result.data.getWatermark.length).toBeGreaterThan(1);
      expect(result.data.getWatermark[0]).toEqual(testCaseB.expected);
    })
  });
});