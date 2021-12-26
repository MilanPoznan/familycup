import styled from "styled-components";


function sectionBgColorDepeandsOfType(type) {
  switch (type) {
    case 'coffee':
      return '#f7ebde'
    case 'tea':
      return '#d6cac2'
    case 'cigarette':
      return '#f7ebde'
    case 'juices':
      return '#d6cac2'
    case 'alcohol':
      return '#f7ebde'
    case 'food':
      return '#134332'
    default:
      return '#f7ebde'
  }
}
export const MenuWrapper = styled.div`
  @media  (min-width: 1200px) {  
    width: 1140px;
    margin: 0 auto;
  }
`

export const MenuComponent = styled.div`
  padding: 0 16px;
  background-color: ${props => sectionBgColorDepeandsOfType(props.menuType)};

`

export const MenuComponentTitle = styled.h2`
  width: 80%;
  margin: 40px auto;
  text-align: center;
  font-family: 'Gotham', Arial, Helvetica, sans-serif;
`


export const MenuItemWrapper = styled.div`
display: flex;
flex-flow: row;
flex-wrap: wrap;
`
export const TitleWrapp = styled.div`
  display: flex;
  padding: 10px 0px;
  @media (min-width: 1200px) {
    padding: 18px 0px 0px;
  }

`

export const MenuTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #051912;
  margin: 0;
  font-family: 'Gotham', Arial, Helvetica, sans-serif;

`

export const MenuDesc = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #051912;
  opacity: 0.6;
  font-family: 'Gotham', Arial, Helvetica, sans-serif;
`

export const ReadMoreText = styled.p`
  display: inline;
  margin-left: 6px;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #134332;
  cursor: pointer;
`