const Books = require('./models/Book');
const Authors = require('./models/Author');

const mdbQuery = {
	findAllBooks: async () => await Books.find({}),
	findBookById: async (id) => await Books.findById(id),
	findBooksByAuthorId: async (authorId) => await Books.find({ authorId }),
	findAllAuthors: async () => await Authors.find({}),
	findAuthorById: async (id) => await Authors.findById(id),
	createBook: async (data) => await Books.create({ ...data }),
	createAuthor: async (data) => await Authors.create({ ...data })
};

module.exports = mdbQuery;
