import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'


const calcDelay = (index) => index - (0.8 * index)


const showMenuLangBottom = (isActive) => keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translate(0px);
    opacity: ${isActive ? 0.5 : 1};

  }
`

const showMenuLangTop = (isActive) => keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;

  }
  to {
    transform: translateY(0px);
    opacity: ${isActive ? '0.5' : '1'};

  }
`

const slideToRight = keyframes`
  to {
    transform: translatex(40px);
    opacity: 1;
  }
`

const onLoadImage = keyframes`
  from {
    transform: scale(0.6);
    opacity: 0;

  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`


export const WelcomeScreenContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0px;
  top: 0px;
  display: flex;
  flex-flow: column;
  padding: 40px 0px 20px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  z-index: 100;
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin: 20px auto;
    animation-name: ${onLoadImage};
    animation-duration: 1s;
    animation-delay: 0.6s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  @media (min-width: 768px) {
    padding: 100px 0px 100px;
    img {
      width: 240px;
      height: 240px;
    }
  }
`


export const MenuItems = styled.div`
  font-weight: bold;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;

`

export const SingleMenuItem = styled(Link)`
  position: relative;
  left: -40px;
  padding: 8px 6px;
  margin: 6px auto;
  font-size: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryDark};
  text-transform: capitalize;
  animation-name: ${slideToRight};
  animation-duration: 0.8s;
  animation-delay: ${({ index }) => `${calcDelay(index)}s`};
  animation-fill-mode: forwards;
  opacity: 0;
  font-size: 24px;
  /* font-family: Arial, Helvetica, sans-serif; */
  @media (min-width: 768px) {
    font-size: 28px;
  }
`

export const LanguageWrapper = styled.div`
display: flex;
width: 80%;
margin: 20px auto 0px;
display: flex;
justify-content: center;

`
export const LangItem = styled.a`
  width: fit-content;
  margin: 0 12px;
  padding: 4px;
  font-size: 18px;
  pointer-events: ${({ isActive }) => isActive ? 'none' : 'auto'};
  color: ${({ theme }) => theme.colors.primaryDark};
  text-decoration: none;
  font-weight: bold;
  animation-name: ${({ animationDirection, isActive }) => animationDirection === 'up' ? showMenuLangTop(isActive) : showMenuLangBottom(isActive)};
  animation-duration: 0.6s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
  opacity: 0;

`