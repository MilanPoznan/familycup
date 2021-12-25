import React, { useState, useEffect } from "react"
import { GlobalWrapper, HomeWrapper } from './Layout.styles'

import WelcomeScreen from "./WelcomeScreen"

//Styled compo
import { ThemeProvider } from 'styled-components';
import { theme } from './GlobalTheme'
import NavMenu from './NavMenu'

import '../styles/normalizer.css'

const Layout = ({ children, currLangMenu, hasHeader = true }) => {

  return (
    <ThemeProvider theme={theme}>
      {hasHeader && <NavMenu currLangMenu={currLangMenu} />}
      {hasHeader
        ? <GlobalWrapper>
          {children}
        </GlobalWrapper>
        : <HomeWrapper>
          {children}
        </HomeWrapper>
      }
    </ThemeProvider>
  )

}

export default Layout