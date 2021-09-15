import { useState } from 'react';
import HomePage from "./routes/Home/index.js";
import GamePage from "./routes/Game/index.js";

function App() {
	const [page, setPage] = useState('app');

	const handleChangePage = (page) => {
		setPage(page);
	}

	switch (page) {
		case "app":
			return <HomePage onChangePage={handleChangePage} />
		case "game":
			return <GamePage onChangePage={handleChangePage} />
		default:
			return <HomePage />
	}
};

export default App;
