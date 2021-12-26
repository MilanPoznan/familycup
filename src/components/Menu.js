import React from 'react'
import {
  MenuComponent,
  MenuWrapper,
  MenuComponentTitle
} from './Menu.styles'

//Menu compoennts
import CoffeeMenu from './menuComponents/CoffeeMenu'
import CigaretteComponent from './menuComponents/CigaretteComponent'
import JuicesComponent from './menuComponents/JuicesComponent'
import AlcoholComponent from './menuComponents/AlcoholComponent'
import FoodComponent from './menuComponents/FoodComponent'
import TeaComponent from './menuComponents/TeaComponent'

export default function Menu({ menuData, title, id, menuType }) {

  function renderProperMenuFromMenuType(type, menuData) {
    switch (type) {
      case 'coffee':
        return <CoffeeMenu menuData={menuData} />
      case 'tea':
        return <TeaComponent menuData={menuData} />
      case 'cigarette':
        return <CigaretteComponent menuData={menuData} />
      case 'juices':
        return <JuicesComponent menuData={menuData} />
      case 'alcohol':
        return <AlcoholComponent menuData={menuData} />
      case 'food':
        return <FoodComponent menuData={menuData} />
      default:
    }
  }

  return (
    <MenuComponent id={id} menuType={menuType}>
      <MenuComponentTitle>{title}</MenuComponentTitle>
      <MenuWrapper>
        {renderProperMenuFromMenuType(menuType, menuData)}
      </MenuWrapper>
    </MenuComponent>
  )
}
