import './SignUp.css'

function SignUp() {
  return (
    <div className="signup-page">
      <div className="page-header">
        <h1>SIGN UP FOR 2026</h1>
        <p>Take your shot at glory on July 4th, 2026</p>
      </div>

      <div className="signup-content">
        <div className="signup-hero">
          <h2>Ready to Compete?</h2>
          <p>
            The 8th Annual Nathan's Nathan's Famous Hot Dog Eating Contest is coming 
            July 4th, 2026. Will you be the one to dethrone the champions?
          </p>
        </div>

        <div className="signup-card">
          <h3>How to Register</h3>
          <div className="signup-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Send an Email</h4>
                <p>Email <a href="mailto:nathansnathansfamous@gmail.com">nathansnathansfamous@gmail.com</a> with the subject line "2026 Registration"</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Include Your Info</h4>
                <p>Name, division (Men's or Women's), and any competitive eating experience</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Wait for Confirmation</h4>
                <p>You'll receive a confirmation email with contest details and arrival instructions</p>
              </div>
            </div>
          </div>

          <a href="mailto:nathansnathansfamous@gmail.com?subject=2026%20Registration" className="email-button">
            Email to Register Now
          </a>
        </div>

        <div className="contest-details">
          <h3>Contest Details</h3>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-icon">📅</span>
              <h4>Date</h4>
              <p>July 4th, 2026</p>
            </div>
            <div className="detail-item">
              <span className="detail-icon">⏰</span>
              <h4>Time</h4>
              <p>12:00 PM (Noon)</p>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <h4>Location</h4>
              <p>Sea Chest & Trelawney Roads<br/>Baylake Pines, VA</p>
            </div>
            <div className="detail-item">
              <span className="detail-icon">⏱️</span>
              <h4>Duration</h4>
              <p>3 Minutes</p>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4>Who can compete?</h4>
            <p>All Baylake Pines residents and their guests are welcome to compete. Must be 18+ to participate.</p>
          </div>

          <div className="faq-item">
            <h4>Is there a registration fee?</h4>
            <p>No! Registration is completely free. This is a neighborhood tradition.</p>
          </div>

          <div className="faq-item">
            <h4>What if I've never done competitive eating before?</h4>
            <p>No experience required! We welcome first-timers and seasoned veterans alike. Just bring your appetite and competitive spirit.</p>
          </div>

          <div className="faq-item">
            <h4>What should I bring?</h4>
            <p>Just yourself! Hot dogs, water, and everything you need will be provided. Arrive 30 minutes early for check-in.</p>
          </div>

          <div className="faq-item">
            <h4>Can I watch without competing?</h4>
            <p>Absolutely! Spectators are encouraged. It's a free community event as part of our 4th of July celebration.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
