import React from 'react'
import { TeaItemWrapper } from './CoffeeMenu.styled'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  TitleWrapp,
  MenuTitle,
  ReadMoreText,
  MenuDesc,
  MenuItemWrapper
} from '../Menu.styles'

import defLogo from '../../images/hero-photo.png'

const LongDescription = ({ text, onClickFunc }) => <div>{text}...<ReadMoreText onClick={onClickFunc}>vise</ReadMoreText></div>

export default function TeaComponent({ menuData }) {
  return (
    <MenuItemWrapper>
      {menuData.map((item, index) => {
        const image = item.image ? getImage(item.image.localFile.childImageSharp.gatsbyImageData) : null
        return (
          <TeaItemWrapper key={index} isWider={index < 3}>
            {image !== null ? <GatsbyImage image={image} alt="menu item" /> : <img className="def-img" src={defLogo} />}
            <TitleWrapp>
              <MenuTitle>{item.title}</MenuTitle>
            </TitleWrapp>
            <MenuDesc>
              {item.description && item.description.length > 54
                ? <LongDescription text={item.description.substring(0, 40)} />
                : item.description
              }
            </MenuDesc>
          </TeaItemWrapper>)
      })}
    </MenuItemWrapper>
  )
}
