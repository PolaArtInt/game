import style from './contact.module.css';

const ContactPage = ({ onChangePage }) => {
	
	const handleClickButton = (page) => {
		onChangePage && onChangePage(page);
	};
	
	return (
		<div>
			<h1>This is a Contact Page!</h1>
		</div>
	);
};

export default ContactPage;