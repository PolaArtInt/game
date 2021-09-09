import style from './layout.module.css';

const Layout = ({ title, descr, urlBg, colorBg = 'black' }) => {
	const styleRoot = urlBg ? { backgroundImage: `url(${urlBg})` } : { backgroundColor: `${colorBg}`};
	return (
		<div style={styleRoot}>
			<section className={style.root}>
				<div className={style.wrapper}>
					<article>
						<div className={style.title}>
							<h3>{title}</h3>
							<span className={style.separator}></span>
						</div>
						<div className={style.desc.full}>
							<p>{descr}</p>
						</div>
					</article>
				</div>
			</section>
		</div>
	)
}

export default Layout;