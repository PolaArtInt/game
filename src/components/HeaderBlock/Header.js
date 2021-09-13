import style from './header.module.css';
import btnStyle from '../../components/ButtonBlock/button.module.css';

const Header = ({ title, descr, onClickButton }) => {
	const handleClick = () => {
		// console.log('<Header />');
		onClickButton && onClickButton('game');
	}
	return (
		<div>
			<header className={style.root}>
				<div className={style.forest}></div>
				<div className={style.container}>
					<h1>{title}</h1>
					<p>{descr}</p>
					<button
						className={btnStyle}
						onClick={handleClick}
					>
						Start Game!
					</button>
				</div>
			</header>
		</div>
	)
}

export default Header;