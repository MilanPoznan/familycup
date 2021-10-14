import React, { useState, useEffect } from 'react'
import WelcomeScreen from "../components/WelcomeScreen"
import Layout from '../components/Layout'
import { graphql, navigate } from 'gatsby'

export default function HomepageTemplate({ data }) {
  const { allWpMenu: { nodes }, wpPage: { language } } = data

  const [currLangMenu, setcurrLangMenu] = useState([])

  useEffect(() => {
    let isSerbian = language.slug === 'sr'
    let getCurrLangMenu = () => isSerbian ? nodes[0].menuItems.nodes : nodes[1].menuItems.nodes
    setcurrLangMenu(getCurrLangMenu())
    console.log(currLangMenu)
  }, [])

  console.log(currLangMenu)
  return (
    <div>
      <Layout>
        <WelcomeScreen currLangMenu={currLangMenu} currLang={language.slug} />
      </Layout>
    </div>
  )
}


export const homepageQuery = graphql`query homePage($id: String!) {
  wpPage(id: {eq: $id}) {
    language {
      slug
    }
  }
  allWpMenu {
    nodes {
      locations
      menuItems {
        nodes {
          label
          path
          title
        }
      }
    }
  }
}`