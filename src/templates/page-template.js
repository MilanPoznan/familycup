import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql, navigate } from 'gatsby'


import Layout from '../components/Layout'

import Menu from '../components/Menu'

export default function Page({ data, location }) {

  const { allWpMenu: { nodes }, wpPage: { language, flexibleContent: { pageContent } } } = data
  console.log(language)

  const [currLangMenu, setcurrLangMenu] = useState([])

  useEffect(() => {
    let isSerbian = language.slug === 'sr'
    let getCurrLangMenu = () => isSerbian ? nodes[0].menuItems.nodes : nodes[1].menuItems.nodes
    setcurrLangMenu(getCurrLangMenu())
    console.log(currLangMenu)
  }, [])

  return (
    <Layout language={language} currLangMenu={currLangMenu}>
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
      ...getFlexibleContent
    }
  }
  allWpMenu {
    ...getMenus
  }
}`