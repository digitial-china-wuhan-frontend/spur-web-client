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
          {leftStories.map((article, i) => {
            return (
              <Card article={article} key={`article__${article.node.id}`} />
            )
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightStories.map((article, i) => {
              return (
                <Card article={article} key={`article__${article.node.id}`} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stories
