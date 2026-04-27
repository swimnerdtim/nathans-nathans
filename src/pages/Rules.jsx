import './Rules.css'

function Rules() {
  return (
    <div className="rules-page">
      <div className="page-header">
        <h1>OFFICIAL RULES</h1>
        <p>What you need to know before stepping up to the table</p>
      </div>

      <div className="rules-content">
        <section className="rule-section">
          <h2>🌭 The Competition</h2>
          <ul>
            <li><strong>Duration:</strong> Exactly 3 minutes</li>
            <li><strong>Hot Dogs:</strong> Nathan's Famous brand only</li>
            <li><strong>What Counts:</strong> Both the hot dog AND the bun must be consumed for it to count</li>
            <li><strong>Goal:</strong> Consume as many hot dogs and buns as possible within the time limit</li>
          </ul>
        </section>

        <section className="rule-section">
          <h2>🏆 Categories & Prizes</h2>
          <div className="categories-grid">
            <div className="category-card">
              <h3>Men's Division</h3>
              <p className="prize">The Mustard Belt</p>
              <p>Awarded to the man who consumes the most hot dogs and buns</p>
            </div>
            <div className="category-card">
              <h3>Women's Division</h3>
              <p className="prize">The Pink Pepto-Bismol Belt</p>
              <p>Awarded to the woman who consumes the most hot dogs and buns</p>
            </div>
          </div>
        </section>

        <section className="rule-section">
          <h2>📋 Regulations</h2>
          <ul>
            <li>All contestants must be residents or guests of Baylake Pines</li>
            <li>Contestants may dunk buns in water before consumption (optional)</li>
            <li>Contestants must keep all consumed food down for the duration of the competition</li>
            <li>Any "reversal of fortune" results in immediate disqualification</li>
            <li>Partial hot dogs count as partial credit (judges' discretion)</li>
            <li>The decision of the judges is final</li>
          </ul>
        </section>

        <section className="rule-section">
          <h2>📅 When & Where</h2>
          <ul>
            <li><strong>Date:</strong> Every July 4th</li>
            <li><strong>Time:</strong> 12:00 PM (high noon)</li>
            <li><strong>Location:</strong> Corner of Sea Chest & Trelawney Roads, Baylake Pines</li>
            <li><strong>Part of:</strong> Baylake Pines 4th of July Celebration</li>
          </ul>
        </section>

        <section className="rule-section">
          <h2>✅ How to Enter</h2>
          <ul>
            <li>Sign up by emailing <a href="mailto:nathansnathansfamous@gmail.com">nathansnathansfamous@gmail.com</a></li>
            <li>Registration typically opens in June</li>
            <li>Limited spots available - first come, first served</li>
            <li>Contestants must arrive 30 minutes before start time</li>
          </ul>
        </section>

        <section className="disclaimer">
          <h3>⚠️ Disclaimer</h3>
          <p>
            This is a competitive eating event. Participants engage at their own risk. 
            We recommend consulting with a physician before participating if you have 
            any health concerns. Competitive eating is not recommended for individuals 
            with certain medical conditions. Know your limits and eat responsibly.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Rules
