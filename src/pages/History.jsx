import historyData from '../data/history.json'
import './History.css'

function History() {
  const { years } = historyData

  return (
    <div className="history-page">
      <div className="page-header">
        <h1>CONTEST HISTORY</h1>
        <p>Seven years of competitive eating excellence</p>
      </div>

      <div className="timeline">
        {years.map(year => (
          <div key={year.year} className="timeline-item">
            <div className="timeline-year">
              <h2>{year.year}</h2>
              <p>{year.date}</p>
            </div>
            <div className="timeline-content">
              <div className="winner mens-winner">
                <h4>🏆 Men's Champion</h4>
                <p className="winner-name">{year.mensWinner.name}</p>
                {year.mensWinner.count && (
                  <p className="winner-count">
                    {year.mensWinner.count} dogs & buns
                    {year.mensWinner.isRecord && <span className="record-badge">WORLD RECORD</span>}
                  </p>
                )}
              </div>
              <div className="winner womens-winner">
                <h4>💗 Women's Champion</h4>
                <p className="winner-name">{year.womensWinner.name}</p>
                {year.womensWinner.count && (
                  <p className="winner-count">
                    {year.womensWinner.count} dogs & buns
                    {year.womensWinner.isRecord && <span className="record-badge">WORLD RECORD</span>}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default History
