import styled, { css } from 'styled-components'

export const NavMenuWrapper = styled.div`
  position: fixed;
  min-width: 100%;
  overflow: hidden;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: #fff;
  z-index: 100;
  transition: transform .4s ease;
  transform: ${(props) => props.isHidden ? 'translateY(-100%)' : 'translateY(0%)'};
  /* background: ${(props) => props.isHidden ? 'red' : 'green'}; */
  @media  (min-width: 1200px) {
    display: none;
  }
`

export const NavMenuContainer = styled.div`
  width: calc(100% - 32px);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NavigationLogo = styled.img`
  width: auto;
  height: 50px;
`

export const HamburgerButton = styled.section`
  width: 30px;
  height: 25px;
  position: absolute;
  right: 20px;
  margin: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #051912;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }
  span:nth-child(1) {
    top: 4px;
  }
  span:nth-child(2) {
    top: 12px;
  }
  span:nth-child(3) {
    top: 20px;
  }
  /* span:nth-child(4) {
    top: 36px;
  } */
  ${({ isOpen }) => isOpen && css`
    span:nth-child(1) {
      top: 14px;
      width: 0%;
      left: 50%;
    }
    span:nth-child(2) {
      transform: rotate(45deg);
      top: 16px;
    }
    span:nth-child(3) {
      transform: rotate(-45deg);
      top: 16px;
    }
  `}
`

export const NavigationMenuContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 100%;
  width: 100vw;
  height: 100vh;
  padding-top: 20px;
  background-color: white;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  transition: 0.3s;
  a {
    font-size: 24px;
    margin: 20px 0;
    text-decoration: none;
    color: #051912;
    text-transform: capitalize;
  }
  img {
    width: 50%;
    margin-bottom: 20px;
  }
  ${({ isOpen }) => isOpen && css`
    left: 0;
  `}
  @media (min-width: 768px) {
    width: 30vw;
    /* right: 100%; */
    ${({ isOpen }) => isOpen && css`
    left: 70vw;
  `}
  }
`

export const SocialLinks = styled.div`
  display: flex;
  flex-flow: column;
  p {
    font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: left;
  color: #051912;
  }
`

export const SocialLinksWrapper = styled.div`
  display: flex;
  svg {
    margin: 0 5px;
  }

`