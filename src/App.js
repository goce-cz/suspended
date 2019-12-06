import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router5'
import { router } from './routes'
import { Root } from './Root'

function App () {
  return (
    <RouterProvider router={router}>
      <Root/>
    </RouterProvider>
  )
}

export default App
