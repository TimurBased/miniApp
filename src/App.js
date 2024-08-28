import './App.css'
import { useEffect } from 'react'
import { useTelegram } from './hooks/useTelegram'
import Header from './components/Header'

function App() {
	const { onToggleButton, tg } = useTelegram()

	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<div className='App'>
			<button onClick={onToggleButton}>toggle</button>
			<Header />
		</div>
	)
}

export default App
