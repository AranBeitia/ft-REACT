import './App.css'
import ListItems from './components/ListItems/ListItems'
// import WelcomeC from './components/welcomeC/welcomeC'
// import WelcomeF from './components/welcomeF/welcomeF'

// const Welcome = () => {
// 	return <h3>Hello The Bridge</h3>
// }

const name = 'Pepe'

const users = [
	{ name: 'Carlos', email: 'carlos@mail.com' },
	{ name: 'Pepin', email: 'pepin@mail.com' },
	{ name: 'Ane', email: 'ane@mail.com' },
	{ name: 'June', email: 'june@mail.com' },
]

function App() {
	return (
		<div>
			<h1 className="text-color">hola</h1>
			<h2>name: {name}</h2>
			<ListItems items={users} />
			{/* <Welcome />
			<WelcomeC name="Carlos" />
			<WelcomeC name="Maria" />
			<WelcomeC name="Ane" />
			<WelcomeC name="Pepelu" />
			<WelcomeC name="June" />
			<WelcomeF firstName="Sandro" />
			<WelcomeF firstName="Sandra" />
			<WelcomeF firstName="Sandrine" /> */}
		</div>
	)
}

export default App
