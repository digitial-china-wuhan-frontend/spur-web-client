import React from "react"
import { graphql } from "gatsby"

import StoriesComponent from "../components/stories"
import Layout from "../components/layout"

export const query = graphql`
  query Category($id: String!) {
    stories: allStrapiStory(filter: { category: { id: { eq: $id } } }) {
      edges {
        node {
          strapiId
          title
          category {
            name
          }
          image {
            publicURL
          }
        }
      }
    }
    category: strapiCategory(strapiId: { eq: $id }) {
      name
    }
  }
`

const Category = ({ data }) => {
  const stories = data.stories.edges
  const category = data.category.name

  return (
    <Layout>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category}</h1>
          <StoriesComponent stories={stories} />
        </div>
      </div>
    </Layout>
  )
}

export default Category
