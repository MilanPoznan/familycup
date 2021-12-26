import React from 'react'
import {
  CoffeeItemWrapper,
  FoodDesc,
  FoodMenuTitle,
} from './CoffeeMenu.styled'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  TitleWrapp,
  ReadMoreText,
  MenuItemWrapper
} from '../Menu.styles'

import defLogo from '../../images/hero-photo.png'

const LongDescription = ({ text, onClickFunc }) => <div>{text}...<ReadMoreText isWhite={true} onClick={onClickFunc}>Opširnije</ReadMoreText></div>


export default function FoodComponent({ menuData }) {
  return (
    <MenuItemWrapper>
      {menuData.map((item, index) => {
        const image = item.image ? getImage(item.image.localFile.childImageSharp.gatsbyImageData) : null
        return (
          <CoffeeItemWrapper key={index} isWider={true}>
            {image !== null ? <GatsbyImage image={image} alt="menu item" /> : <img className="def-img" src={defLogo} />}
            <TitleWrapp>
              <FoodMenuTitle>{item.title}</FoodMenuTitle>
            </TitleWrapp>
            <FoodDesc>
              {item.description && item.description.length > 84
                ? <LongDescription text={item.description.substring(0, 84)} />
                : item.description
              }
            </FoodDesc>
          </CoffeeItemWrapper>)
      })}
    </MenuItemWrapper>
  )
}
