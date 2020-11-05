import React from "react";
import Participants from "../../images/statistics/participants.svg";
import Mentor from "../../images/statistics/mentor.svg";
import ProjectManager from "../../images/statistics/projectManager.svg";
import Projects from "../../images/statistics/projects.svg";
import {
	StatSec,
	StatRow,
	StatColumn,Title, Heading,
	ImgWrapper,
	Img,
	CountWrapper,
	Count,
} from "./Statistics.elements";
function Statistics() {
	return (
		<>
		<Title>
		<Heading>Glipmses of Previous Season</Heading>
		</Title>
			<StatSec>
				<StatRow>
					<StatColumn>
						<ImgWrapper>
							<Img src={Participants} />
						</ImgWrapper>
						<CountWrapper>
							<Count end={250} delay={0.5}>+</Count>
							Participants
						</CountWrapper>
					</StatColumn>
					<StatColumn>
						<ImgWrapper>
							<Img src={Mentor} />
						</ImgWrapper>
						<CountWrapper>
							<Count end={40} delay={0.5} />
							Mentors
						</CountWrapper>
					</StatColumn>
					<StatColumn>
						<ImgWrapper>
							<Img src={ProjectManager} />
						</ImgWrapper>
						<CountWrapper>
							<Count end={5} delay={0.5} />
							Project Managers
						</CountWrapper>
					</StatColumn>
					<StatColumn>
						<ImgWrapper>
							<Img src={Projects} />
						</ImgWrapper>
						<CountWrapper>
							<Count end={18} delay={0.5} />
							Projects
						</CountWrapper>
					</StatColumn>
				</StatRow>
			</StatSec>
		</>
	);
}

export default Statistics;
