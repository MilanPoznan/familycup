import React, { useState, useCallback } from 'react'
import {
  MenuComponent,
  MenuWrapper,
  MenuComponentTitle,
} from './Menu.styles'

import SingleItemModal from './SingleItemModal'
//Menu compoennts
import CoffeeMenu from './menuComponents/CoffeeMenu'
import CigaretteComponent from './menuComponents/CigaretteComponent'
import JuicesComponent from './menuComponents/JuicesComponent'
import AlcoholComponent from './menuComponents/AlcoholComponent'
import FoodComponent from './menuComponents/FoodComponent'
import TeaComponent from './menuComponents/TeaComponent'

export default function Menu({ menuData, title, id, menuType }) {
  const [showModal, setShowModal] = useState(false)
  const [modalProps, setModalProps] = useState([])

  const setShowModalCallback = useCallback(() => setShowModal(showModal => !showModal))

  const setModalPropsCallback = (title, content, image) => setModalProps(modalProps => [...modalProps, title, content, image])
  const setClearModalProps = useCallback(() => setModalProps([]))

  function closeMOdalAndClearState() {
    setClearModalProps()
    setShowModalCallback()
  }
  function renderProperMenuFromMenuType(type, menuData) {
    switch (type) {
      case 'coffee':
        return <CoffeeMenu
          menuData={menuData}
          setShowModalCallback={setShowModalCallback}
          setModalPropsCallback={setModalPropsCallback}
          setClearModalProps={setClearModalProps}
        />
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
      {showModal && <SingleItemModal title={modalProps[0]} description={modalProps[1]} image={modalProps[2]} closeMOdalAndClearState={closeMOdalAndClearState} />}

      <MenuWrapper>
        <MenuComponentTitle isWhite={menuType === 'food'}>{title}</MenuComponentTitle>
        {renderProperMenuFromMenuType(menuType, menuData)}
      </MenuWrapper>
    </MenuComponent>
  )
}
