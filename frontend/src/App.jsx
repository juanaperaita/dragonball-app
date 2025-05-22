import { useState } from 'react'
import './App.css'
import Search from './components/Search'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <img src="/dragon-ball-letters.svg" alt="Dragon Ball Title" width={500} />
      <Search/>
    </div>
  )
}

export default App
