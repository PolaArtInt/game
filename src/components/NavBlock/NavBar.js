import style from './navbar.module.css';
import cn from 'classnames';

const NavBar = ({isOpen, bgActive = false, onClickMenu}) => {
	return (
		<nav
			className={cn(style.root, style.navbar, { [style.bgActive]: bgActive
			})}>
			<div className={style.navWrapper}>
				<p className={style.brand}>
					LOGO
				</p>
				<div 
					className={cn(style.menuButton, { [style.active]: isOpen })} 
					onClick={onClickMenu}>
					<span />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;