import React from 'react'

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Link } from 'gatsby'

import { SingleCaffeeWrapper, SingleOverlay } from './SingleCaffeeLocal.styled'

export default function SingleCaffeeLocal({ data }) {
  const { description, homeMenuLink, title, image } = data

  const localImage = getImage(image.localFile.childImageSharp.gatsbyImageData)
  return (
    <SingleCaffeeWrapper>
      <SingleOverlay>
        <Link to={homeMenuLink.uri}>
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: description }} className='cafe-content' />
        </Link>

      </SingleOverlay>
      <GatsbyImage image={localImage} alt="menu item" />

    </SingleCaffeeWrapper>
  )
}
