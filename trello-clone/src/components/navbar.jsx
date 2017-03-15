import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="navbar-container">
			<div className="nav-items-left">
				<a href="#">Home</a>
				<a href="#">Detail</a>
				<a href="#">Edit</a>
			</div>
			<div className="nav-logo">
				<a href="#">LOGO</a>
			</div>
			<div className="nav-items-right">
				<a href="#">LOGIN</a>
				<a href="#">LOGOUT</a>
				<a href="#">PROFILE</a>
			</div>
		</div>
	)
}


export default Navbar