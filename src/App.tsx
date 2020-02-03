import React from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Party from './components/Party';
import Input from './components/Input';
import { resolvers } from './resolvers';

const cache = new InMemoryCache({});

const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql/',
	cache: cache,
	clientState: {
		defaults: {
			deletedCards: [
				{
					id: null,
					__typename: 'deletedCard',
				},
			],
			rickSlot: {
				name: '',
				image: '',
			},
			mortySlot: {
				name: '',
				image: '',
			},
		},
		resolvers: resolvers,
	},
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Input />
			<Party />
		</ApolloProvider>
	);
};

export default App;
