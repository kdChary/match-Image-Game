import './index.css'

const Navbar = props => {
  const {score, timeRemaining} = props
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
          Score: <span className="score">{score}</span>
        </p>
        <div className="countdown-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="clock-image"
          />
          <h5 className="countdown">{timeRemaining} sec</h5>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
