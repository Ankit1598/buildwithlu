import React, { useState, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Logo from "../../images/logo.png";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavItem,
	NavTarget,
	NavLink,
} from "./Navbar.elements";
import DropDown from "../DropDown/DropDown";

function Navbar() {
	const [click, setClick] = useState(false);
	const [mobile, setMobile] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showMobile = () => {
		if (window.innerWidth <= 960) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	};

	useEffect(() => {
		showMobile();
	}, []);

	window.addEventListener("resize", showMobile);

	const student = [
		{
			title: "Student Ambassador Program",
			path: "https://letsupgrade.in/campus/",
		},
		{
			title: "Build With LetsUpgrade",
			path: "https://letsupgrade.in/BWLU",
		},
	];
	const working = [
		{
			title: "Industry Ambassador Program",
			path: "https://letsupgrade.in/ambassador/",
		},
		{
			title: "Build With LetsUpgrade",
			path: "https://letsupgrade.in/BWLU",
		},
	];

	const [dropStudent, setDropStudent] = useState(false);
	const [dropWorking, setDropWorking] = useState(false);

	const onMouseEnter = (dropPos) => {
		if (window.innerWidth < 960) {
			setDropStudent(false);
			setDropWorking(false);
		} else {
			switch (dropPos) {
				case 1:
					setDropStudent(true);
					break;
				case 2:
					setDropWorking(true);
					break;
				default:
					break;
			}
		}
	};

	const onMouseLeave = (dropPos) => {
		if (window.innerWidth < 960) {
			setDropStudent(false);
			setDropWorking(false);
		} else {
			switch (dropPos) {
				case 1:
					setDropStudent(false);
					break;
				case 2:
					setDropWorking(false);
					break;
				default:
					break;
			}
		}
	};

	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo href='https://letsupgrade.in/' onClick={closeMobileMenu}>
						<NavIcon src={Logo} alt='LetsUpgrade Logo' />
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{click ? <CloseIcon /> : <MenuIcon />}
					</MobileIcon>
					<NavMenu onClick={handleClick} click={click}>
						<NavItem>
							<NavTarget active to='/' onClick={closeMobileMenu}>
								Home
							</NavTarget>
						</NavItem>
						<NavItem>
							<NavLink
								href='https://letsupgrade.in/#programs'
								onClick={closeMobileMenu}
							>
								Programs
							</NavLink>
						</NavItem>
						<NavItem
							onMouseEnter={() => onMouseEnter(1)}
							onMouseLeave={() => onMouseLeave(1)}
						>
							<NavLink to='/' onClick={closeMobileMenu}>
								Students
								{mobile ? null : <ExpandMoreIcon />}
							</NavLink>
							{dropStudent && <DropDown menu={student} />}
						</NavItem>
						<NavItem
							onMouseEnter={() => onMouseEnter(2)}
							onMouseLeave={() => onMouseLeave(2)}
						>
							<NavLink to='/' onClick={closeMobileMenu}>
								Working Professionals
								{mobile ? null : <ExpandMoreIcon />}
							</NavLink>
							{dropWorking && <DropDown menu={working} />}
						</NavItem>
						<NavItem>
							<NavLink href='https://program.letsupgrade.in/jr/' onClick={closeMobileMenu}>
								Jr.
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='https://community.letsupgrade.in/' onClick={closeMobileMenu}>
								Community
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink button href='https://community.letsupgrade.in/' onClick={closeMobileMenu}>
								Login
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='https://community.letsupgrade.in/' onClick={closeMobileMenu}>
								Sign Up
							</NavLink>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
}

export default Navbar;
