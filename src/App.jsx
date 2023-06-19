import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'
import GlobalStyles from './assets/styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './assets/styles/Theme'
import { User } from './views/user/User'
import { Home } from './views/home/Home'
import Header from './components/Header/header'

function App() {
	return (
		<>
			<BrowserRouter>
				<GlobalProvider>
					<ThemeProvider theme={darkTheme}>
						<GlobalStyles />
						<Header />
						<Routes>
							<Route path="/home" element={<Home />} />
							<Route path="/user" element={<User />} />
						</Routes>
					</ThemeProvider>
				</GlobalProvider>
			</BrowserRouter>
		</>
	)
}

export default App
