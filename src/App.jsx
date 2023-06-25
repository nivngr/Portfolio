import { useState } from 'react'
import Header from './Header.jsx'
import './styles/App.css'
import MainBody from './MainBody.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainBody />
    </>
  )
}

export default App
