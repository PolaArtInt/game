import Header from '../../components/HeaderBlock/Header.js';
import Footer from '../../components/FooterBlock/Footer.js';
import Layout from '../../components/LayoutsBlock/Layout.js';
import PokemonCard from '../../components/CardBlock/PokemonCard.js';
import MenuHeader from '../../components/NavBlock/MenuHeader.js';

import POKEMONS from '../../data/POKEMONS.json';

import background1 from '../../img/bg-1.jpg';
import background2 from '../../img/bg-2.jpg';
import cardsImg from '../../img/cards-1.jpg';

import style from './home.module.css';


const HomePage = ({ onChangePage }) => {
	const appStyle = {style};

	const handleClickButton = (page) => {
		onChangePage && onChangePage(page);
	};

  return (
    <>
			<MenuHeader />
			<Header 
				style={appStyle}
				title="The Pokémon Card Game"
				descr="This is simple triple triad card game"
				onClickButton={handleClickButton}
			/>
			<Layout 
				style={appStyle}
				title="The Game rules"
				urlBg={ background1 }
			>
				<p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
				<p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
				Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
				<div className={style.flex}>
					<img src={cardsImg} alt="pokemon cards" className={style.flex_img}/>
				</div>
			</Layout>
			
			<Layout 
				style={appStyle}
				title="Flip the card"
				colorBg="transparent"
			>	
			
				<div className={style.flex}>
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
			<Layout 
				style={appStyle}
				title="This is title"
				urlBg={ background2 }
			/>
			<Footer />
		</>
  );
}

export default HomePage;