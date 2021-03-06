import { graphql } from 'gatsby'

//Fragment for getting all menus
export const menuFragments = graphql`
  fragment getMenus on WpMenuConnection  {
    nodes {
      menuItems {
        nodes {
          label
          path
          title
          url
        }
      }
    }
  }
`

export const flexibleContentFragments = graphql`
  fragment getFlexibleContents on WpPage_Flexiblecontent {
    pageContent {
      ... on WpPage_Flexiblecontent_PageContent_Menu {
            fieldGroupName
            menuTitle
            previewIcon {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
            menuLink
            menuItems {
              description
              image {
                localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              }
              price
              title
            }
        }
        ... on WpPage_Flexiblecontent_PageContent_CaffeePlace {
          title
          description
          homeMenuLink {
            ... on WpPage {
              id
              uri
            }
          }
          fieldGroupName
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
    }
  }
`