import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router5'
import { router } from './routes'
import { Root } from './Root'
import { SlowMoProvider } from './common/slowmo'

function App () {
  return (
    <RouterProvider router={router}>
      <SlowMoProvider>
        <Root/>
      </SlowMoProvider>
    </RouterProvider>
  )
}

export default App
