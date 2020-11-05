import React from "react";
import {
	TCContainer,
	Heading,
	ImgWrapper,
	Img,
} from "./StarPerformer.elements";
import { Grid } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function StarPerformer(data) {
	var settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		pauseOnHover: false,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1320,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<TCContainer>
				<Heading>Star Performers</Heading>
				<Slider {...settings}>
					{Object.entries(data).map((key, value) => {
						return key[1].map((key, index) => {
							return (
								<Grid container justify='center' key={index}>
									<Grid item lg={3}>
										<ImgWrapper>
											<Img src={key} />
										</ImgWrapper>
									</Grid>
								</Grid>
							);
						});
					})}
					{/* <Grid container justify='center'>
						<Grid item lg={3}>
							<ImgWrapper>
								<Img src={user} />
							</ImgWrapper>
						</Grid>
					</Grid>
					<Grid container justify='center'>
						<Grid item lg={3}>
							<ImgWrapper>
								<Img src={user} />
							</ImgWrapper>
						</Grid>
					</Grid>
					<Grid container justify='center'>
						<Grid item lg={3}>
							<ImgWrapper>
								<Img src={user} />
							</ImgWrapper>
						</Grid>
					</Grid>
					<Grid container justify='center'>
						<Grid item lg={3}>
							<ImgWrapper>
								<Img src={user} />
							</ImgWrapper>
						</Grid>
					</Grid>
					<Grid container justify='center'>
						<Grid item lg={3}>
							<ImgWrapper>
								<Img src={user} />
							</ImgWrapper>
						</Grid>
					</Grid>
					<Grid container justify='center'>
						<Grid item lg={3}>
							<ImgWrapper>
								<Img src={user} />
							</ImgWrapper>
						</Grid>
					</Grid> */}
				</Slider>
			</TCContainer>
		</>
	);
}

export default StarPerformer;
