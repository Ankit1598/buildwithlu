import React from "react";
import Card from "../Card/Card";
import { Feeds, Heading } from "./Feedback.elements";
import { Grid } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Feedback(data) {
	// console.log(data)
	// Object.entries(data).map((key, value) => {
	// 	key[1].map((key) => {
	// 		console.log(`name: ${key.name}`);
	// 		console.log(`image: ${key.img}`);
	// 		console.log(`rating: ${key.rating}`);
	// 		console.log(`desc: ${key.desc}`);
	// 	});
	// });
	var settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: false,
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
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<Feeds>
				<Heading>Feedbacks</Heading>
				<Slider {...settings}>
				 {Object.entries(data).map((key, value) => {
				 	return (key[1].map((key) => {
				 		return (<Grid container justify='center'>
						<Grid item lg={3}>
							<Card
								feed
								image={key.img}
								name={key.name}
								rating={key.rating}
								desc={key.desc}
							/>
						</Grid>
					</Grid>)
				 	}))
				 })}
					{/* <Grid container justify='center'>
						<Grid item lg={3}>
							<Card
								feed
								name='User 1'
								rating={5}
								desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsam incidunt modi vero vel voluptatem repudiandae quibusdam corporis. Ratione hic quia quae nemo adipisci iure unde at numquam placeat vel!'
							/>
						</Grid>
					</Grid>
					<Grid container justify='center'>
						<Grid item lg={3}>
							<Card
								feed
								name='User 2'
								rating={5}
								desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsam incidunt modi vero vel voluptatem repudiandae quibusdam corporis. Ratione hic quia quae nemo adipisci iure unde at numquam placeat vel!'
							/>
						</Grid>
					</Grid>
					<Grid container justify='center'>
						<Grid item lg={3}>
							<Card
								feed
								name='User 3'
								rating={5}
								desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsam incidunt modi vero vel voluptatem repudiandae quibusdam corporis. Ratione hic quia quae nemo adipisci iure unde at numquam placeat vel!'
							/>
						</Grid>
					</Grid>
					<Grid container justify='center'>
						<Grid item lg={3}>
							<Card
								feed
								name='User 4'
								rating={5}
								desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsam incidunt modi vero vel voluptatem repudiandae quibusdam corporis. Ratione hic quia quae nemo adipisci iure unde at numquam placeat vel!'
							/>
						</Grid>
					</Grid>
					<Grid container justify='center'>
						<Grid item lg={3}>
							<Card
								feed
								name='User 5'
								rating={5}
								desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsam incidunt modi vero vel voluptatem repudiandae quibusdam corporis. Ratione hic quia quae nemo adipisci iure unde at numquam placeat vel!'
							/>
						</Grid>
					</Grid>
					<Grid container justify='center'>
						<Grid item lg={3}>
							<Card
								feed
								name='User 6'
								rating={5}
								desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsam incidunt modi vero vel voluptatem repudiandae quibusdam corporis. Ratione hic quia quae nemo adipisci iure unde at numquam placeat vel!'
							/>
						</Grid>
					</Grid> */}
				</Slider>
			</Feeds>
		</>
	);
}

export default Feedback;
