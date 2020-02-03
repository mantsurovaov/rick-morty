import styled from 'styled-components';

export const FontStyle = styled.div`
	@import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';
	font-family: Roboto;
`;

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

export const PhotoCard = styled(PartySlot)`
	cursor: pointer;
`;

export const FlexWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
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

export const ImgWrapper = styled.div`
	position: relative;
	display: inline-block;
`;

export const PlainText = styled(FontStyle)`
	font-style: normal;
	font-size: 24px;
	line-height: 35px;
	text-align: center;
	color: #000000;
`;

export const Header = styled(PlainText)`
	font-weight: bold;
	font-size: 30px;
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

export const SearchInput = styled.input`
	@import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';
	font-style: normal;
	font-weight: 300;
	font-size: 30px;
	line-height: 35px;
	font-family: Roboto;
	padding-left: 30px;
	margin: 0px auto;
	display: block;
	width: 810px;
	height: 80px;
	background: #ffffff;
	border: 1px solid #a0a0a0;
	box-sizing: border-box;
`;
