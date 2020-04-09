const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  
  const getServices = makeRequest(graphql, `
    {
      allStrapiService {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiService.edges.forEach(({ node }) => {
      createPage({
        path: `/services/${node.slug}`,
        component: path.resolve(`src/templates/service.js`),
        context: {
          id: node.id,
          // title: node.Title,
        },
      })
    })
  });
  
  // Query for articles nodes to use in creating pages.
  return getServices;
};
