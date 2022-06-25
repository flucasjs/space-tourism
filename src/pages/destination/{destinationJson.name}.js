import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const test = ({data}) => {
  const image = getImage(data.destinationJson.images.webp)
  return (
    <GatsbyImage 
      image={image}
      placeholder="blurred"
    />
  )
}

export const query = graphql`
  query($name: String) {
    destinationJson(name: {eq: $name}) {
      id
      images {
        webp {
          id
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      description
      distance
      travel
      name
    }
  }
`

export default test