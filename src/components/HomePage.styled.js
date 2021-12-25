
import styled, { keyframes } from 'styled-components'

export const HomePgeWrapper = styled.div`
  padding: 0px;
  @media  (min-width: 1200px) {  
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
  }
`

const showLogo = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;

  }
`

export const SingleLogoWrapper = styled.div`
  width: 100%;
  height: 60px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #051912;
  img {
    width: 40px;
    height: 40px;
  }
  @media  (min-width: 1200px) {  
    position: relative;
    width: 100%;
    height: 114px;
    &:before {
      content: '';
      position: absolute;
      height: 256px;
      width: 256px;
      border-radius: 50%;
      background: red;
      top: -80px;
      background-color: #051912;
      z-index: 110;
      opacity: 1;
    }
    img {
      position: relative;
      width: 126px;
      height: 126px;
      top: 28px;
      z-index: 200;
    }
  }
`