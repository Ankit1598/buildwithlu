import React from "react";
import {
	RegisterSec,
	RegisterRow,
	RegisterColumn,
	TextWrapper,
	Heading,
	SubHeading,
	Button,
} from "./Register.elements";

function Register() {
	return (
		<>
			<RegisterSec>
				<RegisterRow>
					<RegisterColumn>
						<TextWrapper>
							<Heading>JOIN LETSUPGRADE COMMUNITY</Heading>
							<SubHeading>
							Get Started with BWLU and help bring in new, excited developers to your open source community!
							</SubHeading>
						</TextWrapper>
					</RegisterColumn>
					<RegisterColumn>
						<Button to='/'> 🔥  Register</Button>
					</RegisterColumn>
				</RegisterRow>
			</RegisterSec>
		</>
	);
}

export default Register;
