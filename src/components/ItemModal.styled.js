import styled from 'styled-components'

export const ItemModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #1343325C;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`

export const ItemModalWrapper = styled.div`
  width: 90%;
  height: auto;
  background: #fff;
  opacity: 1;
  position: relative;
  h1 {
    text-align: center;
    width: 80%;
    margin: 40px auto 10px;
  }
  p {
    text-align: center;
    width: 80%;
    margin: 0 auto 20px;
  }
`

export const DefModalImage = styled.img`
  width: 100%;
  height: 300px;
`

export const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  cursor: pointer;
  span {
    width: 30px;
    height: 6px;
    background: #134332;
    display: flex;
    border-radius: 5px;
    position: absolute;
    right: 2px;
    top: 20px;
  }
  .left {
    transform: rotate(45deg);
  }
  .right {
    transform: rotate(-45deg);
  }
`