import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  ItemModal,
  ItemModalWrapper,
  DefModalImage,
  CloseIcon
} from './ItemModal.styled'

import styled from 'styled-components'


export default function SingleItemModal({ title, description, image, closeMOdalAndClearState }) {
  const gatsbyImage = getImage(image)

  return (
    <ItemModal>
      <ItemModalWrapper>
        <h1>{title}</h1>
        <p>{description}</p>
        {
          typeof image === 'string'
            ? <DefModalImage className="modal-img" src={image} />
            : <GatsbyImage image={image} alt="menu item" />
        }
        <CloseIcon onClick={closeMOdalAndClearState}>
          <span className='left'></span>
          <span className='right'></span>
        </CloseIcon>
      </ItemModalWrapper>
    </ItemModal>
  )
}
