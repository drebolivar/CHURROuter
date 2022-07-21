import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import ChurroCard from './components/ChurroCard'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listchurros" element={<ChurroCard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
