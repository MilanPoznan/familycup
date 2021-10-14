import React, { useState, useEffect } from "react"
import { GlobalWrapper } from './Layout.styles'

import WelcomeScreen from "./WelcomeScreen"

//Styled compo
import { ThemeProvider } from 'styled-components';
import { theme } from './globalTheme'

import '../styles/normalizer.css'

const Layout = ({ children, language }) => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalWrapper>
        {children}
      </GlobalWrapper>
    </ThemeProvider>
  )

}

export default Layout