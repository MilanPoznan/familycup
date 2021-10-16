import React, { useState } from 'react'
import { NavMenuWrapper, NavigationMenuContainer, NavigationLogo, NavMenuContainer, HamburgerButton } from './NavMenu.styles'
import logoSrc from '../images/familycup.png'

import { Link } from "gatsby"


export default function NavMenu({ currLangMenu }) {
  console.log(currLangMenu)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavMenuWrapper>
      <NavMenuContainer>
        <NavigationLogo src={logoSrc} alt="logo" />
        <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>
      </NavMenuContainer>
      <NavigationMenuContainer isOpen={isOpen}>
        {currLangMenu &&
          currLangMenu.map((item, index) => <Link key={index} to={item.url}> {item.label}</Link>
          )}
        <img src={logoSrc} alt="kafeterija logo" />
      </NavigationMenuContainer>
    </NavMenuWrapper>
  )
}
