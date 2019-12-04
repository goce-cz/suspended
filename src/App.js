import React from 'react'
import './App.css'
import { OfficerManagement as OfficerManagementBasic } from './basic/OfficerManagement'
import { RouterProvider } from 'react-router5'
import { router } from './routes'

function App() {
  return (
    <RouterProvider router={router}>
      <OfficerManagementBasic/>
    </RouterProvider>
  )
}

export default App
