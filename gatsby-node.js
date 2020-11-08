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
        categories: allStrapiCategory {
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

  // Create blog categories pages.
  const categories = result.data.categories.edges

  categories.forEach((category, index) => {
    createPage({
      path: `/category/${category.node.strapiId}`,
      component: require.resolve("./src/templates/category.js"),
      context: {
        id: category.node.strapiId,
      },
    })
  })
}
