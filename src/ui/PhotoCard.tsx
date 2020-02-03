import styled from 'styled-components';
import { PartySlot } from './PartyCard';

export const ImgWrapper = styled.div`
	position: relative;
	display: inline-block;
`;

export const PhotoCard = styled(PartySlot)`
	cursor: pointer;
`;

export const CloseSign = styled.span`
	position: absolute;
	top: 20px;
	right: 20px;
	z-index: 100;
	background-color: #fff;
	padding: 5px;
	color: #000;
	font-weight: bold;
	cursor: pointer;
	opacity: 0.7;
	text-align: center;
	line-height: 10px;
	border-radius: 50%;
	&:hover {
		opacity: 1;
	}
`;
