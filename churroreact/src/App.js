import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import ViewChurro from './pages/ViewChurro'
import ChurroDetails from './pages/ChurroDetails'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/listchurros" element={<ChurroDetails />} />
          <Route
            path="/listchurros/details/:churroId"
            element={<ViewChurro />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
