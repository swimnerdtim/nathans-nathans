import historyData from '../data/history.json'
import './Champions.css'

function Champions() {
  const { records, championships } = historyData

  return (
    <div className="champions-page">
      <div className="page-header">
        <h1>HALL OF CHAMPIONS</h1>
        <p>Legends forged in mustard, ketchup, and glory</p>
      </div>

      {/* World Records */}
      <section className="records-section">
        <h2>WORLD RECORDS</h2>
        <div className="records-grid">
          <div className="record-card mens">
            <div className="record-icon">🔥</div>
            <h3>MEN'S WORLD RECORD</h3>
            <p className="record-number">{records.mens.count}</p>
            <p className="record-label">DOGS & BUNS</p>
            <p className="record-holder">{records.mens.holder}</p>
            <p className="record-year">{records.mens.year}</p>
          </div>

          <div className="record-card womens">
            <div className="record-icon">⚡</div>
            <h3>WOMEN'S WORLD RECORD</h3>
            <p className="record-number">{records.womens.count}</p>
            <p className="record-label">DOGS & BUNS</p>
            <p className="record-holder">{records.womens.holder}</p>
            <p className="record-year">{records.womens.year}</p>
          </div>
        </div>
      </section>

      {/* Current Belt Holders */}
      <section className="belts-section">
        <h2>CURRENT BELT HOLDERS</h2>
        
        <div className="belt-holder mens-belt">
          <div className="belt-title">
            <span className="belt-emoji">🏆</span>
            <h3>MEN'S MUSTARD BELT</h3>
          </div>
          <div className="belt-content">
            <p className="belt-champ">{championships.mens.current}</p>
            <p className="belt-titles">{championships.mens.titles}x Champion</p>
            <p className="belt-desc">
              Dethroned the legendary Peter "Cookie" Jaeckel in 2025 with a jaw-dropping 
              10 dogs and buns, setting a new world record and claiming his first championship.
            </p>
          </div>
        </div>

        <div className="belt-holder womens-belt">
          <div className="belt-title">
            <span className="belt-emoji">💗</span>
            <h3>WOMEN'S PINK PEPTO-BISMOL BELT</h3>
          </div>
          <div className="belt-content">
            <p className="belt-champ">Sam the Sausage Slayer</p>
            <p className="belt-titles">{championships.womens.samTitles}x Champion (Co-Champion 2025)</p>
            <p className="belt-desc">
              The undisputed queen of competitive eating in Baylake Pines. Reigning champion 
              since 2019, holds the women's world record at 4.5 dogs. In 2025, tied with 
              Jillian Batchelor at 4 dogs, making history as co-champions.
            </p>
          </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="hall-of-fame">
        <h2>HALL OF FAME</h2>
        
        <div className="hof-grid">
          <div className="hof-card legendary">
            <h4>Peter "Cookie" Jaeckel</h4>
            <p className="hof-stat">5x Men's Champion (2019-2024)</p>
            <p className="hof-desc">
              The original king. Dominated the competition for 6 straight years before 
              being dethroned in 2025. Cookie set the standard and built the tradition.
            </p>
          </div>

          <div className="hof-card legendary">
            <h4>Sam the Sausage Slayer</h4>
            <p className="hof-stat">6x Women's Champion (2019-2025)</p>
            <p className="hof-desc">
              Undefeated since the contest's inception. Holds the women's world record 
              and has never finished lower than first place (or tied for first in 2025).
            </p>
          </div>

          <div className="hof-card champion">
            <h4>Jimmy the Shark</h4>
            <p className="hof-stat">2025 Men's Champion • World Record Holder</p>
            <p className="hof-desc">
              The perennial bridesmaid who finally broke through. Shattered Cookie's 
              dynasty with 10 dogs in 2025, setting a new world record.
            </p>
          </div>

          <div className="hof-card champion">
            <h4>Jillian Batchelor</h4>
            <p className="hof-stat">2025 Women's Co-Champion</p>
            <p className="hof-desc">
              Made history in 2025 by tying Sam the Sausage Slayer at 4 dogs, becoming 
              the first person to share the Pink Pepto-Bismol Belt.
            </p>
          </div>
        </div>
      </section>

      {/* Fun Stats */}
      <section className="stats-section">
        <h2>BY THE NUMBERS</h2>
        <div className="stats-grid">
          <div className="stat-box">
            <p className="stat-number">7</p>
            <p className="stat-label">Years of Competition</p>
          </div>
          <div className="stat-box">
            <p className="stat-number">10</p>
            <p className="stat-label">All-Time Record (Men's)</p>
          </div>
          <div className="stat-box">
            <p className="stat-number">4.5</p>
            <p className="stat-label">All-Time Record (Women's)</p>
          </div>
          <div className="stat-box">
            <p className="stat-number">3</p>
            <p className="stat-label">Minutes of Glory</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Champions
