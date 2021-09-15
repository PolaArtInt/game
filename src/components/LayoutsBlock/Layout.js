import style from './layout.module.css';
import cn from 'classnames';

const Layout = ({ title, urlBg = false, colorBg = false, children }) => {
	
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
						<div className={cn(style.desc, style.full)}>
							{children}
						</div>
					</article>
				</div>
			</section>
		</div>
	)
}

export default Layout;