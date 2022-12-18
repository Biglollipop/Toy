import React, { lazy, Suspense, ReactNode } from 'react'
import { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

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
}
type ResetIndexRouteObject = MenuArray & IndexRouteObject
type ResetNonIndexRouteObject = MenuArray & NonIndexRouteObject
export declare type RouteObject =
	| ResetIndexRouteObject
	| ResetNonIndexRouteObject

const routes: RouteObject[] = [
	{
		name: 'dashboard',
		path: '/',
		meneId: 1,
		icon: <UserOutlined />,
		element: lazyLoad(<Dashboard />)
	}
]
export default routes
