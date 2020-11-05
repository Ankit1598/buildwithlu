import styled from "styled-components";

export const TagContainer = styled.div`
	display: flex;
	margin: 0px 10px;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	border-radius: 3px;
	padding: 5px 15px;

	&:hover {
		background: black;
		color: white;
		transition: 0.5s;
	}
`;