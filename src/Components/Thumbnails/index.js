import './index.css'

const Thumbnails = props => {
  const {thumbnailDetails, imageClicked} = props

  const {id, thumbnailUrl} = thumbnailDetails

  const onImageClicked = () => {
    imageClicked(id)
  }

  return (
    <li className="thumbnail-item">
      <button className="thumbnail-btn" type="button">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image"
          onClick={onImageClicked}
        />
      </button>
    </li>
  )
}

export default Thumbnails
