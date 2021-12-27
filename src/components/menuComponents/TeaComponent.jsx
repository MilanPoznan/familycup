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

import defLogo from '../../images/tea.jpg'

// const LongDescription = ({ text, setShowModalCallback, setModalPropsCallback, }) => <div>{text}...<ReadMoreText onClick={onClickFunc}>opširnije</ReadMoreText></div>

export default function TeaComponent({ menuData, setShowModalCallback, setModalPropsCallback, }) {
  return (
    <MenuItemWrapper>
      {menuData.map((item, index) => {

        const image = item.image ? getImage(item.image.localFile.childImageSharp.gatsbyImageData) : null
        const text = item.description && item.description.substring(0, 45)

        return (
          <TeaItemWrapper key={index} isWider={index < 3}>
            {image !== null ? <GatsbyImage image={image} alt="menu item" /> : <img className="def-img" src={defLogo} />}
            <TitleWrapp>
              <MenuTitle>{item.title}</MenuTitle>
            </TitleWrapp>
            <MenuDesc>
              {item.description && item.description.length > 54
                ? <div> {text}...
                  <ReadMoreText
                    onClick={() => {
                      setShowModalCallback()
                      setModalPropsCallback(item.title, item.description, image !== null ? image : defLogo)
                    }}
                  >opširnije</ReadMoreText></div>
                : item.description
              }
            </MenuDesc>
          </TeaItemWrapper>)
      })}
    </MenuItemWrapper>
  )
}
