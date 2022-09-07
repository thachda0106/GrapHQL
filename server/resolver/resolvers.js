const { authors, books } = require('../staticData');
const resolvers = {
	Query: {
		books: () => books,
		authors: () => authors
	}
};

module.exports = resolvers;
