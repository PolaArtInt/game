import style from './about.module.css';

const AboutPage = ({ onChangePage }) => {
	
	const handleClickButton = (page) => {
		onChangePage && onChangePage(page);
	};
	
	return (
		<div>
			<h1>This is a About Page!</h1>
		</div>
	);
};

export default AboutPage;