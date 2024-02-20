import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Documents from './Documents.jsx'
import Tutorials from './Tutorials.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/documents",
    element: <Documents />
  },
  {
    path: "/tutorials",
    element: <Tutorials />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
