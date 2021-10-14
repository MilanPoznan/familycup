import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import { MenuComponent, MenuItemWrapper, MenuWrapper, TitleWrapp, MenuTitle, MenuPrice, MenuDesc, MenuComponentTitle } from './Menu.styles'

export default function Menu({ menuData, title, id }) {

  // menuData.map(item => console.log(item))
  return (
    <MenuComponent id={id}>
      <MenuComponentTitle>{title}</MenuComponentTitle>
      <MenuWrapper>
        {menuData.map((item, index) => {
          const image = getImage(item.image.localFile.childImageSharp.gatsbyImageData)
          return (<MenuItemWrapper key={index}>
            <GatsbyImage image={image} alt="menu item" />
            <TitleWrapp>
              <MenuTitle>{item.title}</MenuTitle>
              <MenuPrice>{item.price}RSD</MenuPrice>
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
