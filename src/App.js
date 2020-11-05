import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from './pages/HomePage/Home'
import Profile from './pages/ProfilePage/Profile'

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					{/* <Route path='/profile' exact component={Profile} /> */}
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
