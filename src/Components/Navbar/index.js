import './index.css'

const Navbar = props => {
  const {score, timeRemaining} = props
  const imageUrl =
    'https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png'
  const altText = 'website logo'

  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="logo-section">
          <img src={imageUrl} alt={altText} className="website-logo" />
        </li>
        <li className="nav-score-time-section">
          <p className="score-text">Score: </p>
          <p className="score">{score}</p>
          <div className="countdown-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="clock-image"
            />
            <p className="countdown">{timeRemaining} sec</p>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
