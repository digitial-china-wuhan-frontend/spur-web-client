exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        stories: allStrapiStory {
          edges {
            node {
              strapiId
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog stories pages.
  const stories = result.data.stories.edges
  stories.forEach((story, index) => {
    createPage({
      path: `/story/${story.node.strapiId}`,
      component: require.resolve("./src/templates/story.js"),
      context: {
        id: story.node.strapiId,
      },
    })
  })
}
