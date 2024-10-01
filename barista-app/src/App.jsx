import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import BaristaForm from './Components/BaristaForm';
import starbucksLogo from './assets/starbucks.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class='title-container'>
        <img src={starbucksLogo} alt="Starbucks Logo" className="logo" />
        <h1 class='title'>On My Grind</h1>
      </div>
      <p className='description'>So you think you can barista? Let's put that to the test...</p>
      <BaristaForm />
    </>
  )
}

export default App
