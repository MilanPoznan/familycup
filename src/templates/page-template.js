import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql, navigate } from 'gatsby'


import Layout from '../components/Layout'

import Menu from '../components/Menu'

import SinglePageMenuNavigation from '../components/SinglePageMenuNavigation'

export default function Page({ data }) {

  const { allWpMenu: { nodes }, wpPage: { language, flexibleContent: { pageContent } } } = data

  const [currLangMenu, setcurrLangMenu] = useState([])

  const prepareDataForMenuNavigation = () => pageContent.map(item => {
    return {
      menuLink: item.menuLink,
      menuTitle: item.menuTitle,
      menuIcon: item.previewIcon
    }
  })

  useEffect(() => {
    let isSerbian = language.slug === 'sr'
    let getCurrLangMenu = () => isSerbian ? nodes[0].menuItems.nodes : nodes[1].menuItems.nodes
    setcurrLangMenu(getCurrLangMenu())
  }, [])

  return (
    <Layout language={language} currLangMenu={currLangMenu}>
      <SinglePageMenuNavigation data={prepareDataForMenuNavigation()} />
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
            previewIcon {
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
        ... on WpPage_Flexiblecontent_PageContent_CaffeePlace {
          title
          description
          homeMenuLink {
            ... on WpPage {
              id
              uri
            }
          }
          fieldGroupName
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
        }
    }
    }
  }
  allWpMenu {
    ...getMenus
  }
}`