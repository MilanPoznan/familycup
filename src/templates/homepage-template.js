import React, { useState, useEffect } from 'react'
import WelcomeScreen from "../components/WelcomeScreen"
import Layout from '../components/Layout'
import { graphql, navigate } from 'gatsby'
import HomepageLayout from '../components/HomepageLayout'
import SingleCaffeeLocal from '../components/SingleCaffeeLocal'
import Menu from '../components/Menu'

import { HomePgeWrapper, SingleLogoWrapper } from '../components/HomePage.styled'
import logoSrc from '../images/familycup.png'


export default function HomepageTemplate({ data }) {
  const { allWpMenu: { nodes }, wpPage: { language, flexibleContent: { pageContent } } } = data

  const [currLangMenu, setcurrLangMenu] = useState([])

  useEffect(() => {
    let isSerbian = language.slug === 'sr'
    let getCurrLangMenu = () => isSerbian ? nodes[1].menuItems.nodes : nodes[0].menuItems.nodes
    setcurrLangMenu(getCurrLangMenu())
    console.log(currLangMenu)
  }, [])

  return (
    <Layout hasHeader={false}>
      <SingleLogoWrapper>
        <img src={logoSrc} logo="kafeterija logo" />
      </SingleLogoWrapper>
      <HomePgeWrapper>
        {pageContent.map((item, index) => {
          if (item.fieldGroupName === "Page_Flexiblecontent_PageContent_Menu") {
            return <Menu key={index} menuData={item.menuItems} title={item.menuTitle} id={item.menuLink} />
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
      ...getFlexibleContent
    }
  }

  allWpMenu {
    ...getMenus
  }
}`