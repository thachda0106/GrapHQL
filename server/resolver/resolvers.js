const { authors, books } = require('../staticData');
const Books = require('../models/Book');
const Authors = require('../models/Author');

const resolvers = {
	// query
	Query: {
		books: async () => await Books.find({}),
		book: async (parent, args) => {
			return await Books.findById(args.id);
		},
		authors: async () => Authors.find({}),
		author: async (parent, args) => {
			return await Authors.findById(args.id);
		}
	},
	Book: {
		author: async (parent, args) => {
			return await Authors.findOne({ authorId: parent._id });
		}
	},
	Author: {
		books: async (parent, args) => {
			return await Books.find({ authorId: parent._id });
		}
	},
	// mutation
	Mutation: {
		createAuthor: async (parent, args) => {
			let newAuthor = await Authors.create({ ...args });
			return newAuthor;
		},
		createBook: async (parent, args) => {
			let newBook = await Books.create({ ...args });
			return newBook;
		}
	}
};

module.exports = resolvers;
