import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { NumOne } from './Component/Routing-Section/NumOne'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'numOne',
    element: <NumOne />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
