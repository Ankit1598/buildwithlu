import styled from "styled-components";

export const Foot = styled.div`
	background: #0a0a0a;
	color: #fff;
	padding: 3rem 7rem 2rem;

	@media screen and (max-width: 768px) {
		padding: 3rem 1.5rem 2rem;
	}
`;

export const FooterContainer = styled.div`
	padding-bottom: 25px;
	display: flex;
	font-family: "Circular Std Medium";

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const FooterLogo = styled.div`
	width: 25%;
	padding: 0 20px;

	@media screen and (max-width: 768px) {
		width: 100%;
		padding: 0;
	}
`;

export const FooterIconLink = styled.a`
	display: flex;
	align-items: center;
`;

export const FooterIcon = styled.img`
	width: 50%;
`;

export const SubTitle = styled.p`
	font-size: 0.75rem;
`;

export const FooterNav = styled.div`
	flex: 1;
	display: flex;
`;

export const FooterList = styled.ul`
	padding: 0;
	margin: 0;
`;

export const FooterItem = styled.li`
	list-style-type: none;
	padding: 0;
	margin: 0;
	font-size: 1em;
	font-weight: 400;
	line-height: 1.5;
	color: ${({ header }) => (header ? "#f15025" : "#fff")};
	&:hover {
		color: #f15025;
	}
`;

export const FooterItemLink = styled.a`
	color: ${({ header }) => (header ? "#f15025" : "#fff")};
	cursor: pointer;
	text-decoration: none;
	&:hover {
		color: #f15025;
	}
`;

export const FooterCredits = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`;

export const FooterMadeBy = styled.div`
	padding: 5px;

	& .MuiSvgIcon-root {
		fill: #ff0000;
	}
`;

export const FooterRights = styled.div`
	padding: 5px;
`;
