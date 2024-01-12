import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
import Login from './components/Login/Login.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'


const router = createBrowserRouter([
  {
    path: '/', element: <App />
  },
  {
    path: '/login', element: <Login />
  },
  {
    path: '/sidebar', element: <Sidebar />
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */ }
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
