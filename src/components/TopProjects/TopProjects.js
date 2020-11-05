import React from "react";
import { Grid } from "@material-ui/core";
import {
	ProjectSec,
	ProjectRow,
	ProjectColumn,
	ImgWrapper,
	Img,
} from "./TopProjects.elements";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TopProjects(data) {
	var settings = {
		infinite: true,
		fade: true,
		adaptiveHeight: true,
		autoplay: false,
		autoplaySpeed: 3000,
		cssEase: "linear",
	};
	// Object.entries(data).map((key, value) => {
	// 	key[1].map((key) => {
	// 		console.log(`name: ${key.name}`);
	// 		console.log(`banner: ${key.banner}`);
	// 		console.log(`mentors: ${key.mentors}`);
	// 		console.log(`managers: ${key.managers}`);
	// 		console.log(`participants: ${key.participants}`);
	// 	});
	// });
	return (
		<>
			<Slider {...settings}>
			<ProjectSec>
				<ProjectRow>
					<ProjectColumn>
						<ImgWrapper>
							<Img src={require("../../images/Top_project_team_wise/projects/Bot Code.png").default} />
						</ImgWrapper>
					</ProjectColumn>
					<ProjectColumn>
						<Grid container spacing={5}>
								<Grid container xs={12} justify='center'>
									<Grid item xs={12}>
										<h1>Mentor</h1>
									</Grid>
									<Grid container xs={12} justify='center'>
										<Grid item xs={6} sm={4}>
											<Img
												user
												src={require("../../images/Top_project_team_wise/mentor/Apoorve Goyal (Men-Bot Code).jpg.png").default}
											/>
										</Grid>
										<Grid item xs={6} sm={4}>
											<Img
												user
												src={require("../../images/Top_project_team_wise/mentor/Maaz-bin Asad (Men-Bot Code).jpeg.png").default}
											/>
										</Grid>
										<Grid item xs={12} sm={4}>
											<Img
												user
												src={require("../../images/Top_project_team_wise/mentor/Abdul Basith (Men- Bot Code).jpeg.png").default}
											/>
										</Grid>
									</Grid>
								</Grid>
								<Grid container>
									<Grid item xs={12}>
										<h1>Top Contributors</h1>
									</Grid>
									<Grid item xs={6} sm={4}>
										<Img user src={require("../../images/Top_project_team_wise/participants/ANKIT CHAUDHARI.png").default} />
									</Grid>
									<Grid item xs={6} sm={4}>
										<Img user src={require("../../images/Top_project_team_wise/participants/Abhishek Gupta.png").default} />
									</Grid>
									<Grid item xs={12} sm={4}>
										<Img user src={require("../../images/Top_project_team_wise/participants/user.png").default} />
									</Grid>
								</Grid>
							</Grid>
						{/* <ImgWrapper>
							<Img src={require("../../images/temp.png").default} />
						</ImgWrapper> */}
					</ProjectColumn>
				</ProjectRow>
			</ProjectSec>
			<ProjectSec>
				<ProjectRow>
					<ProjectColumn>
						<ImgWrapper>
							<Img src={require("../../images/Top_project_team_wise/projects/Algorithmic Treasure.png").default} />
						</ImgWrapper>
					</ProjectColumn>
					<ProjectColumn>
						<Grid container spacing={5}>
							<Grid container xs={12} justify='center'>
								<Grid item xs={12}>
									<h1>Mentor & Manager</h1>
								</Grid>
								<Grid item xs={12}>
									<Img user src={require("../../images/Top_project_team_wise/mentor/Abhijeet Tripathy (Men- Algorithmic Treasure).jpeg.png").default} />
								</Grid>
							</Grid>
							<Grid container>
								<Grid item xs={12}>
									<h1>Top Contributors</h1>
								</Grid>
								<Grid item xs={6} sm={4}>
									<Img user src={require("../../images/Top_project_team_wise/participants/Ashish Chawda.png").default} />
								</Grid>
								<Grid item xs={6} sm={4}>
									<Img user src={require("../../images/Top_project_team_wise/participants/Himanshi Soni.png").default} />
								</Grid>
								<Grid item xs={12} sm={4}>
									<Img user src={require("../../images/Top_project_team_wise/participants/Priya Gupta.png").default} />
								</Grid>
							</Grid>
						</Grid>
						{/* <ImgWrapper>
							<Img src={require("../../images/temp.png").default} />
						</ImgWrapper> */}
					</ProjectColumn>
				</ProjectRow>
			</ProjectSec>
			<ProjectSec>
				<ProjectRow>
					<ProjectColumn>
						<ImgWrapper>
							<Img src={require("../../images/Top_project_team_wise/projects/FootStep App.png").default} />
						</ImgWrapper>
					</ProjectColumn>
					<ProjectColumn>
						<Grid container spacing={5}>
							<Grid container xs={12} justify='center'>
								<Grid item xs={12}>
									<h1>Mentor</h1>
								</Grid>
								<Grid container xs={12}>
									<Grid item xs={12}>
										<Img user src={require("../../images/Top_project_team_wise/mentor/Dhruv (Men- Footstep).jpeg.png").default} />
									</Grid>
								</Grid>
							</Grid>
							<Grid container>
								<Grid item xs={12}>
									<h1>Top Contributors</h1>
								</Grid>
								<Grid item xs={6} sm={4}>
									<Img user src={require("../../images/Top_project_team_wise/participants/Bijay Adhikari.png").default} />
								</Grid>
								<Grid item xs={6} sm={4}>
									<Img user src={require("../../images/Top_project_team_wise/participants/Shruti shri T.png").default} />
								</Grid>
								<Grid item xs={12} sm={4}>
									<Img user src={require("../../images/Top_project_team_wise/participants/user.png").default} />
								</Grid>
							</Grid>
						</Grid>
						{/* <ImgWrapper>
								<Img src={require("../../images/temp.png").default} />
							</ImgWrapper> */}
					</ProjectColumn>
				</ProjectRow>
			</ProjectSec>
			</Slider>
		</>
	);
}
