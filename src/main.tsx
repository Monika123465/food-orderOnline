
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import Menu from './Pages/Menu.tsx'
import Contact from './Pages/Contact.tsx'
import Login from './Pages/Login.tsx'
import Signup from './Pages/Signup.tsx'
import Cart from './Pages/Cart.tsx'
import Layout from './Layout.tsx'
import AuthContextProvider from './Context/Authcontext.tsx'





 
const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/menu',
        element: <Menu />
      },
       {
        path: '/menu/:id',
        element: <Menu />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  

   <AuthContextProvider>
  <RouterProvider router={routers} /></AuthContextProvider>


)