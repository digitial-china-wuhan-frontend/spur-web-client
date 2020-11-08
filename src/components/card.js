import React from "react"
import { Link } from "gatsby"

const Card = ({ story }) => {
  return (
    <Link to={`/story/${story.node.strapiId}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img
            src={story.node.image.publicURL}
            alt={story.node.image.publicURL}
            height="100"
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {story.node.category.name}
          </p>
          <p id="title" className="uk-text-large">
            {story.node.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card
