import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useQuery, useMutation } from '@apollo/client';
import { getAuthors, getBooks } from '../graphql/queries';
import { addSingleBook } from '../graphql/mutations';
const Forms = () => {
	const [ newBook, setNewBook ] = useState({
		name: '',
		genre: '',
		authorId: ''
	});
	const onInputChange = (e) => {
		setNewBook({ ...newBook, [e.target.name]: e.target.value });
	};
	const onSubmit = (e) => {
		addBook({
			variables: {
				name: newBook.name,
				genre: newBook.genre,
				authorId: newBook.authorId
			},
			refetchQueries: [ { query: getBooks } ]
		});
		setNewBook({
			name: '',
			genre: '',
			authorId: ''
		});
	};
	//Graphql
	const { loading, error, data } = useQuery(getAuthors);
	const [ addBook, dataMutation ] = useMutation(addSingleBook);
	return (
		<Row>
			<Col>
				<Form>
					<Form.Group className="my-2">
						<Form.Control
							name="name"
							onChange={onInputChange}
							value={newBook.name}
							type="text"
							placeholder="Book name"
						/>
					</Form.Group>
					<Form.Group className="my-2">
						<Form.Control
							name="genre"
							onChange={onInputChange}
							value={newBook.genre}
							type="text"
							placeholder="Genre"
						/>
					</Form.Group>
					<Form.Group className="my-2">
						{loading ? (
							<p>Loading...</p>
						) : (
							<Form.Control name="authorId" onChange={onInputChange} value={newBook.authorId} as="select">
								<option value="" disabled>
									Select author
								</option>
								{data.authors.map((author) => (
									<option value={author.id} key={author.id}>
										{author.name}
									</option>
								))}
							</Form.Control>
						)}
					</Form.Group>
					<Button
						onClick={(e) => {
							e.preventDefault();
							onSubmit(e);
						}}
						className="float-right"
						variant="info"
						type="submit"
					>
						Add book
					</Button>
				</Form>
			</Col>
			<Col>
				<Form>
					<Form.Group className="invisible">
						<Form.Control />
					</Form.Group>
					<Form.Group className="my-2">
						<Form.Control type="text" placeholder="Author name" />
					</Form.Group>
					<Form.Group className="my-2">
						<Form.Control type="Number" placeholder="age" />
					</Form.Group>

					<Button className="float-right" variant="info" type="submit">
						Add author
					</Button>
				</Form>
			</Col>
		</Row>
	);
};

export default Forms;
