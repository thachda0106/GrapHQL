import { gql } from '@apollo/client';

const addSingleBook = gql`
	mutation addSingleBook($name: String, $genre: String, $authorId: ID!) {
		createBook(authorId: $authorId, name: $name, genre: $genre) {
			id
			name
		}
	}
`;

export { addSingleBook };
