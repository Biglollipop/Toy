import React from 'react'
import './styles/index.scss'
import { ConfigProvider } from 'antd'

function App() {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#00b96b'
				}
			}}
		>
			214321423
		</ConfigProvider>
	)
}

export default App
