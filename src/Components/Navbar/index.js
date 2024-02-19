import './index.css'

const Navbar = () => {
  const imageUrl =
    'https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png'
  const altText = 'website logo'

  return (
    <nav className="nav-bar">
      <div className="logo-section">
        <img src={imageUrl} alt={altText} className="website-logo" />
      </div>
      <div className="nav-score-time-section">
        <p className="score-text">
          Score: <span className="score">0</span>
        </p>
        <div className="countdown-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="clock-image"
          />
          <h5 className="countdown">60 sec</h5>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
