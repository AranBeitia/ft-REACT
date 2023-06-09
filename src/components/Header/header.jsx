import React from 'react'
import './header.styles.scss'

const header = () => {
	return (
		<nav className="menu-nav">
			<ul className="menu-nav__list">
				<li className="menu-nav__list-item">
					<a href="" className="menu-nav__link">
						Home
					</a>
				</li>
				<li className="menu-nav__list-item">
					<a href="" className="menu-nav__link">
						Contact
					</a>
				</li>
				<li className="menu-nav__list-item">
					<a href="" className="menu-nav__link menu-nav__link--actived">
						Profile
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default header
