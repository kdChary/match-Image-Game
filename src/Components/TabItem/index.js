import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, clickedImage} = props

  const toggleClass = isActive ? 'tab-active' : 'tab-inactive'
  const {tabId = 0, displayText = 'styleMe'} = tabDetails

  const onTabClicked = () => {
    clickedImage(tabId)
  }

  return (
    <>
      <button type="button" onClick={onTabClicked} className={toggleClass}>
        {displayText}
      </button>
    </>
  )
}

export default TabItem
