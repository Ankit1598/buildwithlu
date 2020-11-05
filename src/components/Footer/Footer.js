import React from "react";
import { Grid } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
	Foot,
	FooterContainer,
	FooterLogo,FooterIconLink, FooterIcon,
	SubTitle,
	FooterNav,
	FooterList,
	FooterItem,
	FooterItemLink,
	FooterCredits,
	FooterMadeBy,
	FooterRights,
} from "./Footer.elements";
import logo from "../../images/logo-alt.png";

function Footer() {
	return (
		<>
			<Foot>
				<FooterContainer>
					<FooterLogo>
					<FooterIconLink href='https://letsupgrade.in/'>
						<FooterIcon src={logo} alt='LetsUpgrade Logo' />
						</FooterIconLink>
						<SubTitle>
							On a Mission to UpSkill 10 Million People for Tech Industry with
							Live Instructors and Amazing Community for Upgrading Together
						</SubTitle>
					</FooterLogo>
					<FooterNav>
						<Grid container spacing={2}>
							<Grid item xs={6} lg={3}>
								<FooterList>
									<FooterItem header>Languages & Tools</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://letsupgrade.in/advance/python/'>Python</FooterItemLink>
									</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://letsupgrade.in/essential/javascript'>Javascript</FooterItemLink>
									</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://letsupgrade.in/#programs'>C++</FooterItemLink>
									</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://letsupgrade.in/essential/java'>Java</FooterItemLink>
									</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://letsupgrade.in/#programs'>Go Lang</FooterItemLink>
									</FooterItem>
								</FooterList>
							</Grid>
							<Grid item xs={6} lg={3}>
								<FooterList>
									<FooterItem header>Programs & Certifications</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://letsupgrade.in/essential/datascience'>Data Science</FooterItemLink>
									</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://program.letsupgrade.in/aiml/'>
											Artificial Intelligence & Machine Learning
										</FooterItemLink>
									</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://letsupgrade.in/essential/dm'>Digital Marketing</FooterItemLink>
									</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://letsupgrade.in/advance/aws'>AWS & Cloud Computing</FooterItemLink>
									</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://letsupgrade.in/advance/cybersecurity'>Cyber Security</FooterItemLink>
									</FooterItem>
								</FooterList>
							</Grid>
							<Grid item xs={6} lg={3}>
								<FooterList>
									<FooterItem header>Help & Support</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://letsupgrade.in/contactus/'>Contact</FooterItemLink>
									</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://community.letsupgrade.in/'>Community Guidelines</FooterItemLink>
									</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://community.letsupgrade.in/'>Terms & Conditions</FooterItemLink>
									</FooterItem>
									<FooterItem>
										<FooterItemLink href='/'>Privacy Policy</FooterItemLink>
									</FooterItem>
								</FooterList>
							</Grid>
							<Grid item xs={6} lg={3}>
								<FooterList>
									<FooterItem header>LetsUpgrade</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://community.letsupgrade.in/'>Community</FooterItemLink>
									</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://www.youtube.com/channel/UCWUDiLzQZr4VDHNyMsVYn-g'>Youtube</FooterItemLink>
									</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://www.facebook.com/LetsUpgrade.in/'>Facebook</FooterItemLink>
									</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://www.instagram.com/letsupgrade.in/'>Instagram</FooterItemLink>
									</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://twitter.com/LetsUpgrade_in'>Twitter</FooterItemLink>
									</FooterItem>
									<FooterItem>
										<FooterItemLink href='https://www.linkedin.com/company/letsupgrade/'>LinkedIn</FooterItemLink>
									</FooterItem>
								</FooterList>
							</Grid>
						</Grid>
					</FooterNav>
				</FooterContainer>
				<FooterCredits>
					<FooterMadeBy>
						Made with <FavoriteIcon /> by BWLU Team
					</FooterMadeBy>
					<FooterRights>LetsUpgrade EdTech Pvt. Ltd. © 2020</FooterRights>
				</FooterCredits>
			</Foot>
		</>
	);
}

export default Footer;
