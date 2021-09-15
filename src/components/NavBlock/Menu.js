import style from './menu.module.css';
import cn from 'classnames';

const MENU = [
	{
		title: 'HOME',
		to: '#welcome',
	},
	{
		title: 'GAME',
		to: '#game',
	},
	{
		title: 'ABOUT',
		to: '#about',
	},
	{
		title: 'CONTACT',
		to: '#contact',
	},
];

const Menu = ({ isOpen }) => {
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
										<a href={to}>
											{title}
										</a>
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