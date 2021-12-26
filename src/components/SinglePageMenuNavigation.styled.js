import styled, { keyframes } from 'styled-components'

const animatearrow = keyframes`
from {
  opacity: 0.4;
}
to {
  opacity: 1;
}
`
export const HeroStyled = styled.div`
background: #f7ebde;
`

export const HeroBackground = styled.div`
  width: 100%;
  height: 220px;
  padding-top: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
  background: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  @media  (min-width: 1200px) {  
    height: 560px;
  }
`
export const HeroLogo = styled.img`
  width: 105px;
  height: 105px;
`
export const HeroTitle = styled.h1`
  display: none;
@media  (min-width: 1200px) {  
  display: flex;
  font-size: 56px;
  font-weight: bold;
  color: #051912;
}

`

export const MenuItemWrapper = styled.div`
  height: auto;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: -70px;
  padding: 0px 16px;
  @media  (min-width: 1200px) {  
    height: auto;
    flex-flow: row;
    padding: 0px 40px;
    max-width: 1440px;
    margin: -90px auto 0;

  }
`

export const SingleMenuItem = styled.div`
  width: 46%;
  height: 100px;
  /* max-height: 90px; */
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  .gatsby-image-wrapper {
    width: 100%;
    margin-bottom: 12px;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    color: #051912;
    text-align: center;
    font-family: 'met-semi-bold';
  }
  @media  (min-width: 1200px) {  
    width: 210px;
    height: 160px;
    /* .gatsby-image-wrapper {
        width: 80px;
        height: 80px;
      } */
  }

`