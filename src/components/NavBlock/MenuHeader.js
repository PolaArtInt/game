import { useState } from 'react';

import Menu from './Menu.js';
import NavBar from './NavBar.js';


const MenuHeader = ({ bgActive }) => {
	const [isOpen, setOpen] = useState(null);
	
	const handleClickMenu = () => {
		setOpen(prevState => !prevState);
	};

	return (
		<>
			<Menu isOpen={isOpen} />
			<NavBar isOpen={isOpen} bgActive={bgActive} onClickMenu={handleClickMenu} />
		</>
	);
};

export default MenuHeader;