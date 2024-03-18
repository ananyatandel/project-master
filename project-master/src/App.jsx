import { useState } from 'react'
import Login from './components/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>This is the app page</p>
      <Login />
    </>
    

  )
}

export default App
