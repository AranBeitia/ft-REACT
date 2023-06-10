import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { User } from './views/user/User'
import { Home } from './views/home/Home'
import Header from './components/Header/header'

function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/user" element={<User />} />
				</Routes>
			</BrowserRouter>
		</React.Fragment>
	)
}

export default App
