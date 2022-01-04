import React, { useState } from 'react'
import { SocialLinksWrapper, SocialLinks, NavMenuWrapper, NavigationMenuContainer, NavigationLogo, NavMenuContainer, HamburgerButton } from './NavMenu.styles'
//Imgs
import logoSrc from '../images/familycup.png'
import { Link } from "gatsby"

import { useScrollPosition } from '../hooks/useScrollPosition'


export default function NavMenu({ currLangMenu }) {

  const [isHidden, setIsHidden] = useState(false)
  const [isOnTop, setIsOnTop] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < prevPos.y) !isHidden && setIsHidden(true)
    else isHidden && setIsHidden(false)

    if (currPos.y > -75) setIsOnTop(true)
    else isOnTop && setIsOnTop(false)
  }, [isHidden, isOnTop])


  return (
    <NavMenuWrapper isHidden={isHidden} isMenuOpen={isOpen}>
      <NavMenuContainer>
        <NavigationLogo src={logoSrc} alt="logo" isMenuOpen={isOpen} />
        <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>
        <NavigationMenuContainer isOpen={isOpen}>
          <img src={logoSrc} alt="kafeterija logo" />
          {currLangMenu &&
            currLangMenu.map((item, index) => <Link key={index} to={item.url}> {item.label}</Link>
            )}
          <SocialLinks>
            <p>Pratite nas: </p>
            <SocialLinksWrapper>
              <a
                href="https://www.facebook.com/FamilyCupBulevar"
                target="_blank"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#a)">
                    <path d="M23.444 11.722C23.444 5.248 18.196 0 11.722 0 5.248 0 0 5.248 0 11.722c0 5.851 4.287 10.7 9.89 11.58v-8.191H6.915v-3.389h2.977V9.14c0-2.938 1.75-4.561 4.427-4.561 1.282 0 2.624.229 2.624.229v2.885h-1.478c-1.456 0-1.91.903-1.91 1.831v2.198h3.25l-.519 3.389h-2.731v8.191c5.604-.88 9.89-5.729 9.89-11.58z" fill="#051912" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#051912" d="M0 0h23.444v23.444H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kafeterija_family_cup/?hl=en"
                target="_blank"
              >
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#a)" fill="#051912">
                    <path d="M12.61 2.11c3.133 0 3.504.015 4.736.07 1.144.05 1.762.242 2.175.403.544.21.938.467 1.346.874.412.412.664.801.874 1.346.16.412.353 1.035.403 2.175.055 1.237.069 1.608.069 4.735 0 3.132-.014 3.503-.069 4.735-.05 1.145-.242 1.763-.403 2.175-.21.545-.467.938-.874 1.346a3.606 3.606 0 0 1-1.346.875c-.413.16-1.035.352-2.175.402-1.237.056-1.608.07-4.735.07-3.132 0-3.503-.014-4.735-.07-1.145-.05-1.763-.242-2.175-.402a3.626 3.626 0 0 1-1.346-.875 3.605 3.605 0 0 1-.875-1.346c-.16-.412-.352-1.035-.403-2.175-.055-1.237-.068-1.607-.068-4.735 0-3.132.013-3.503.068-4.735.05-1.144.243-1.763.403-2.175.211-.545.467-.938.875-1.346a3.606 3.606 0 0 1 1.346-.874c.412-.16 1.035-.353 2.175-.403 1.232-.055 1.603-.07 4.735-.07zm0-2.11C9.429 0 9.03.014 7.78.069 6.535.124 5.678.325 4.936.614c-.773.302-1.428.7-2.078 1.355a5.743 5.743 0 0 0-1.356 2.074c-.288.747-.49 1.598-.545 2.844C.902 8.14.89 8.54.89 11.722c0 3.183.013 3.581.068 4.831.055 1.245.257 2.102.545 2.844a5.72 5.72 0 0 0 1.356 2.079 5.731 5.731 0 0 0 2.074 1.35c.746.289 1.598.49 2.843.545 1.25.055 1.649.069 4.831.069 3.183 0 3.581-.014 4.831-.069 1.246-.055 2.102-.256 2.844-.545a5.73 5.73 0 0 0 2.074-1.35 5.73 5.73 0 0 0 1.35-2.075c.29-.746.49-1.598.546-2.843.055-1.25.068-1.649.068-4.831 0-3.183-.013-3.581-.068-4.831-.055-1.246-.257-2.102-.545-2.844a5.492 5.492 0 0 0-1.342-2.083A5.731 5.731 0 0 0 20.29.619c-.746-.29-1.598-.49-2.844-.546C16.192.013 15.793 0 12.611 0z" />
                    <path d="M12.611 5.701a6.023 6.023 0 0 0-6.021 6.022 6.023 6.023 0 0 0 6.021 6.02 6.023 6.023 0 0 0 6.021-6.02A6.023 6.023 0 0 0 12.611 5.7zm0 9.927a3.906 3.906 0 1 1 .001-7.812 3.906 3.906 0 0 1-.001 7.812zM20.276 5.463a1.406 1.406 0 1 1-2.812 0 1.406 1.406 0 0 1 2.812 0z" />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#051912" transform="translate(.889)" d="M0 0h23.444v23.444H0z" />
                    </clipPath>
                  </defs>
                </svg>

              </a>
            </SocialLinksWrapper>
          </SocialLinks>
        </NavigationMenuContainer>

      </NavMenuContainer>

    </NavMenuWrapper>
  )
}
