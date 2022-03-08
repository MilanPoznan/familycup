import styled from 'styled-components'

export const CoffeeMenuWrapper = styled.div`


`

export const CoffeeItemWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 48%;
  margin-bottom: 40px;
  .gatsby-image-wrapper, .def-img {
      height: 28vh;
      width: 100%;
      object-fit: cover;
  }
  @media (min-width: 1200px) {
    width: ${props => props.isWider ? '362px' : '210px'};
    margin-right: 18px;
    .gatsby-image-wrapper, .def-img {
      min-height: 274px;
    }
  }

`



export const TeaItemWrapper = styled.div`
display: flex;
  flex-flow: column;
  width: 48%;
  margin-bottom: 40px;
  .gatsby-image-wrapper, .def-img {
    height: 28vh;
    width: 100%;
    object-fit: cover;

  }
  @media (min-width: 1200px) {
    width: ${props => props.isWider ? '362px' : '210px'};
    margin-right: 18px;
    .gatsby-image-wrapper, .def-img {
      min-height: 280px;
    }
  }
  `

export const JuiceWrapper = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 1200px) {
    justify-content: flex-start;
    
  }
`

// Juice section 
export const JuiceItemWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 48%;
  margin-bottom: 40px;
  .gatsby-image-wrapper, .def-img {
    height: 28vh;
    width: 100%;
    object-fit: cover;
  }
  @media (min-width: 1200px) {
    width: 208px;
    /* height: 146px; */
    margin-right: 20px;
    .gatsby-image-wrapper, .def-img {
      width: 210px;
      height: 146px;
    }
  }
  `


//Food section 
export const FoodMenuTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.09;
  letter-spacing: normal;
  text-align: left;
  color: #e3e0dd;
  `

export const FoodDesc = styled.p`
    font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #e3e0dd;
  opacity: 0.6;
  `


export const CigaretteItemWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 48%;
  margin-bottom: 40px;
  .gatsby-image-wrapper, .def-img {
    height: 28vh;
    width: 100%;
    object-fit: cover;

  }
  @media (min-width: 1200px) {
    width: ${props => props.isWider ? '267px' : '210px'};
    margin-right: 18px;
    .gatsby-image-wrapper, .def-img {
      height: 210px;
    }
  }
`