import React from 'react'
import './header.styles.scss'

import { Link } from 'react-router-dom'

const header = () => {
	return (
		<nav className="menu-nav">
			<ul className="menu-nav__list">
				<li className="menu-nav__list-item">
					<Link to="/home" className="menu-nav__link">
						Home
					</Link>
				</li>
				<li className="menu-nav__list-item">
					<Link to="/user" className="menu-nav__link">
						User
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default header
