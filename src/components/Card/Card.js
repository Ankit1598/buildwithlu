import React from "react";
import {
	CardContainer,
	CardContent,
	ImgWrapper,
	Img,
	TextWrapper,
	Heading,
	SubHeading,
	Ratings,
} from "./Card.elements";
import img from "../../images/Eligibility.jpeg";
import StarRateIcon from '@material-ui/icons/StarRate';

function Card({ feed, image, name, rating, desc }) {
	return (
		<>
			<CardContainer>
				<CardContent>
					{feed ? (
						<ImgWrapper feed>
							<Img src={image} alt='Project Img' />
						</ImgWrapper>
					) : (
						<ImgWrapper>
							<Img src={img} alt='Project Img' />
						</ImgWrapper>
					)}

					<TextWrapper feed={feed}>
						<Heading>{name}</Heading>
						{feed ? (
							<Ratings>
								{Array(rating)
									.fill()
									.map((_, i) => (
										<StarRateIcon />
									))}
							</Ratings>
						) : null}
						<SubHeading>{desc}</SubHeading>
					</TextWrapper>
				</CardContent>
			</CardContainer>
		</>
	);
}

export default Card;
