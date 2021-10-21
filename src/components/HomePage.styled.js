
import styled, { keyframes } from 'styled-components'

export const HomePgeWrapper = styled.div`
  padding: 40px 0;
  @media  (min-width: 768px) {  
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
  width: 60%;
  height: auto;
  margin: 20px auto 40px;
  animation-name: ${showLogo};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  img {
    width: 100%;
    height: auto;
  }
  @media  (min-width: 768px) {  
    width: 40%;
    margin: 20px auto 0px;

  }
`