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


function sectionPadding(type) {
  switch (type) {
    case 'coffee':
      return '120px 0 100px';
    case 'tea':
      return '100px 0 80px'
    case 'cigarette':
      return '100px 0 40px'
    case 'juices':
      return '100px 0 50px'
    case 'alcohol':
      return '100px 0 80px'
    case 'food':
      return '100px 0 30px'
    default:
      return '100px 0'
  }
}

export const MenuWrapper = styled.div`
  padding-top: 40px;
  @media  (min-width: 1200px) {  
    padding-top: 0px;
    width: 1140px;
    margin: 0 auto;
  }
`

export const MenuComponent = styled.div`
  padding: 0 16px;
  background-color: ${props => sectionBgColorDepeandsOfType(props.menuType)};
  @media (min-width: 1200px) {
    padding: ${props => sectionPadding(props.menuType)};
  }
`

export const MenuComponentTitle = styled.h2`
  width: 80%;
  margin: 0px auto 30px;
  text-align: center;
  font-family: 'met-semi-bold';
  color: ${props => props.isWhite ? '#FFF' : '#051912'};
  @media (min-width: 1200px) {
    width: 40%;
    text-align: left;
    margin: 0 0 40px;

  }
`


export const MenuItemWrapper = styled.div`
display: flex;
flex-flow: row;
flex-wrap: wrap;
justify-content: space-between;
@media (min-width: 1200px) {
  justify-content: flex-start;

}
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
  font-family: 'met-semi-bold';


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
	font-family: 'met-light';
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
  color: ${props => props.isWhite ? '#fff' : '#134332'};
  cursor: pointer;
`