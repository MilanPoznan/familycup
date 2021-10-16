import styled, { css } from 'styled-components'

export const NavMenuWrapper = styled.div`
  position: fixed;
  min-width: 100%;
  overflow: hidden;
  left: 0;
  top: 0;
  height: 60px;
  border-bottom: 1px solid grey;
  display: flex;
  padding: 16px;
  background-color: #fff;
  z-index: 100;
  @media  (min-width: 768px) {
    height: 80px;
    img {
      width: 60px;
      height: 60px;
    }
  }
`

export const NavMenuContainer = styled.div`
  width: calc(100% - 32px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NavigationLogo = styled.img`
  width: 50px;
  height: 50px;
`

export const HamburgerButton = styled.section`
  width: 40px;
  height: 35px;
  position: relative;
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
    height: 6px;
    width: 100%;
    background: #d3531a;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }
  span:nth-child(1) {
    top: 0px;
  }
  span:nth-child(2) {
    top: 14px;
  }
  span:nth-child(3) {
    top: 28px;
  }
  span:nth-child(4) {
    top: 36px;
  }
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
  padding-top: 80px;
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
  }
  img {
    width: 50%;
  }
  ${({ isOpen }) => isOpen && css`
    left: 0;
  `}
`
