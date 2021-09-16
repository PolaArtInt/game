import { useRouteMatch, Route, Switch } from 'react-router-dom';
import cn from 'classnames';

import HomePage from "./routes/Home/index.js";
import GamePage from "./routes/Game/index.js";
import AboutPage from "./routes/About/index.js";
import ContactPage from "./routes/Contact/index.js";
import NotFoundPage from "./routes/NotFound/index.js";

import MenuHeader from "./components/NavBlock/MenuHeader.js";
import Footer from "./components/FooterBlock/Footer.js";

import style from './app.module.css';

function App() {
	const match = useRouteMatch('/');
	console.log(match);

	return (
		<Switch>
			<Route path="/404" component={NotFoundPage}/>
			<Route>
				<>
					<MenuHeader bgActive={!match.isExact} />
					<div className={cn(style.wrap, {
						[style.isHomePage]: match.isExact
					})}>
						<Switch>
							<Route path="/" exact component={HomePage} />
							{/* <Route path="/home" component={HomePage} /> */}
							<Route path="/game" component={GamePage} />
							<Route path="/about" component={AboutPage} />
							<Route path="/contact" component={ContactPage} />
							
						</Switch>
					</div>
					<Footer />
				</>
			</Route>
			
		</Switch>
	)
};

export default App;
