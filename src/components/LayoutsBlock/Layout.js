import style from './layout.module.css';

const Layout = ({ title, descr, urlBg = false, colorBg = false, children }) => {
	
	const styleRoot = { 
		background: colorBg ? colorBg : urlBg ? `url(${urlBg})` : 'none',
		backgroundRepeat: 'no-repeat',
  	backgroundSize: 'cover'
	}
	return (
		<div>
			<section className={style.root} style={styleRoot}>
				<div className={style.wrapper}>
					<article>
						<div className={style.title}>
							<h3>{title}</h3>
							<span className={style.separator}></span>
						</div>
						<div className={`${style.desc} ${style.full}`}>
							<p>{descr}</p>
							{children}
						</div>
					</article>
				</div>
			</section>
		</div>
	)
}

export default Layout;