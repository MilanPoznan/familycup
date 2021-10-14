import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql, navigate } from 'gatsby'


import Layout from '../components/Layout'

import Menu from '../components/Menu'

export default function Page({ data, location }) {

  const { wpPage: { language, flexibleContent: { pageContent } } } = data
  console.log(language)
  return (
    <Layout language={language}>
      {pageContent.map((item, index) => {
        if (item.fieldGroupName === "Page_Flexiblecontent_PageContent_Menu") {
          return <Menu key={index} menuData={item.menuItems} title={item.menuTitle} id={item.menuLink} />
        }
      })}
    </Layout>
  )
}


export const menuPageQuery = graphql`query pageByID($id: String!) {
   wpPage(id: {eq: $id}) {
      id
      language {
        slug
        name
      }
      flexibleContent {
        pageContent {
          ... on WpPage_Flexiblecontent_PageContent_Menu {
            fieldGroupName
            menuTitle
            menuLink
            menuItems {
              description
              image {
                localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              }
              price
              title
            }
        }
      }
    }
  }
}`