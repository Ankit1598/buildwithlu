import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export const Nav = styled.nav`
	background: #fff;
	color: #000;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 999;
	font-size: 16px;
	font-family: "Circular Std Medium";
	font-weight: 400;
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 50px;
	padding-left: 50px;
	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export const NavLogo = styled.a`
	display: flex;
	align-items: center;
`;

export const NavIcon = styled.img`
	height: 50px;
`;

export const MobileIcon = styled.div`
	display: none;
	& .MuiSvgIcon-root {
		color: #000;
		font-size: 2rem;
	}

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: calc(100vh - 80px);
		position: absolute;
		top: 80px;
		left: ${({ click }) => (click ? 0 : "-100%")};
		opacity: 1;
		transition: all 0.5s ease;
		color: #000;
		padding-left: 0;
		margin-top: 0;
	}
`;

export const NavItem = styled.li`
	border-bottom: 2px solid transparent;
	&:hover {
		color: #f15025;
	}
	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;

export const NavItemBtn = styled.li`
	@media screen and (max-width: 960px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
	}
	& .MuiButton-contained {
		color: #fff;
		background: #000 !important;
	}
`;

export const NavTarget = styled(Link)`
	color: ${({ active }) => (active ? "#f15025": "#000")};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	&:hover {
		color: #f15025;
		transition: all 0.3s ease;
	}
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 1rem 0;
		width: 100%;
		display: table;
		&:hover {
			color: #f15025;
			transition: all 0.3s ease;
		}
	}
`;

export const NavLink = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	background: ${({ button }) => (button ? "#000" : "#fff")};
	color: ${({ button }) => (button ? "#fff" : "#000")};
	&:hover {
		color: ${({ button }) => (button ? "#fff" : "#f15025")};

		transition: all 0.3s ease;
	}
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 1rem 2rem;
		width: 0;
		margin: auto;
		display: table;
		&:hover {
			color: #f15025;
			transition: all 0.3s ease;
		}
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;

export const ColorButton = styled(Button)``;
