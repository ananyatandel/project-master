import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function fiveGroups() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <p>This is the 5 Groups page</p>
        </div>
    </>
  )
}

export default fiveGroups