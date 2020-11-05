import styled from "styled-components";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

export const StatSec = styled.div`
	color: #000;
	padding: 50px;
	background: #fff;
`;

export const StatRow = styled.div`
	display: flex;
	padding: 0 100px;
	flex-wrap: wrap;
	align-items: center;
	text-align: center;

	@media screen and (max-width: 768px) {
		padding: 0;
	}
`;

export const StatColumn = styled.div`
	flex: 1;
	padding: 0.75rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		padding: 0.75rem 2rem;
	}
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	display: flex;
	flex-direction: column;
	margin: auto;
`;

export const Title = styled.div`
display: flex;
justify-content: center;
padding-top: 50px;
text-align: center;
`

export const Heading = styled.h1`
	margin: 0 auto 0;
	font-size: 40px;
`;

export const SubHeading = styled.p`
	margin: 0 auto 0;
`;

export const Button = styled(Link)`
	background-color: #fff;
	color: #363636;
	cursor: pointer;
	padding: calc(0.5em - 1px) 1em;
	font-size: 1.5rem;
	border: 1px solid transparent;
	line-height: 1.5;
	text-decoration: none;
	float: right;
	margin-right: 50px;
`;

export const ImgWrapper = styled.div`
	width: 100px;
	min-width: 100px;
	margin-bottom: -20px;
	z-index: 1;
`;

export const Img = styled.img`
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
`;

export const CountWrapper = styled.div`
	padding: 25px 0;
	background: #f150251f;
	border-radius: 33px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 24px;
`;

export const Count = styled(CountUp)`
	font-size: 38px;
`;
