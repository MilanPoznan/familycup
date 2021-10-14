import React, { useState, useEffect } from "react"
import { GlobalWrapper } from './Layout.styles'

import WelcomeScreen from "./WelcomeScreen"

//Styled compo
import { ThemeProvider } from 'styled-components';
import { theme } from './globalTheme'
import NavMenu from './NavMenu'

import '../styles/normalizer.css'

const Layout = ({ children, language }) => {

  return (
    <ThemeProvider theme={theme}>
      <NavMenu />
      <GlobalWrapper>
        {children}
      </GlobalWrapper>
    </ThemeProvider>
  )

}

export default Layout