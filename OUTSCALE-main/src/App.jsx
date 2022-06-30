import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { MainPage } from './components/main'
// import Navbar from './components/Navbar'
// import Navbar from "./components/Navbar";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Navbar/>  */}
        <MainPage/>
    </div>
  )
}

export default App
