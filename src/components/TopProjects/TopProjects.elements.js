import styled from "styled-components";

export const ProjectSec = styled.div`
	color: #ff7700;
	padding: 20px 0;
	background: #fff;
`;

export const ProjectRow = styled.div`
	display: flex;
	/* margin: 0 -15px -15px -15px; */
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const ProjectColumn = styled.div`
	margin-bottom: 15px;
	flex: 1;
	padding: 0 50px;

	& .MuiGrid-root {
		text-align: center;
	}

	@media screen and (max-width: 768px) {
		max-width: 100%;
		flex-basis: 100%;
		display: flex;
		justify-content: center;
		padding: 0;
	}

	@media screen and (max-width: 992px) {
		max-width: 100%;
		flex-basis: 100%;
		display: flex;
		justify-content: center;
		padding: 0 25px;
	}
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
	@media screen and (max-width: 768px) {
		padding-bottom: 0;
	}
`;

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 2.5rem;
	line-height: 1.1;
	font-weight: 600;
`;

export const SubTitle = styled.p`
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
	width: ${({ user }) => (user ? "150px" : "100%")};
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;
