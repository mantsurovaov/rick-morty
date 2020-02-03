import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Header, PartySlot, PartyCard, FlexWrapper } from '../styles';

interface getRickSlotData {
	rickSlot: { name: string; image: string };
}

export const GET_RICK_SLOT = gql`
	query {
		rickSlot @client {
			name
			image
		}
	}
`;

interface getMortySlotData {
	mortySlot: { name: string; image: string };
}

export const GET_MORTY_SLOT = gql`
	query {
		mortySlot @client {
			name
			image
		}
	}
`;

const Party = () => {
	const { data: rickData } = useQuery<getRickSlotData>(GET_RICK_SLOT);
	const { data: mortyData } = useQuery<getMortySlotData>(GET_MORTY_SLOT);

	const rickComponent = !rickData ? (
		<PartyCard>
			<div
				style={{
					height: '20%',
					position: 'absolute',
					bottom: '5px',
					textAlign: 'center',
					paddingLeft: '60px',
				}}
			>
				RICK
			</div>
		</PartyCard>
	) : (
		<PartySlot src={rickData.rickSlot.image} />
	);
	const mortyComponent = !mortyData ? (
		<PartyCard>
			<div
				style={{
					height: '20%',
					position: 'absolute',
					bottom: '5px',
					textAlign: 'center',
					paddingLeft: '60px',
				}}
			>
				MORTY
			</div>
		</PartyCard>
	) : (
		<PartySlot src={mortyData.mortySlot.image} />
	);
	return (
		<>
			<Header>PARTY</Header>
			<FlexWrapper>
				{rickComponent}
				{mortyComponent}
			</FlexWrapper>
		</>
	);
};

export default Party;
