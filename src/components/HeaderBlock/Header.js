import style from './header.module.css';

const Header = ({ title, descr }) => {
	return (
		<div>
			<header className={style.root}>
				<div className={style.forest}></div>
				<div className={style.container}>
					<h1>{title}</h1>
					<p>{descr}</p>
				</div>
			</header>
		</div>
	)
}

export default Header;