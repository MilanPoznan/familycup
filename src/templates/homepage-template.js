import React, { useState, useEffect } from 'react'
import WelcomeScreen from "../components/WelcomeScreen"
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import SingleCaffeeLocal from '../components/SingleCaffeeLocal'
import Menu from '../components/Menu'

import { HomePgeWrapper, SingleLogoWrapper } from '../components/HomePage.styled'
import logoSrc from '../images/familylogo.png'


export default function HomepageTemplate({ data }) {
  const { allWpMenu: { nodes }, wpPage: { language, flexibleContent: { pageContent } } } = data

  const [currLangMenu, setcurrLangMenu] = useState([])

  useEffect(() => {
    let isSerbian = language.slug === 'sr'
    let getCurrLangMenu = () => isSerbian ? nodes[1].menuItems.nodes : nodes[0].menuItems.nodes
    setcurrLangMenu(getCurrLangMenu())
  }, [])

  return (
    <Layout hasHeader={false}>
      <SingleLogoWrapper>
        <img src={logoSrc} logo="kafeterija logo" loading="lazy" />
      </SingleLogoWrapper>
      <HomePgeWrapper>
        {pageContent.map((item, index) => {
          if (item.fieldGroupName === "Page_Flexiblecontent_PageContent_Menu") {
            return <Menu key={index} menuData={item.menuItems} title={item.menuTitle} menuLink={item.homeMenuLink} />
          } else if (item.fieldGroupName === 'Page_Flexiblecontent_PageContent_CaffeePlace') {
            return <SingleCaffeeLocal key={index} data={item} />
          }
        })}
      </HomePgeWrapper>
    </Layout >
  )
}


export const homepageQuery = graphql`query homePage($id: String!) {
  wpPage(id: {eq: $id}) {
    language {
      slug
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