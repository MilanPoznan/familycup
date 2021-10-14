import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  flex-flow: column;
  @media  (min-width: 768px) {  
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const MenuComponent = styled.div`
`

export const MenuComponentTitle = styled.h2`
  width: 80%;
  margin: 40px auto;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`

export const MenuItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  margin-bottom: 40px;
  width: 100%;
  .gatsby-image-wrapper {
    width: 100%;
    margin: 0 auto;
    height: 200px;
  } 
@media  (min-width: 768px) {
  width: 46%;
  .gatsby-image-wrapper {
    margin: 0 auto;
    height: 240px;
  } 
  }
`

export const TitleWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0px 0 0;

`

export const MenuTitle = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 10px;
  font-size: 18px;

`

export const MenuPrice = styled.p`
  margin: 0;
  font-size: 18px !important;
  font-family: Arial, Helvetica, sans-serif;
`

export const MenuDesc = styled.div`
  padding: 0 5%;
  margin-top: 12px;
  font-size: 14px;
  text-align: center;
  line-height: 18px;
  letter-spacing: .3px;
`