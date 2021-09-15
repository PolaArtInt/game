import style from './navbar.module.css';
import cn from 'classnames';

const NavBar = ({ handleShowMenu, onShowMenu }) => {
	const handleClick = () => {
		handleShowMenu && handleShowMenu();
	};

	return (
		<div>
			<nav className={style.root}>
				<div className={style.navWrapper}>
					<p className={style.brand}>
						LOGO
					</p>
					<a className={cn(style.menuButton, { [onShowMenu]: style.active })} onClick={handleClick} href="#s">
						<span />
					</a>
				</div>
			</nav>
		</div>
	)
}

export default NavBar;