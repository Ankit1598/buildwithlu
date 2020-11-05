import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { Link } from 'react-router-dom'

export const ProfileSec = styled.div`
	color: #000;
	padding: 20px 0;
	background: #fff;
`;

export const ProfileRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	text-align: center;
	justify-content: center;
`;

export const ProfileColumn = styled.div`
	margin-bottom: 15px;
	flex: 1;
	padding: 0 100px;
	width: 75%;

	@media screen and (max-width: 768px) {
		max-width: 100%;
		flex-basis: 100%;
		display: flex;
		justify-content: center;
		padding: 0;
	}
`;

export const ProfileHeader = styled.h1`
	font-size: 3em;
	margin-bottom: 32px;
	color: #ef6f00;
	width: 100%;
	user-select: none;
`;

export const SearchContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 30px;
	align-items: center;
`;

export const SearchLabel = styled.h2`
	font-size: 1.7rem;
	margin-bottom: 5px;
	color: #313131;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const SearchInput = styled(TextField)`
	& .Mui-focused {
		color: #000 !important;
		font-weight: bold;
	}

	& fieldset {
		border-color: #ef6f00 !important;
	}

`;

export const SearchButton = styled.button`
	margin-top: 50px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: #ef6f00;
	color: #ffffff;
	box-shadow: 0 7px 15px #ffae3e;
	position: relative;
	padding: 20px 35px;
	font-size: 1.2rem;
	font-weight: bold;
	text-transform: uppercase;
	text-decoration: none;
	border: none;
	outline: none;
	text-align: center;
	border-radius: 5px;
	cursor: pointer;
	letter-spacing: 1px;
	transition: all 0.3s ease-in-out;
	border-radius: 5px;
	letter-spacing: 1px;

	&:hover {
		background-color: #ef6f00;
		color: #ffffff;
		box-shadow: 0 7px 30px #ff9a0e;
	}
	&:active {
		background-color: #ef6f00;
		color: #ffffff;
		top: 2px;
	}
	&:focus {
		background-color: #ef6f00;
		color: #ffffff;
	}
`;
