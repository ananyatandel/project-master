import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Documents from './Documents.jsx'
import Tutorials from './Tutorials.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root.jsx"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "Documents",
        element: <Documents />
      },
      {
        path: "Tutorials",
        element: <Tutorials />
      },
      {
        path:"App",
        element: <App />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
