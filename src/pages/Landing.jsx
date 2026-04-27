import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const images = [
  '/nathans-nathans/landing1.jpg',
  '/nathans-nathans/landing2.jpg',
  '/nathans-nathans/landing3.jpg'
]

function Landing() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="landing">
      {images.map((image, index) => (
        <div
          key={image}
          className={`landing-bg ${index === currentImage ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="landing-overlay">
        <h1 className="landing-title">NATHAN'S NATHAN'S</h1>
        <p className="landing-subtitle">FAMOUS HOT DOG EATING CONTEST</p>
        <Link to="/home" className="welcome-button">
          WELCOME
        </Link>
      </div>
    </div>
  )
}

export default Landing
