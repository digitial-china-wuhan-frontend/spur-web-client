import React from "react"
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`
  query StoryQuery($id: String!) {
    strapiStory(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      image {
        publicURL
      }
    }
  }
`

const Story = ({ data }) => {
  const story = data.strapiStory
  return (
    <Layout>
      <div>
        <div
          id="banner"
          className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
          data-src={story.image.publicURL}
          data-srcset={story.image.publicURL}
          data-uk-img
        >
          <h1>{story.title}</h1>
        </div>

        <div className="uk-section">
          <div className="uk-container uk-container-small">
            <ReactMarkdown source={story.content} />
            <p>
              <Moment format="MMM Do YYYY">{story.published_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Story
