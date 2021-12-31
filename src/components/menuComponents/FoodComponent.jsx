import React from 'react'
import {
  CoffeeItemWrapper,
  FoodDesc,
  FoodMenuTitle,
} from './CoffeeMenu.styled'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  TitleWrapp,
  ReadMoreText,
  MenuItemWrapper
} from '../Menu.styles'

import defLogo from '../../images/food.jpg'

const LongDescription = ({ text, onClickFunc }) => <div>{text}...<ReadMoreText isWhite={true} onClick={onClickFunc}>Opširnije</ReadMoreText></div>


export default function FoodComponent({ menuData, setShowModalCallback, setModalPropsCallback }) {
  return (
    <MenuItemWrapper>
      {menuData.map((item, index) => {

        const image = item.image ? getImage(item.image.localFile.childImageSharp.gatsbyImageData) : null
        const text = item.description && item.description.substring(0, 45)

        // return (
        //   <CoffeeItemWrapper key={index} isWider={true}>
        //     {image !== null ? <GatsbyImage image={image} alt="menu item" /> : <img className="def-img" src={defLogo} />}
        //     <TitleWrapp>
        //       <FoodMenuTitle>{item.title}</FoodMenuTitle>
        //     </TitleWrapp>
        //     <FoodDesc>
        //       {item.description && item.description.length > 84
        //         ? <div> {text}...
        //           <ReadMoreText
        //             isWhite={true}
        //             onClick={() => {
        //               setShowModalCallback()
        //               setModalPropsCallback(item.title, item.description, image !== null ? image : defLogo)
        //             }}
        //           >opširnije</ReadMoreText></div>
        //         : item.description
        //       }
        //     </FoodDesc>
        //   </CoffeeItemWrapper>)
      })}
    </MenuItemWrapper>
  )
}
