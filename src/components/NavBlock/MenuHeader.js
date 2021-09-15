import { useState } from 'react';
import Menu from './Menu.js';
import NavBar from './NavBar.js';

const MenuHeader = ({ handleShowMenu }) => {
	const [isActive, setActive] = useState(false);

	const hangleShowMenu = () => {
		setActive(isActive);
	};

	return (
		<>
			<Menu onShowMenu={handleShowMenu} />
			<NavBar onShowMenu={handleShowMenu} />
		</>
	);
};

export default MenuHeader;