import React, { FunctionComponent } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ImgWrapper, CloseSign, PhotoCard } from '../ui/PhotoCard';
import { gql } from 'apollo-boost';

interface SaveToSlotData {
	name: string;
	image: string;
}

interface addDeletedCardData {
	id: number;
}

export const MUTATION_SAVE_TO_SLOT = gql`
	mutation($name: String!, $image: String!) {
		saveToSlot(name: $name, image: $image) @client
	}
`;

export const MUTATION_ADD_DELETED_CARD = gql`
	mutation($id: Int!) {
		addDeletedCard(id: $id) @client
	}
`;

export interface IFetchedPhotoProps {
	name: string;
	image: string;
	id: number;
}

const FetchedPhoto: FunctionComponent<IFetchedPhotoProps> = ({
	name,
	image,
	id,
}) => {
	const [saveToSlot] = useMutation<
		{ saveToSlot: SaveToSlotData },
		{ name: string; image: string }
	>(MUTATION_SAVE_TO_SLOT, {
		variables: { name: name, image: image },
	});

	const [addDeletedCard] = useMutation<
		{ addDeletedCard: addDeletedCardData },
		{ id: number }
	>(MUTATION_ADD_DELETED_CARD, {
		variables: { id: id },
	});

	return (
		<ImgWrapper>
			<CloseSign onClick={() => addDeletedCard()}>&times;</CloseSign>
			<PhotoCard onClick={() => saveToSlot()} src={image} />
		</ImgWrapper>
	);
};

export default FetchedPhoto;
