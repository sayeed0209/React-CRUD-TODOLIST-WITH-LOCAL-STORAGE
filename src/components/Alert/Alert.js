import React, { useEffect } from 'react';

const Alert = ({ type, msg, hideAlert }) => {
	useEffect(() => {
		const timerId = setTimeout(() => {
			hideAlert();
		}, 3000);
		return () => clearTimeout(timerId);
	}, [hideAlert]);
	return (
		<section className="alert">
			<h3 className={`alert-${type}`}>{msg}</h3>
		</section>
	);
};

export default Alert;
