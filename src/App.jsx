
import './App.css'
import Home from './pages/Home'
import Builds from './pages/Builds'
import Donar from './pages/Donar'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Tools from './pages/Tools'


const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'builds',
        element: <Builds />
      },
      {
        path: 'tools',
        element: <Tools />
      },
      {
        path: 'donate',
        element: <Donar />
      }
    ]
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App