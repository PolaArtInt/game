import style from './not-found.module.css';

const NotFoundPage = ({ onChangePage }) => {
	
	const handleClickButton = (page) => {
		onChangePage && onChangePage(page);
	};
	
	return (
		<div>
			<h1>This is a 404 Page!</h1>
		</div>
	);
};

export default NotFoundPage;