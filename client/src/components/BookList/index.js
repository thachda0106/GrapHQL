import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BookDetails from '../BookDetails';
import { useQuery } from '@apollo/client';
import { getBooks } from '../../graphql/queries';
const BookList = () => {
	const [ bookId, setBookId ] = useState('');
	const { loading, error, data } = useQuery(getBooks);
	if (error) return <div>Error loading book</div>;
	return (
		<Row>
			<Col xs={4}>
				{!loading &&
					data.books.map((book) => {
						return (
							<Card
								onClick={() => setBookId(book.id)}
								key={book.id}
								border="info"
								text="info"
								className="text-center shadow my-3 p-2"
							>
								<Card.Body>{book.name}</Card.Body>
							</Card>
						);
					})}
			</Col>
			<Col>
				<BookDetails bookId={bookId} />
			</Col>
		</Row>
	);
};

export default BookList;
