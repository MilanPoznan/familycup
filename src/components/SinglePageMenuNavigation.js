import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { HeroTitle, HeroLogo, HeroBackground, HeroStyled, MenuItemWrapper, SingleMenuItem } from './SinglePageMenuNavigation.styled'
import heroBackgroundImage from '../images/hero-photo.png'
import heroLogo from '../images/hero-logo.png'
export default function SinglePageMenuNavigation({ data }) {

  return (
    <HeroStyled>
      <HeroBackground bgImage={heroBackgroundImage}>
        <HeroLogo src={heroLogo} />
        <HeroTitle>
          Family Cup
        </HeroTitle>
      </HeroBackground>
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

      </MenuItemWrapper>
    </HeroStyled>
  )
}
