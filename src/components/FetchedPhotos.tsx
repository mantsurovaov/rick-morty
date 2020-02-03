import React, { FunctionComponent } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { PlainText } from '../ui/TextStyles';
import FetchedPhoto, { IFetchedPhotoProps } from './FetchedPhoto';

interface results {
	id: number;
	name: string;
	image: string;
}

interface character {
	results: results[];
}
interface getPhotosData {
	characters: character;
}

interface getPhotosVars {
	name: string;
}

export const GET_PHOTOS = gql`
	query getPhotos($name: String!) {
		characters(filter: { name: $name }) {
			results {
				id
				name
				image
			}
		}
	}
`;

interface deletedCardData {
	id: number;
}

interface getDeletedCardsData {
	deletedCards: deletedCardData[];
}

export const GET_DELETED_CARDS = gql`
	query {
		deletedCards @client {
			id
		}
	}
`;

interface IFetchedPhotosProps {
	name: string;
}

interface IIdType {
	id: number;
}

const FetchedPhotos: FunctionComponent<IFetchedPhotosProps> = ({ name }) => {
	const { loading, error, data } = useQuery<getPhotosData, getPhotosVars>(
		GET_PHOTOS,
		{
			variables: { name },
		},
	);

	const { data: deletedCardsData } = useQuery<getDeletedCardsData, {}>(
		GET_DELETED_CARDS,
	);

	const deletedCardsIds = deletedCardsData.deletedCards.map(
		({ id }: IIdType) => id,
	);

	if (loading) {
		return <PlainText>Loading...</PlainText>;
	}

	if (error) {
		return <PlainText>Error :(</PlainText>;
	}

	return (
		<>
			{data.characters.results == null ? (
				<PlainText>Not Found</PlainText>
			) : (
				data.characters.results
					.filter(({ id }: IIdType) => !deletedCardsIds.includes(id))
					.map(({ name, image, id }: IFetchedPhotoProps) => {
						return <FetchedPhoto name={name} image={image} key={id} id={id} />;
					})
			)}
		</>
	);
};

export default FetchedPhotos;
