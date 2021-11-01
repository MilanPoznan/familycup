import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { MenuItemWrapper, SingleMenuItem, ArrowDown } from './SinglePageMenuNavigation.styled'

export default function SinglePageMenuNavigation({ data }) {

  return (
    <MenuItemWrapper>
      {data.map(item => {
        let image = item.menuIcon && getImage(item.menuIcon.localFile.childImageSharp.gatsbyImageData)
        return (
          <SingleMenuItem>
            {image && <GatsbyImage image={image} alt="menu item" />}
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
