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
import { UserProvider } from './contexts/UserContext.jsx'
import { UsersProvider } from './contexts/UsersContext.jsx'

const routes = [
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
    element: <ViewUser />,
  },
]

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: routes
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <UsersProvider>
        <RouterProvider router={ router } />
      </UsersProvider>
    </UserProvider>
  </React.StrictMode>,
)


