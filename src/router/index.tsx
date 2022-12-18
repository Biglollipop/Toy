import React, { lazy, Suspense, ReactNode } from 'react'
import {
	IndexRouteObject,
	NonIndexRouteObject,
	createBrowserRouter
} from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import App from '../App'
const Dashboard = lazy(() => import('../views/Dashboard'))

const lazyLoad = (component: ReactNode): ReactNode => {
	return (
		<Suspense fallback={<Spin className="loading" size="large" />}>
			{component}
		</Suspense>
	)
}
interface MenuArray {
	name?: string
	icon?: JSX.Element
	meneId: number | string
	children?: RouteObject[]
}
type ResetIndexRouteObject = MenuArray & IndexRouteObject
type ResetNonIndexRouteObject = MenuArray & NonIndexRouteObject
export declare type RouteObject =
	| ResetIndexRouteObject
	| ResetNonIndexRouteObject

const routes = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			children: [
				{
					name: 'dashboard',
					path: '/dashboard',
					meneId: 1,
					icon: <UserOutlined />,
					element: lazyLoad(<Dashboard />)
				}
			]
		}
	] as RouteObject[],
	{
		basename: '/toy'
	}
)

export default routes
