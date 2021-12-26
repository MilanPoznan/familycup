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
  width: 100%;
  margin: 0 auto;
  height: calc(25vh - 15px);
  overflow: hidden;
  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.1);
    }  
  }
  .gatsby-image-wrapper {
    height: 0px;
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
  @media  (min-width: 1200px) {  
    
    width: 25%;
    height: calc(100vh - 114px);
    .gatsby-image-wrapper {
      min-height: calc(100vh - 114px);

      img {
      max-height: 100vh;
      min-height: 100vh;
    }
    }
  }

`




export const SingleOverlay = styled.div`
  position:absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: calc(25vh - 15px);
  /* background-color: ${({ theme }) => `${theme.colors.primaryGreen}80`}; */
  background: linear-gradient(180deg, rgba(5, 25, 18, 0) 0%, rgba(5, 25, 18, 0.0625) 51.04%, #051912 100%);
  z-index: 100;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0 10px 14px;
  a {
    text-decoration: none;
  }  
  h3 {
    font-size: 16px;
    margin: 0 0 6px;
  }
  p {
    font-size: 10px;
  }
  h3, .cafe-content {
    color: ${({ theme }) => theme.colors.white};
    opacity: 0;
    animation-name: ${showContent};
    animation-delay: 1s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  @media  (min-width: 1200px) {  
    height: calc(100vh - 114px);
    padding: 0 40px 128px;
    h3 {
      font-size: 26px;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
    }
  }
`

export const SingleLogo = styled.img`
  width: 60%;
`