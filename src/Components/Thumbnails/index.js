import './index.css'

const Thumbnails = props => {
  const {thumbnailDetails, imageClicked} = props

  const {id, thumbnailUrl} = thumbnailDetails

  const onImageClicked = () => {
    imageClicked(id)
  }

  return (
    <li className="thumbnail-item">
      <div className="thumbnail-card">
        <img
          onClick={onImageClicked}
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image"
        />
      </div>
    </li>
  )
}

export default Thumbnails
