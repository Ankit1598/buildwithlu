import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegisterSec = styled.div`
	color: #fff;
	padding: 50px;
	background: #000;
`;

export const RegisterRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 0 100px;

	@media screen and (max-width: 768px) {
		padding: 0;
	}
`;

export const RegisterColumn = styled.div`
	flex: 1;
	padding: 0.75rem;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 768px) {
		max-width: 100%;
		flex-basis: 100%;
	}
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	display: flex;
	flex-direction: column;
	margin: auto;
`;

export const Heading = styled.h1`
	margin: 0;
`;

export const SubHeading = styled.p`
	margin: 0 auto 0;
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