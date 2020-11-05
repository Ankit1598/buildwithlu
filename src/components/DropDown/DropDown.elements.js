import styled from "styled-components";

export const DropDownContainer = styled.ul`
	position: absolute;
	top: 60px;
	list-style: none;
	text-align: start;
	padding: 0;
	border-radius: 0 0 10px 10px;
	background: #fff;
	display: ${({ click }) => (click ? "none" : "block")};
`;

export const DropDownList = styled.li`
	cursor: pointer;
`;

export const DropDownLink = styled.a`
	display: block;
	text-decoration: none;
	color: #000;
	padding: 6px 16px;
	&:hover {
		color: #f15025;
	}
`;
