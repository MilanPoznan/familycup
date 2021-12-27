import React from 'react'
import { JuiceItemWrapper, JuiceWrapper } from './CoffeeMenu.styled'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  TitleWrapp,
  MenuTitle,
  ReadMoreText,
  MenuDesc,
  MenuItemWrapper
} from '../Menu.styles'

import defLogo from '../../images/soda.jpg'

const LongDescription = ({ text, onClickFunc }) => <div>{text}...<ReadMoreText onClick={onClickFunc}>vise</ReadMoreText></div>

export default function JuicesComponent({ menuData }) {
  return (
    <JuiceWrapper>
      {menuData.map((item, index) => {
        const image = item.image ? getImage(item.image.localFile.childImageSharp.gatsbyImageData) : null
        return (
          <JuiceItemWrapper key={index} isWider={index < 3}>
            {image !== null ? <GatsbyImage image={image} alt="menu item" /> : <img className="def-img" src={defLogo} />}
            <TitleWrapp>
              <MenuTitle>{item.title}</MenuTitle>
            </TitleWrapp>
            <MenuDesc>
              {item.description && item.description.length > 54
                ? <LongDescription text={item.description.substring(0, 45)} />
                : item.description
              }
            </MenuDesc>
          </JuiceItemWrapper>)
      })}
    </JuiceWrapper>
  )
}
