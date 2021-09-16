import Layout from '../../components/LayoutsBlock/Layout.js';
import PokemonCard from '../../components/CardBlock/PokemonCard.js';

import POKEMONS from '../../data/POKEMONS.json';

import style from './game.module.css';
import style1 from '../Home/home.module.css';

const GamePage = ({ onChangePage }) => {
	const appStyle = {style1};
	const handleClickButton = (page) => {
		onChangePage && onChangePage(page);
	};
	
	return (
		<div className={style.flex}>
			<h1 className={style.header}>This is a Game Page!</h1>
			
			<Layout 
				style={appStyle}
				title="Flip the card"
				colorBg="transparent"
			>	
				<div className={style1.flex}>
					{
						
						POKEMONS.map((item, index) => 
							<PokemonCard 
								key={item.id}
								name={item.name}
								img={item.img}
								id={item.id}
								type={item.type} 
								values={item.values}
							/>
							)
					}
				</div>
			</Layout>

			<button
				onClick={handleClickButton}
			>
				Return
			</button>
		</div>
	);
};

export default GamePage;