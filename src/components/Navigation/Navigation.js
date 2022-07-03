import React from 'react'
import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Navigation.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg';

export const Navigation = () => {
	return (
		<Fragment>
			<div className='navigation'>
				<Link to='/' className='logo'>
					<Logo />
				</Link>

				<ul className='nav-links'>
					<li><Link className='nav-link' to='/shop'>SHOP</Link></li>
					<li><Link className='nav-link' to='/sign-in'>SIGN IN</Link></li>
				</ul>
			</div>

			<Outlet />
		</Fragment>
	)
}
