const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AuthorSchema = new Schema(
	{
		name: String,
		age: Number
	},
	{
		collection: 'authors',
		versionKey: false
	}
);

var Authors = mongoose.model('authors', AuthorSchema);

module.exports = Authors;
