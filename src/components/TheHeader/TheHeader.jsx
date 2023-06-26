import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserState'

import { Menu } from 'antd'
import { LogoutOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons'

const TheHeader = () => {
	const { token, logout } = useContext(UserContext)
	const navigate = useNavigate()

	const logoutUser = () => {
		logout()
		setTimeout(() => {
			navigate('/')
		}, 2000)
	}

	return (
		<nav className="header">
			<Menu mode="horizontal" defaultSelectedKeys={['profile']}>
				{token ? (
					<>
						<Menu.Item
							key="logout"
							icon={<LogoutOutlined />}
							onClick={logoutUser}
						>
							<Link to="/">Logout</Link>
						</Menu.Item>
						<Menu.Item key="profile" icon={<UserOutlined />}>
							<Link to="/profile">Profile</Link>
						</Menu.Item>
						<Menu.Item key="products" icon={<LoginOutlined />}>
							<Link to="/products">Products</Link>
						</Menu.Item>
						<Menu.Item key="cart" icon={<LoginOutlined />}>
							<Link to="/cart">Cart</Link>
						</Menu.Item>
					</>
				) : (
					<Menu.Item key="login" icon={<LoginOutlined />}>
						<Link to="/">Login</Link>
					</Menu.Item>
				)}
			</Menu>
		</nav>
	)
}

export default TheHeader
