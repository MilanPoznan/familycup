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
  }
  @media (min-width: 1200px) {
    width: ${props => props.isWider ? '362px' : '210px'};
    margin-right: 18px;
    .gatsby-image-wrapper, .def-img {
      min-height: 274px;
    }
  }

`