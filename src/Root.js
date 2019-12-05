import React from 'react'
import { Link, RouterProvider, useRoute } from 'react-router5'
import { router, routes } from './routes'

export const Root = () => {
  const { route } = useRoute()
  const activeRouteSettings = routes.find(({ name }) => name === route.name)
  const Component = activeRouteSettings && activeRouteSettings.component
  return (
    <RouterProvider router={router}>
      <ul>
        {routes.map(({ name }) => <li key={name}><Link routeName={name}>{name}</Link></li>)}
      </ul>
      {Component && <Component/>}
    </RouterProvider>
  )
}
