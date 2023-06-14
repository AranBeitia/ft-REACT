import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'
import { User } from './views/user/User'
import { Home } from './views/home/Home'
import Header from './components/Header/header'

function App() {
	return (
		<>
			<BrowserRouter>
				<GlobalProvider>
					<Header />
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/user" element={<User />} />
					</Routes>
				</GlobalProvider>
			</BrowserRouter>
		</>
	)
}

export default App
