import { useState } from 'react';
import cn from 'classnames';

import cardBackside from '../../img/card-back-side.jpg';
import style from './card.module.css';

const PokemonCard = ({ name, img, id, type, values }) => {
	const [isActive, setActive] = useState(false);

	const handleClick = () => {
		setActive(!isActive);
	}
	
	return (
	<div className={style.root} onClick={handleClick}>
		<div className={cn(style.pokemonCard, {[style.active]: isActive})}>
			<div className={style.cardFront}>
				<div className={cn(style.wrap, style.front)}>
					<div className={cn(style.pokemon, style[type])}>
						<div className={style.values}>
							<div className={cn(style.count, style.top)}>{values.top}</div>
							<div className={cn(style.count, style.right)}>{values.right}</div>
							<div className={cn(style.count, style.bottom)}>{values.bottom}</div>
							<div className={cn(style.count, style.left)}>{values.left}</div>
						</div>
						<div className={style.imgContainer}>
							<img src={img} alt={name} />
						</div>
						<div className={style.info}>
							<span className={style.number}>#{id}</span>
							<h3 className={style.name}>{name}</h3>
							<small className={style.type}>Type: <span>{type}</span></small>
						</div>
					</div>
				</div>
			</div>
			<div className={style.cardBack}>
					<div className={cn(style.wrap, style.back)}>
							<img src={cardBackside} alt="Сard Backed" />
					</div>
			</div>
		</div>
	</div>
	)
}

export default PokemonCard;