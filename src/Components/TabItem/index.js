import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, clickedTabItem} = props

  const toggleClass = isActive ? 'tab-active' : 'tab-inactive'
  const {tabId = 0, displayText} = tabDetails

  const onTabClicked = () => {
    clickedTabItem(tabId)
  }

  return (
    <li>
      <button type="button" onClick={onTabClicked} className={toggleClass}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
