import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'PT Sans', sans-serif;
	overflow-x: hidden;
 } 

	h1, div {
		font-family: 'Roboto', sans-serif;
		letter-spacing: 1px;
	}
	p {
		font-family: 'Nunito', sans-serif;
		font-weight: 700;
	}
`;

export const Container = styled.div`
	z-index: 1;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 50px;
	padding-left: 50px;
	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export default GlobalStyle;
