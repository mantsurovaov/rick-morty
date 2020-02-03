import { GET_DELETED_CARDS } from './components/FetchedPhotos';

export const resolvers = {
	Mutation: {
		saveToSlot: (_: any, args: any, { cache }: any) => {
			if (args.name.toLowerCase().includes('rick')) {
				cache.writeData({
					data: {
						rickSlot: {
							name: args.name,
							image: args.image,
							__typename: 'rickSlot',
						},
					},
				});
			}

			if (args.name.toLowerCase().includes('morty')) {
				cache.writeData({
					data: {
						mortySlot: {
							name: args.name,
							image: args.image,
							__typename: 'mortySlot',
						},
					},
				});
			}
		},
		addDeletedCard: (_: any, args: any, { cache }: any) => {
			const { deletedCards } = cache.readQuery({ query: GET_DELETED_CARDS });
			const newDeletedCard = {
				id: args.id,
				__typename: 'deletedCard',
			};

			cache.writeData({
				data: {
					deletedCards: [...deletedCards, newDeletedCard],
				},
			});
		},
	},
};
