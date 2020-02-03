import styled from 'styled-components';
import { FontStyle } from './TextStyles';

interface IProps {
	src?: string;
}

export const PartySlot = styled(FontStyle)`
	width: 180px;
	height: 220px;
	background: no-repeat center url(${(props: IProps) => props.src});
	background-size: cover;
	margin: 15px;
`;

export const PartyCard = styled(PartySlot)`
	background: no-repeat center/95% #dadada;
	color: #ffffff;
	font-style: normal;
	font-weight: 300;
	font-size: 24px;
	line-height: 28px;
	position: relative;
`;
