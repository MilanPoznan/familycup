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
height: 100vh;
display: flex;
flex-flow: column;
justify-content: center;
@media  (min-width: 768px) {  
  height: auto;
  padding-top: 200px;
  flex-flow: row;
}

`

export const SingleMenuItem = styled.div`
width: 100%;
/* height: 50px; */
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
margin: 14px auto;
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