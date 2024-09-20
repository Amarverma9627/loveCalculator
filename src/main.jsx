import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './Navbar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let approute = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
   
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={approute}>
        <App />
    </RouterProvider>
)