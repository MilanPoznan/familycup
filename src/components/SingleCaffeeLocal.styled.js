import styled, { keyframes } from 'styled-components'

const showSingleCafe = keyframes`
  from {
    height: 0px;
  }
  to {
    height: 300px;
  }
`
const showContent = keyframes`
  from {
    opacity: 0;
    transform: scale(0.6);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const SingleCaffeeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  width: 80%;
  margin: 0 auto 40px;
 height: 300px;
  overflow: hidden;
  border-radius: 10px;
  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.1);
    }  
  }
  .gatsby-image-wrapper {
    height: 0px;
    border-radius: 10px;
    transition: 0.3s;
    animation-name: ${showSingleCafe};
    animation-duration: 1.4s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
    img {
      max-height: 300px;
      min-height: 300px;
    }
  }
  @media  (min-width: 768px) {  
    width: 46%;
  }

`




export const SingleOverlay = styled.div`
  position:absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => `${theme.colors.primaryGreen}80`};
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 0 10px;
  a {
    text-decoration: none;
  }  
  h3, .cafe-content {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    opacity: 0;
    animation-name: ${showContent};
    animation-delay: 1s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
`

export const SingleLogo = styled.img`
  width: 60%;
`