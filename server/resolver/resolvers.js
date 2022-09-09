const { authors, books } = require('../staticData');
const Books = require('../models/Book');
const Authors = require('../models/Author');
const resolvers = {
	// query
	Query: {
		books: async (parent, args, { mdbQuery }) => {
			return await mdbQuery.findAllBooks();
		},
		book: async (parent, args, { mdbQuery }) => {
			return await mdbQuery.findBookById(args.id);
		},
		authors: async (parent, args, { mdbQuery }) => await mdbQuery.findAllAuthors(),
		author: async (parent, args, { mdbQuery }) => {
			return await mdbQuery.findAuthorById(args.id);
		}
	},
	Book: {
		author: async (parent, args, { mdbQuery }) => {
			return await mdbQuery.findAuthorById(parent.authorId);
		}
	},
	Author: {
		books: async (parent, args, { mdbQuery }) => {
			return await mdbQuery.findBooksByAuthorId(parent._id);
		}
	},
	// mutation
	Mutation: {
		createAuthor: async (parent, args, { mdbQuery }) => {
			let newAuthor = await mdbQuery.createAuthor(args);
			return newAuthor;
		},
		createBook: async (parent, args, { mdbQuery }) => {
			let newBook = await mdbQuery.createBook(args);
			return newBook;
		}
	}
};

module.exports = resolvers;
