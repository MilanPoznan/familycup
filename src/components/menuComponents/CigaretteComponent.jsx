import React from 'react'
import { CigaretteItemWrapper } from './CoffeeMenu.styled'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  TitleWrapp,
  MenuTitle,
  ReadMoreText,
  MenuDesc,
  MenuItemWrapper
} from '../Menu.styles'

import defLogo from '../../images/cigar.jpg'


export default function CigaretteComponent({ menuData, setShowModalCallback, setModalPropsCallback }) {
  return (
    <MenuItemWrapper>
      {menuData.map((item, index) => {
        const image = item.image ? getImage(item.image.localFile.childImageSharp.gatsbyImageData) : null
        const text = item.description && item.description.substring(0, 45)

        return (
          <CigaretteItemWrapper key={index} isWider={index < 4}>
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
          </CigaretteItemWrapper>)
      })}
    </MenuItemWrapper>
  )
}
