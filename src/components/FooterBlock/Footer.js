import style from './footer-s.module.css';

const Footer = () => {
	return (
		<div>
			<footer>
				<div className={style.wrapper}>
					<h3>THANKS FOR VISITING</h3>
					<p>© 2021 #ReactMarathon.</p>
				</div>
			</footer>
		</div>
	)
}

export default Footer;