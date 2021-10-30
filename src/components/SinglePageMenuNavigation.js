import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { MenuItemWrapper, SingleMenuItem, ArrowDown } from './SinglePageMenuNavigation.styled'

export default function SinglePageMenuNavigation({ data }) {
  console.log(data)


  return (
    <MenuItemWrapper>
      {data.map(item => {
        let image = getImage(item.menuIcon.localFile.childImageSharp.gatsbyImageData)
        return (
          <SingleMenuItem>
            <GatsbyImage image={image} alt="menu item" />
            <a href={`#${item.menuLink}`}>
              {item.menuTitle}
            </a>

          </SingleMenuItem>
        )
      })}
      <ArrowDown />

    </MenuItemWrapper>
  )
}
