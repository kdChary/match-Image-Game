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
        <div className="countdown">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="clock-image"
          />
        </div>
      </div>
    </nav>
  )
}
