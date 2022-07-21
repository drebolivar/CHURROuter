import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
          </main>
    </div>
  )
}

export default App
