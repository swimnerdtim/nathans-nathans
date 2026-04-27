import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Champions from './pages/Champions'
import History from './pages/History'
import Rules from './pages/Rules'
import Gallery from './pages/Gallery'
import SignUp from './pages/SignUp'
import './App.css'

function AppContent() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  return (
    <div className="app">
      {!isLanding && (
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>NATHAN'S NATHAN'S</h1>
            <p className="subtitle">FAMOUS HOT DOG EATING CONTEST</p>
          </Link>
          <nav className="nav">
            <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>Home</Link>
            <Link to="/champions" className={location.pathname === '/champions' ? 'active' : ''}>Champions</Link>
            <Link to="/history" className={location.pathname === '/history' ? 'active' : ''}>History</Link>
            <Link to="/rules" className={location.pathname === '/rules' ? 'active' : ''}>Rules</Link>
            <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link>
            <Link to="/signup" className={location.pathname === '/signup' ? 'active signup-link' : 'signup-link'}>Sign Up</Link>
          </nav>
        </div>
      </header>
      )}

      <main className={isLanding ? "main-landing" : "main"}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/history" element={<History />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>

      {!isLanding && (
      <footer className="footer">
        <div className="footer-content">
          <p>Nathan's Nathan's Famous Hot Dog Eating Contest</p>
          <p>Every July 4th • Sea Chest & Trelawney Roads • Baylake Pines</p>
          <p className="powered">Powered by the #1 Neighborhood in Virginia Beach</p>
        </div>
      </footer>
      )}
    </div>
  )
}

function App() {
  return (
    <Router basename="/nathans-nathans">
      <AppContent />
    </Router>
  )
}

export default App
