import React from 'react'
import { NavMenuWrapper } from './NavMenu.styles'
import logoSrc from '../images/familycup.png'

export default function NavMenu({ menuItems }) {
  return (
    <NavMenuWrapper>
      <div>
        <img src={logoSrc} alt="logo" />
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="80" height="14" rx="8"></rect>
          <rect y="30" width="80" height="14" rx="8"></rect>
          <rect y="60" width="80" height="14" rx="8"></rect>
        </svg>
      </div>
    </NavMenuWrapper>
  )
}
