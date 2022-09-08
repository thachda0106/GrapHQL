const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Book {
		id: ID
		name: String
		genre: String
		author: Author
	}

	type Author {
		id: ID!
		name: String
		age: Int
		books: [Book]
	}

	# ROOT TYPE - THIS IS COMMENT IN GQL
	type Query {
		books: [Book]
		book(id: ID!): Book
		authors: [Author]
		author(id: ID!): Author
	}

	#
	type Mutation {
		createAuthor(id: ID!, name: String, age: Int): Author
		createBook(id: ID!, name: String, genre: Int, authorId: ID!): Book
	}
`;
module.exports = typeDefs;
