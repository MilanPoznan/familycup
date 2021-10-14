import styled from 'styled-components'

export const NavMenuWrapper = styled.div`
  position: fixed;
  min-width: 100%;
  left: 0;
  top: 0;
  height: 60px;
  border-bottom: 1px solid grey;
  display: flex;
  padding: 16px;
  background-color: #fff;
  div {
    width: calc(100% - 32px);
    display: flex;
  justify-content: space-between;
  align-items: center;
  }
  img {
    width: 50px;
    height: 50px;
  }
  svg {
    right: 0;
    display: block;
    position: relative;
    right: 0;
  }

  @media  (min-width: 768px) {
    height: 80px;
    img {
      width: 60px;
      height: 60px;
    }

  }
`