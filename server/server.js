const express = require('express');

const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolvers');

async function startApolloServer(typeDefs, resolvers) {
	const app = express();

	const server = new ApolloServer({
		typeDefs,
		resolvers
	});

	await server.start();

	server.applyMiddleware({ app });

	app.listen(4000, () => {
		console.log(`Server listen on at http://localhost:${4000}${server.graphqlPath}`);
	});
}

startApolloServer(typeDefs, resolvers);
