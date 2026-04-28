import historyData from '../data/history.json'
import './History.css'

function History() {
  const { years } = historyData

  return (
    <div className="history-page">
      <div className="page-header">
        <h1>CONTEST HISTORY</h1>
        <p>Seven years of competitive eating excellence in Baylake Pines</p>
      </div>

      <div className="origin-story">
        <h2>The Beginning</h2>
        <p>
          What started in 2019 as a quick hot dog eating contest between friends Nathan Tschohl 
          and Casey Kohler during the Bay Lake Pines 4th of July Parade has grown into a legendary 
          neighborhood tradition drawing hundreds of spectators every year.
        </p>
        <p>
          From 3 initial competitors and a hand-painted banner to 11 competitors, professional 
          sound systems, and a festival atmosphere with watermelon contests, bounce houses, and 
          fireworks—Nathan's Nathan's has become THE event of the summer in the #1 neighborhood 
          in Virginia Beach.
        </p>
      </div>

      <div className="timeline">
        {years.map(year => (
          <div key={year.year} className="timeline-item">
            <div className="timeline-year">
              <h2>{year.year}</h2>
              <p>{year.date}</p>
              {year.competitors && (
                <span className="competitor-count">{year.competitors} Competitors</span>
              )}
            </div>
            <div className="timeline-content">
              {/* Men's Division */}
              <div className="winner mens-winner">
                <h4>🏆 Men's Champion</h4>
                <p className="winner-name">{year.mensWinner.name}</p>
                {year.mensWinner.count && (
                  <p className="winner-count">
                    {year.mensWinner.count} dogs & buns
                    {year.mensWinner.isRecord && <span className="record-badge">WORLD RECORD</span>}
                  </p>
                )}
                {year.mensWinner.notes && (
                  <p className="winner-notes">{year.mensWinner.notes}</p>
                )}
              </div>

              {/* Women's Division */}
              {year.womensWinner.name && (
                <div className="winner womens-winner">
                  <h4>💗 Women's Champion</h4>
                  <p className="winner-name">{year.womensWinner.name}</p>
                  {year.womensWinner.count && (
                    <p className="winner-count">
                      {year.womensWinner.count} dogs & buns
                      {year.womensWinner.isRecord && <span className="record-badge">WORLD RECORD</span>}
                    </p>
                  )}
                  {year.womensWinner.notes && (
                    <p className="winner-notes">{year.womensWinner.notes}</p>
                  )}
                </div>
              )}

              {/* Highlights */}
              {year.highlights && year.highlights.length > 0 && (
                <div className="highlights-section">
                  <h5>Highlights:</h5>
                  <ul>
                    {year.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* All-Time Stats */}
      <div className="alltime-section">
        <h2>All-Time Champions</h2>
        
        <div className="alltime-grid">
          <div className="alltime-card">
            <h3>Men's Division</h3>
            <div className="alltime-list">
              {historyData.championships.mens.allTime.map((champ, idx) => (
                <div key={idx} className="alltime-entry">
                  <span className="alltime-name">{champ.name}</span>
                  <span className="alltime-titles">{champ.titles}x Champion</span>
                  <span className="alltime-years">{champ.years}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="alltime-card">
            <h3>Women's Division</h3>
            <div className="alltime-list">
              {historyData.championships.womens.allTime.map((champ, idx) => (
                <div key={idx} className="alltime-entry">
                  <span className="alltime-name">{champ.name}</span>
                  <span className="alltime-titles">{champ.titles}x Champion</span>
                  <span className="alltime-years">{champ.years}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Awards */}
        <div className="special-awards">
          <h3>Special Recognition</h3>
          <div className="award-card">
            <span className="award-icon">🍉</span>
            <div className="award-content">
              <h4>Kids' Watermelon Eating Contest</h4>
              <p className="award-champ">{historyData.specialAwards.kidsWatermelon.champion}</p>
              <p className="award-detail">
                {historyData.specialAwards.kidsWatermelon.consecutiveTitles} Consecutive Titles 
                ({historyData.specialAwards.kidsWatermelon.years})
              </p>
              <p className="award-note">Undefeated kids' champion! "LET'S GO LUCY!"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
