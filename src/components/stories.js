import React from "react"
import Card from "./card"

const Stories = ({ stories }) => {
  const leftStoriesCount = Math.ceil(stories.length / 5)
  const leftStories = stories.slice(0, leftStoriesCount)
  const rightStories = stories.slice(leftStoriesCount, stories.length)

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftStories.map((story, i) => {
            return <Card story={story} key={`story__${story.node.id}`} />
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightStories.map((story, i) => {
              return <Card story={story} key={`story__${story.node.id}`} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stories
