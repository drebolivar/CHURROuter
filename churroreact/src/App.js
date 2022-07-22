import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import ViewChurro from './pages/ViewChurro'
import ChurroDetails from './pages/ChurroDetails'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listchurros" element={<ChurroDetails />} />
          <Route path="/listchurros/details/" element={<ViewChurro />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
