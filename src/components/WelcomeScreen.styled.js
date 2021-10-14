import styled from 'styled-components'

export const WelcomeScreenContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0px;
  top: 0px;
  display: flex;
  flex-flow: column;
  padding: 40px 0px 20px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  z-index: 100;
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin: 20px auto;
  }
`

export const MenuItems = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  a {
    padding: 8px 6px;
    margin: 6px auto;
    font-size: 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryDark};
    text-transform: capitalize;
  }

`
export const LanguageWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 20px auto 0px;
  display: flex;
  justify-content: center;

`
export const LangItem = styled.a`
  width: fit-content;
  margin: 0 12px;
  padding: 4px;
  font-size: 18px;
  opacity: ${({ isActive }) => isActive ? '0.5' : '1'};
  pointer-events: ${({ isActive }) => isActive ? 'none' : 'auto'};
  color: ${({ theme }) => theme.colors.primaryDark};
  text-decoration: none;
  font-weight: bold;

`