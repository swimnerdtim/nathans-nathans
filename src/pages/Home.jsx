import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import historyData from '../data/history.json'
import './Home.css'

function Home() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function calculateTimeLeft() {
    const eventDate = new Date('2026-07-04T12:00:00')
    const now = new Date()
    const difference = eventDate - now

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const { championships } = historyData

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-overlay">
          <h1 className="hero-title">7TH ANNUAL</h1>
          <h2 className="hero-subtitle">NATHAN'S NATHAN'S FAMOUS<br/>HOT DOG EATING CONTEST</h2>
          <p className="hero-date">JULY 4TH, 2026</p>
          <p className="hero-location">SEA CHEST & TRELAWNEY ROADS • BAYLAKE PINES, VA</p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="welcome-section">
        <h2>A Baylake Pines Tradition</h2>
        <p>
          What started in 2019 as a neighborhood joke has become a legendary Fourth of July 
          tradition. Every year, hundreds gather at the corner of Sea Chest & Trelawney Roads 
          to watch their neighbors attempt the impossible: consuming as many Nathan's Famous 
          hot dogs and buns as humanly possible in just 3 minutes.
        </p>
        <p>
          Champions are crowned, records are shattered, and glory is earned. This isn't Coney 
          Island—it's Baylake Pines. And we do it better.
        </p>
      </div>

      {/* Countdown */}
      <div className="countdown-section">
        <h3>NEXT CONTEST IN:</h3>
        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label">DAYS</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.hours}</span>
            <span className="countdown-label">HOURS</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.minutes}</span>
            <span className="countdown-label">MINUTES</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.seconds}</span>
            <span className="countdown-label">SECONDS</span>
          </div>
        </div>
      </div>

      {/* Current Champions */}
      <div className="champions-spotlight">
        <h2>REIGNING CHAMPIONS</h2>
        
        <div className="champion-cards">
          <div className="champion-card mens">
            <div className="belt-icon">🏆</div>
            <h3>MEN'S MUSTARD BELT</h3>
            <p className="champion-name">{championships.mens.current}</p>
            <p className="champion-stat">WORLD RECORD: 10 DOGS &amp; BUNS</p>
            <p className="champion-year">2025 CHAMPION</p>
          </div>

          <div className="champion-card womens">
            <div className="belt-icon">💗</div>
            <h3>WOMEN'S PINK PEPTO-BISMOL BELT</h3>
            <p className="champion-name">Sam the Sausage Slayer</p>
            <p className="champion-stat">5X CHAMPION</p>
            <p className="champion-year">2025 CO-CHAMPION (TIED)</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>THINK YOU HAVE WHAT IT TAKES?</h2>
        <p>3 minutes. As many Nathan's Famous hot dogs and buns as you can handle. Glory awaits.</p>
        <Link to="/signup" className="cta-button">REGISTER FOR 2026</Link>
      </div>

      {/* Info Grid */}
      <div className="info-grid">
        <div className="info-card">
          <h4>🌭 The Challenge</h4>
          <p>Eat as many Nathan's Famous hot dogs and buns as possible in just 3 minutes</p>
        </div>
        <div className="info-card">
          <h4>🏆 The Prize</h4>
          <p>Win the legendary Mustard Belt or Pink Pepto-Bismol Belt and neighborhood immortality</p>
        </div>
        <div className="info-card">
          <h4>📅 The Tradition</h4>
          <p>Every July 4th since 2019 at the corner of Sea Chest & Trelawney Roads</p>
        </div>
        <div className="info-card">
          <h4>🎉 The Atmosphere</h4>
          <p>Part of Baylake Pines' legendary 4th of July celebration</p>
        </div>
      </div>
    </div>
  )
}

export default Home
