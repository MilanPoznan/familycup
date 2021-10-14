import React from 'react'

import { WelcomeScreenContainer, MenuItems, LanguageWrapper, LangItem } from './WelcomeScreen.styled'

import logoSrc from '../images/familycup.png'

import { Link } from 'gatsby'

export default function WelcomeScreen({ currLangMenu, currLang }) {

  // console.log(menuItems.nodes)
  const isSerbianActive = currLang === 'sr'

  return (
    <WelcomeScreenContainer>
      <MenuItems>
        {currLangMenu.length !== 0 && currLangMenu.map(item =>
          <Link to={item.path.replace('http://', '')}>
            {item.label}
          </Link>
        )}
        {/* <Link to="menu/#coffee">Kafe</Link>
        <Link to="menu/#food">hrana</Link>
        <Link to="menu/#tabaco">Cigarete</Link>
        <Link to="menu/#juices">sokovi</Link> */}
      </MenuItems>

      <img src={logoSrc} alt="logo" />

      <LanguageWrapper>
        <LangItem href="/" isActive={isSerbianActive}>
          SR
        </LangItem>
        <LangItem href='/en/homepage' isActive={!isSerbianActive}>
          EN
        </LangItem>

      </LanguageWrapper>
    </WelcomeScreenContainer>

  )
}
