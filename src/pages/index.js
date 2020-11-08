import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import StoriesComponent from "../components/stories"

import "../assets/css/main.css"

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allStrapiStory {
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
        }
      `}
      render={data => (
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>故事</h1>
            <StoriesComponent stories={data.allStrapiStory.edges} />
          </div>
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
