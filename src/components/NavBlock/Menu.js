import style from './menu.module.css';
import cn from 'classnames';

const Menu = ({ handleShowMenu, onShowMenu }) => {
	const handleClick = () => {
		handleShowMenu && handleShowMenu();
	};

	return (
		<div>
			<div className={cn(style.menuContainer, { [onShowMenu]: style.active })} onClick={handleClick}>
				<div className={style.overlay}>
					<div className={style.menuItems}>
						<ul>
							<li>
								<a href="#welcome">
									HOME
								</a>
							</li>
							<li>
								<a href="#game">
									GAME
								</a>
							</li>
							<li>
								<a href="#about">
									ABOUT
								</a>
							</li>
							<li>
								<a href="#contact">
									CONTACT
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;