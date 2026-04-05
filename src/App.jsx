import { useState } from 'react'
import Navbar from './components/Navbar'
import Page1Content from './components/Page1Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Page1Content/>
    </div>
  )
}

export default App
