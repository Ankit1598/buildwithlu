import React from "react";
import { Container } from "../../global-styles";
import {
	InfoSec,
	InfoRow,
	InfoColumn,
	TextWrapper,
	Heading,
	SubTitle,
	ImgWrapper,
	Img,
} from "./InfoSection.elements";

function InfoSection({
	imgStart,
	headline,
	description,
	img,
	alt,
	start,
}) {
	console.log(img);
	return (
		<>
			<InfoSec>
				<Container>
					<InfoRow imgStart={imgStart}>
						<InfoColumn>
							<TextWrapper>
								<Heading>{headline}</Heading>
								<SubTitle>{description}</SubTitle>
							</TextWrapper>
						</InfoColumn>
						<InfoColumn>
							<ImgWrapper start={start}>
								<Img src={img} alt={alt} />
							</ImgWrapper>
						</InfoColumn>
					</InfoRow>
				</Container>
			</InfoSec>
		</>
	);
}

export default InfoSection;
