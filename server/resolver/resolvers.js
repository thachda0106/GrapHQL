const { authors, books } = require('../staticData');
const resolvers = {
	// query
	Query: {
		books: () => books,
		book: (parent, args) => {
			return books.find((book) => book.id == args.id);
		},
		authors: () => authors,
		author: (parent, args) => {
			return authors.find((author) => author.id == args.id);
		}
	},
	Book: {
		author: (parent, args) => {
			return authors.find((author) => author.id == parent.authorId);
		}
	},
	Author: {
		books: (parent, args) => {
			return books.filter((book) => book.authorId == parent.id);
		}
	},
	// mutation
	Mutation: {
		createAuthor: (parent, args) => args,
		createBook: (parent, args) => args
	}
};

module.exports = resolvers;
