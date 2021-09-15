import style from './game.module.css';

const GamePage = ({ onChangePage }) => {
	
	const handleClickButton = (page) => {
		onChangePage && onChangePage(page);
	};
	
	return (
		<div className={style.flex}>
			<h1 className={style.header}>This is a Game Page!</h1>
			<button
				onClick={handleClickButton}
			>
				Return
			</button>
		</div>
	);
};

export default GamePage;