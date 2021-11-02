import styled, { keyframes } from 'styled-components'

const animatearrow = keyframes`
from {
  opacity: 0.4;
}
to {
  opacity: 1;
}
`


export const MenuItemWrapper = styled.div`
padding-top: 20px;
height: auto;
display: flex;
flex-flow: row;
flex-wrap: wrap;
justify-content: center;
align-items: flex-start;
@media  (min-width: 768px) {  
  height: auto;
  padding-top: 200px;
  flex-flow: row;
}
`

export const SingleMenuItem = styled.div`
width: 30%;
max-height: 160px;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
margin: 30px auto;
.gatsby-image-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 12px;
}
a {
  text-decoration: none;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
}
@media  (min-width: 768px) {  
  .gatsby-image-wrapper {
    width: 80px;
  height: 80px;
  }
  }
`

export const ArrowDown = styled.div`
  width: 30px;
  height: 30px;
  border-top: 4px solid ${({ theme }) => theme.colors.primaryDark};
  border-right: 4px solid ${({ theme }) => theme.colors.primaryDark};
  transform: rotate(135deg);
  margin: 10px auto 0;
  animation: ${animatearrow} 2s infinite ease-in-out;
  @media  (min-width: 768px) {  
    display: none;
  }

`