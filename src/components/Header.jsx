import React from 'react'
import Button from '../components/Button'
import { useTelegram } from '../hooks/useTelegram'

const Header = () => {
	const { tg, onClose } = useTelegram()
	return (
		<div className={'header'}>
			<Button onClick={onClose}>Закрыть</Button>
			<span className={'username'}>{tg.initDataUnsafe?.user?.id}</span>
		</div>
	)
}

export default Header
