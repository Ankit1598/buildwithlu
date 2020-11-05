import styled from "styled-components";
import {Link} from 'react-router-dom'
import bg from '../../images/Hero/hero1.jpg'

export const HeroContainer = styled.div`
	background-image: url(${bg});
	background-size: cover;
	margin-top: -150px;
	color: #000;
	display: flex;
	justify-content: center;
	padding: 0 30px;
	height: calc(100vh + 80px);
	z-index: 1;
	flex-direction: column;
`;

export const HeroRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
	margin-top: 130px;
`;

export const HeroColumn = styled.div`
	margin-bottom: 15px;
	flex: ${({filler}) => (filler? '0': '1')};
	padding: 0 50px;

	@media screen and (max-width: 768px) {
		max-width: 100%;
		flex-basis: 100%;
		display: flex;
		justify-content: center;
		padding: 0;
	}
`;

export const Tags = styled.div`
	display: flex;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
	color: #fff;
	@media screen and (max-width: 768px) {
		padding-bottom: 0;
	}
`;

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
`;

export const SubHeading = styled.p`
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
`;

export const ImgWrapper = styled.div`
	max-width: 555px;
	display: flex;
	justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;

export const Button = styled(Link)`
	font-family: Circular;
	font-weight: bold;
	font-size: 25px;
	letter-spacing: 1px;
	display: inline-block;
	padding: 8px 28px;
	border-radius: 3px;
	transition: 0.5s;
	margin: 10px;
	height: fit-content;
	align-self: center;
	color: #000000;
	background: #ffffff;
	text-decoration: none;
`;