import React from 'react';
import Card from 'react-bootstrap/Card';
import { useQuery } from '@apollo/client';
import { getBookByID } from '../../graphql/queries';
const BookDetails = ({ bookId }) => {
	const { loading, error, data } = useQuery(getBookByID, {
		variables: {
			id: bookId
		},
		skip: bookId === ''
	});
	if (loading) return <p>loading...</p>;
	if (!data) return <div />;
	return (
		<Card bg="info" text="white" className="Shadow">
			<Card.Body>
				<Card.Title>{data.book.name}</Card.Title>
				<Card.Subtitle>{data.book.genre}</Card.Subtitle>
				<p>{data.book.author.name}</p>
				<p>age: {data.book.author.age}</p>
				<p>All books by thí author</p>
				<ul>{data.book.author.books.map((book) => <li key={book.id}>{book.name}</li>)}</ul>
			</Card.Body>
		</Card>
	);
};

export default BookDetails;
