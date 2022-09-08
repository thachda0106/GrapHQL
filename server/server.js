const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolvers');

const connectDB = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://thachda0106:Thachngoc.1447@graphql.8h5szuj.mongodb.net/?retryWrites=true&w=majority',
			{
				serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
			}
		);
		console.log('connected DB');
	} catch (error) {
		console.log(error.message);
	}
};
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
connectDB();
