/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// import shareImage from '../img/bitebelllogo.png'

const SEO = ({ description, lang, meta, title, pageTitle, image }) => {
  const { wp, wpUser } = useStaticQuery(
    graphql`
       query {
         wp {
           generalSettings {
             title
             description
           }
         }
 
         # if there's more than one user this would need to be filtered to the main user
         wpUser {
           twitter: name
         }
       }
     `
  )
  const metaDescription = description || wp.generalSettings?.description
  const defaultTitle = wp.generalSettings?.title
  const currPageTitle = pageTitle || title
  const metaImage = image ? image.src : shareImage

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={currPageTitle}
      titleTemplate={currPageTitle ? `%s | Bitebell` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: wpUser?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="text/javascript" charset="UTF-8" src="//cdn.cookie-script.com/s/91c713b5df64d2d6c3f6139abe632eaa.js"></script>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Ephesis&display=swap" rel="stylesheet"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap" rel="stylesheet" />
      <link href="//db.onlinewebfonts.com/c/924ee4158324c02e3e0d62e54cafd14f?family=Gotham+Book" rel="stylesheet" type="text/css" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
