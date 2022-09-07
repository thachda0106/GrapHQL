const resolvers = {
	Query: {
		books: () => [
			{
				id: 1,
				name: ' De men phieu luu ky',
				genre: 'adventure'
			},
			{
				id: 2,
				name: 'lam giau khong kho',
				genre: 'education'
			}
		],
		authors: () => [
			{
				id: 1,
				name: 'Ngo Tat',
				age: 101
			},
			{
				id: 2,
				name: 'Nam Cao',
				age: 103
			},
			{
				id: 1,
				name: 'Vu Trong Phung',
				age: 106
			}
		]
	}
};

module.exports = resolvers;
