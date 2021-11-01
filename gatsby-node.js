const path = require(`path`)
const chunk = require(`lodash/chunk`)

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async ({ graphql, actions, reporter }) => {

  const { createPage } = actions


  // const works = await getWorks(graphql, reporter)
  const pages = await getPages(graphql, reporter)
  // If there are no posts in WordPress, don't do anything


  pages.nodes.forEach(page => {
    if (page.uri === '/' || page.uri === '/en/homepage/') {
      return createPage({
        path: page.uri,
        component: path.resolve('./src/templates/homepage-template.js'),
        context: {
          id: page.id
        }
      })
    } else {
      return createPage({
        path: page.uri,
        component: path.resolve('./src/templates/page-template.js'),
        context: {
          id: page.id
        }
      })

    }
  })
}



//Get all pages
async function getPages(graphql, reporter) {
  const pagesResult = await graphql(`
    query WpPages {
      allWpPage {
        nodes {
          id
          title
          slug
          uri
        }
      }
    }
  `)

  if (pagesResult.errors) {
    reporter.panicOnBuild(
      'There was an error loading your Single Page',
      pagesResult.errors
    )
    return
  }
  return pagesResult.data.allWpPage
}
