import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import RootLayout from './routes/RootLayout'
import Login from './components/Login/Login.jsx'
import Layout from './layouts/Layout.jsx'
// import Sidebar from './components/Sidebar/Sidebar.jsx'
import Perfil from './components/Perfil/Perfil.jsx'
import UserCreate from './components/UserCreate/UserCreate.jsx'
import UserAdmin from './components/UserAdmin/UserAdmin.jsx'
import ViewUser from './components/ViewUser/ViewUser.jsx'

const routes = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "perfil",
    element: <Perfil />,
  },
  {
    path: "crear-usuarios",
    element: <UserCreate />,
  },
  {
    path: "administrar-usuarios",
    element: <UserAdmin />,
  },
  {
    path: "ver-usuarios",
    element: <ViewUser />,
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
