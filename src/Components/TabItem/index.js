import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, clickedTabItem} = props

  const toggleClass = isActive ? 'tab-active' : 'tab-inactive'
  const {tabId = 0, displayText = 'styleMe'} = tabDetails

  const onTabClicked = () => {
    clickedTabItem(tabId)
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
