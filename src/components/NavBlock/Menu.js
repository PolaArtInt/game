import {Link} from 'react-router-dom';

import style from './menu.module.css';
import cn from 'classnames';

const MENU = [
	{
		title: 'HOME',
		to: '/',
	},
	{
		title: 'GAME',
		to: 'game',
	},
	{
		title: 'ABOUT',
		to: 'about',
	},
	{
		title: 'CONTACT',
		to: 'contact',
	},
];

const Menu = ({ isOpen, onClickMenu, setOpen }) => {
	const hideMenu = () => {
		// setOpen(prevState => !prevState);
		// onClickMenu();
	}
	return (
		<div>
			<div className={cn(style.menuContainer, { 
				[style.active]: isOpen === true,
				[style.deactive]: isOpen === false
			})}>
				<div className={style.overlay} />
					<div>
						<ul>
							{
								MENU.map(({title, to}, index) => (
									<li key={index}>
										<Link to={to} onClick={hideMenu}>
											{title}
										</Link>
									</li>
								))
							}
						</ul>
					</div>
			</div>
		</div>
	);
};

export default Menu;