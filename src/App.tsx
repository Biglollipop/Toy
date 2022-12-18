import React from 'react'
import { useRoutes } from 'react-router-dom'
import './styles/index.scss'
import routes from './router'
import { ConfigProvider } from 'antd'

function App() {
	const element = useRoutes(routes)

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#00b96b'
				}
			}}
		>
			{element}
		</ConfigProvider>
	)
}

export default App
