import { useState } from 'react';
import style from './game.module.css';

const GamePage = ({ onChangePage, onClickButton }) => {
	const [page, setPage] = useState('game');

	const handleChangePage = () => {
		console.log('<New0 />');
		setPage('app');
	}

	const handleClick = () => {
		console.log('<New1 />');
		handleChangePage && handleChangePage(page);
	}
	
	return (
		<div className={style.flex}>
			<h1 className={style.header}>This is a Game Page!</h1>
			<button
				onClick={handleClick}
			>
				Return
			</button>
		</div>
	);
};

export default GamePage;