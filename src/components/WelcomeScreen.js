import React from 'react'

import { WelcomeScreenContainer, MenuItems, SingleMenuItem, LanguageWrapper, LangItem } from './WelcomeScreen.styled'

import logoSrc from '../images/familycup.png'

import { Link } from 'gatsby'

export default function WelcomeScreen({ currLangMenu, currLang }) {

  const isSerbianActive = currLang === 'sr'


  function handleMenuItemOnClick(e) {

  }
  return (
    <WelcomeScreenContainer>
      <MenuItems>
        {currLangMenu.length !== 0 && currLangMenu.map((item, index) =>
          <SingleMenuItem key={index} index={index} to={item.url} onClick={(e) => handleMenuItemOnClick(e)}>
            {item.label}
          </SingleMenuItem>
        )}
      </MenuItems>

      <img src={logoSrc} alt="logo" />

      <LanguageWrapper>
        <LangItem href="/" isActive={isSerbianActive} animationDirection="up">
          SR
        </LangItem>
        <LangItem href='/en/homepage' isActive={!isSerbianActive} animationDirection="down">
          EN
        </LangItem>

      </LanguageWrapper>
    </WelcomeScreenContainer>

  )
}
