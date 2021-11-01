import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import { MenuComponent, MenuItemWrapper, MenuWrapper, TitleWrapp, MenuTitle, MenuPrice, MenuDesc, MenuComponentTitle } from './Menu.styles'

export default function Menu({ menuData, title, id }) {

  return (
    <MenuComponent id={id}>
      <MenuComponentTitle>{title}</MenuComponentTitle>
      <MenuWrapper>
        {menuData.map((item, index) => {
          const image = item.image ? getImage(item.image.localFile.childImageSharp.gatsbyImageData) : null
          return (<MenuItemWrapper key={index}>
            {image !== null ? <GatsbyImage image={image} alt="menu item" /> : null}
            <TitleWrapp>
              <MenuTitle>{item.title}</MenuTitle>
              <MenuPrice>{item.price}</MenuPrice>
            </TitleWrapp>
            <MenuDesc>
              {item.description}
            </MenuDesc>
          </MenuItemWrapper>)
        })}
      </MenuWrapper>
    </MenuComponent>
  )
}
