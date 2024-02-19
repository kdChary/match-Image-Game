import './index.css'

const GameOver = props => {
  const {score, playAgain} = props

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <div className="game-over-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-icon"
      />
      <div className="game-score-card">
        <p className="total-score-text">YOUR SCORE</p>
        <h3 className="total-core">{score}</h3>
      </div>
      <button className="reset-btn" type="button" onClick={onClickPlayAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-icon"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}
export default GameOver
