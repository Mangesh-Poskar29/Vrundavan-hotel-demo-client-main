// src/common/Loading.js

import React from "react";
import logo from "../../assets/Logo.png"; // Update with the correct path to your logo

const Loading = () => {
	const loadingStyles = {
		container: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh', // Full height of the viewport
			backgroundColor: '#fff', // Optional: background color
		},
		logo: {
			width: '150px', // Adjust the logo size
			marginBottom: '20px',
		},
		spinner: {
			border: '8px solid #f3f3f3', // Light grey
			borderTop: '8px solid #3498db', // Blue
			borderRadius: '50%',
			width: '50px', // Spinner size
			height: '50px', // Spinner size
			animation: 'spin 1s linear infinite',
		},
	};

	return (
		<div style={loadingStyles.container}>
			<img src={logo} alt="Loading..." style={loadingStyles.logo} />
			<div style={loadingStyles.spinner}></div>
			<style>
				{`
					@keyframes spin {
						0% { transform: rotate(0deg); }
						100% { transform: rotate(360deg); }
					}
				`}
			</style>
		</div>
	);
};

export default Loading;
