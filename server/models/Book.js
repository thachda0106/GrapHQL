const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const BookSchema = new Schema(
	{
		name: String,
		genre: String,
		authorId: ObjectId
	},
	{
		collection: 'books',
		versionKey: false
	}
);

var Books = new mongoose.model('books', BookSchema);

module.exports = {
	Books
};
