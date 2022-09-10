import { gql } from '@apollo/client';

const getBooks = gql`
	query getAllBooks {
		books {
			name
			id
		}
	}
`;
const getBookByID = gql`
	query getBookByID($id: ID!) {
		book(id: $id) {
			id
			name
			genre
			author {
				id
				name
				age
				books {
					id
					name
				}
			}
		}
	}
`;

const getAuthors = gql`
	query getAuthorsQuery {
		authors {
			id
			name
		}
	}
`;
export { getBooks, getBookByID, getAuthors };
