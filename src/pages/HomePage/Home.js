import React from "react";
import { homeObj1, projectsData, starPerformerData, feedbackData } from "./Data";
import {
	HeroSection,
	InfoSection,
	Register,
	Statistics,
	TopProjects,
	StarPerformer,
	Feedback,
} from "../../components";

function Home() {
	return (
		<>
			<HeroSection />
			<InfoSection {...homeObj1} />
			<Register />
			<Statistics />
			<TopProjects data={projectsData} />
			<StarPerformer data={starPerformerData} />
			<Feedback data={feedbackData} />
		</>
	);
}

export default Home;
