import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  const [bgColor, setBgColor] = useState('white')
  const changeBg = (color) => {
    setBgColor(color);
  }
  return (
    <>
      <div className="container" style={{ backgroundColor: bgColor }}>
        <h1>Background Color Changer</h1>
        <p>Click the button to change the background color.</p>
        <div className="buttons">
          <button onClick={() => changeBg('red')}> Red</button>
          <button onClick={() => changeBg('Green')}> Green</button>
          <button onClick={() => changeBg('Orange')}> Orange</button>
          <button onClick={() => changeBg('Yellow')}> Yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
