import styled from "styled-components";

export const CardContainer = styled.div`
	color: #000;
	width: 100%;
	max-width: 300px;
	margin: 20px auto;
	background: #fff;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);

@media screen and (min-width: 1280px) {
	min-width: 300px;
}
`;

export const CardContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
`;

export const ImgWrapper = styled.div`
	width: ${({feed}) => (feed ? '55%' : '100%')};
	min-width: ${({feed}) => (feed ? '0' : '100%')};
	margin-bottom: ${({feed}) => (feed ? '0' : '20px')};
`;

export const Img = styled.img`
	max-width: 100%;
	vertical-align: middle;
	display: inline-block !important;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: ${({ feed }) => (feed ? "20px" : "0")};
`;

export const Heading = styled.div`
	font-size: 1.25rem !important;
	font-weight: 600;
`;

export const SubHeading = styled.p`
	margin-bottom: 35px;
	padding: 0 10px;
	font-size: 0.75rem;
`;

export const Ratings = styled.div`
	& .MuiSvgIcon-root {
		fill: #ffd83d;
	}
`;
