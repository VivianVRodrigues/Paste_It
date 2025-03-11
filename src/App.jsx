import './App.css'
import React from 'react'
import Home from './home'
import Navbar from './navbar'
import Pasteall from './pasteAll'
import Viewpaste from './viewPaste'
import Removepaste from './removePaste'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
const router =createBrowserRouter(
[
  {
    path:"/",
    element:(<div>
      <Navbar/>
      <Home/>
    </div>)
  },
  {
    path:"/pastes",
    element:(<div>
      <Navbar/>
      <Pasteall/>
    </div>)
  },
  {
    path:"/pastes/:id",
    element:(<div>
      <Navbar/>
      <Viewpaste/>
    </div>)
  },
  {
    path:"/remove_paste",
    element:(<div>
      <Navbar/>
      <Removepaste/>
    </div>)
  }
]
)
  return (
    <div>
      hello guyss
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
