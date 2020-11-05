import React from "react";
import {
	HeroContainer,
	HeroRow,
	HeroColumn,
	TextWrapper,
	Heading,
	SubHeading,Button
} from "./HeroSection.elements";

function HeroSection() {
	return (
		<>
			<HeroContainer>
				<HeroRow>
					<HeroColumn>
						<TextWrapper>
							<Heading>
							Start building solutions with BWLU!
							</Heading>
							<SubHeading>
								We encourage students to enhance the skills that are essential in the world of programming, all the while developing a deep appreciation for the world of open-source and provide an inclusive engagement with creative minds all around the world.
							</SubHeading><Button to='/'> 🔥  Register</Button>
						</TextWrapper>
					</HeroColumn>
					<HeroColumn filler>
						{/* <ImgWrapper>
							<Img src={img} alt='Hero Img' />
						</ImgWrapper> */}
					</HeroColumn>
				</HeroRow>
			</HeroContainer>
		</>
	);
}

export default HeroSection;
