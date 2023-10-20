import React from 'react'
import { mainRouter } from './router/MainRouter'
import {RouterProvider} from "react-router-dom"

const App = () => {
  return (
    <div>
      <RouterProvider router = {mainRouter}/>
    </div>
  )
}

export default App
