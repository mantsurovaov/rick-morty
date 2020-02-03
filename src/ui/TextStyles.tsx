import styled from 'styled-components';

export const FontStyle = styled.div`
	@import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';
	font-family: Roboto;
`;

export const FlexWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
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
