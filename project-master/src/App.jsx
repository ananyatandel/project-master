import { useState } from 'react'
import Login from './components/Login.jsx'
import People from './People.jsx'
import TodoList from './Dashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList />
      <People />
    </>
    

  )
}

export default App
