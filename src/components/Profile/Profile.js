import React, { useState } from "react";
import {
	ProfileSec,
	ProfileRow,
	ProfileColumn,
	ProfileHeader,
	SearchContainer,
	SearchLabel,
	SearchInput,
	SearchButton,
} from "./Profile.elements";
import axios from "axios";

function Profile() {
	const [showResult, setShowResult] = useState(false);
	const [username, setUserName] = useState("");
	const [name, setName] = useState("");
	const [following, setFollowing] = useState(0);
	const [followers, setFollowers] = useState(0);
	const [publicRepo, setPublicRepo] = useState(0);
	const [avatarUrl, setAvatarUrl] = useState("");

	const handle = () => {
		setShowResult(!showResult);
		fetchData();
	};
	const fetchData = async () => {
		const result = await axios(`https://api.github.com/users/${username}`);
		const response = JSON.parse(result.request.response);
		console.log(typeof response);
		setData(response);
		const [{ name, following, followers, public_repos, avatar_url }] = response;
		console.log(name);
	};

	const setData = ({
		name,
		following,
		followers,
		public_repos,
		avatar_url,
	}) => {
		setName(name);
		setFollowing(following);
		setFollowers(followers);
		setPublicRepo(public_repos);
		setAvatarUrl(avatar_url);
	};

	return (
		<>
			<ProfileSec>
				<ProfileRow>
					<ProfileColumn>
						{showResult ? (
							<>
								<h1>Result</h1>
								<h2>username: {username}</h2>
								<h2>name: {name}</h2>
								<h2>following: {following}</h2>
								<h2>followers: {followers}</h2>
								<h2>publicRepo: {publicRepo}</h2>
								<h2>avatarUrl: {avatarUrl}</h2>
								<SearchButton onClick={() => setShowResult(!showResult)}>
									Search
								</SearchButton>
							</>
						) : (
							<>
								<ProfileHeader>Profile LookUp</ProfileHeader>
								<ProfileRow>
									<SearchContainer>
										<SearchInput
											autoFocus
											required
											label='GitHub Username'
											variant='outlined'
											onChange={(text) => setUserName(text.target.value)}
										/>
										<SearchButton onClick={handle}>Search</SearchButton>
									</SearchContainer>
								</ProfileRow>
							</>
						)}
					</ProfileColumn>
				</ProfileRow>
			</ProfileSec>
		</>
	);
}

export default Profile;
