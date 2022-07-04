import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import { css } from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/Layout'
import SkipToContentButton from '../../components/SkipToContentButton'
import PrimaryHeader from '../../components/PrimaryHeader'
import LogoContainer from '../../components/LogoContainer'
import BurgerButton from '../../components/BurgerButton'
import ExitButton from '../../components/ExitButton'
import PrimaryNavigation from '../../components/PrimaryNavigation'
import PrimaryNavigationWrapper from '../../components/PrimaryNavigationWrapper'
import NumberedTitle from '../../components/NumberedTitle'

import backgroundMobile from '../../assets/destination/background-destination-mobile.jpg'
import backgroundTablet from '../../assets/destination/background-destination-tablet.jpg'
import backgroundDesktop from '../../assets/destination/background-destination-desktop.jpg'


const backgroundStyles = css`
  background-image: url(${backgroundMobile});
  background-position: center center;
  background-size: cover;

  @media (min-width: 35rem) {
    background-image: url(${backgroundTablet});
  }

  @media (min-width: 45rem) {
    background-image: url(${backgroundDesktop});
    background-position: bottom center;
  }
`

const DestinationPage = ({data, location}) => {
  const [isNavHidden, setNavHidden] = useState(true);

  const currentPageName = location.pathname.slice(13, location.pathname.length);
  const image = getImage(data.destinationJson.images.webp) || getImage(data.destinationJson.images.png);

  const handleClick = () => {
    setNavHidden(p => !p)
  }

  return (
    <div className="destination pseudo-body" css={backgroundStyles}>
      <Layout pageTitle="Frontend Mentor">
        <SkipToContentButton href="#main">Skip to content</SkipToContentButton>
        <PrimaryHeader className="flex">
            <LogoContainer>
              <StaticImage
                alt="Space Tourism Logo"
                src="../../assets/shared/logo.svg"
                layout="fixed"
              />
            </LogoContainer>
            {
              isNavHidden ?
              <BurgerButton onClick={handleClick} aria-controls="primary-navigation">
                <span className="sr-only" aria-expanded="false">Menu</span>
              </BurgerButton> :
              <ExitButton onClick={handleClick} aria-controls="primary-navigation">
                <span className="sr-only" aria-expanded="true">Menu</span>
              </ExitButton>
            }
            <PrimaryNavigationWrapper>
                <PrimaryNavigation id="primary-navigation" className="underline-indicators flex" {...{isNavHidden}}>
                    <Link to={`/`} className="uppercase text-white letter-spacing-2"><span aria-hidden="true">00</span>Home</Link>
                    <Link to={`/destination`} className="active ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">01</span>Destination</Link>
                    <Link to={`/crew`} className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">02</span>Crew</Link>
                    <Link to={`/technology`} className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">03</span>Technology</Link>
                </PrimaryNavigation>
            </PrimaryNavigationWrapper>
        </PrimaryHeader>

        <main id="main" className="grid-container grid-container--destination flow">
          <NumberedTitle><span aria-hidden="true">01</span>Pick Your Destination</NumberedTitle>
          <div className="image-wrapper">
            <GatsbyImage 
              image={image}
              alt="An image of the Moon."
            />
          </div>

          <div role="tablist" className="tab-list underline-indicators flex" aria-label="planet destination list">
            {
              data.allDestinationJson.nodes.map(node => {
                const planetName = node.name.toLowerCase()
                
                return (
                  <Link 
                    key={node.id} 
                    to={`/destination/${planetName}`} 
                    role="tab" 
                    aria-selected={planetName === currentPageName}
                    className="uppercase ff-sans-cond text-accent bg-none letter-spacing-2 no-underline"
                  >
                    {`${node.name}`}
                  </Link>
                )
              })
            }
          </div>

          <article className="destination-info flow" role="tabpanel">
            <h2 className="uppercase fs-800 ff-serif">{data.destinationJson.name}</h2>

            <p className="text-accent">{data.destinationJson.description}</p>

            <div className="destination-meta flex">
              <div>
                <h3 className="uppercase text-accent fs-200 ff-sans-cond letter-spacing-3">Avg. distance</h3>
                <p className="uppercase ff-serif">{data.destinationJson.distance}</p>
              </div>
              <div>
                <h3 className="uppercase text-accent fs-200 ff-sans-cond letter-spacing-3">Est. travel time</h3>
                <p className="uppercase ff-serif">{data.destinationJson.travel}</p>
              </div>
            </div>
          </article>
        </main>
      </Layout>
    </div>
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
       png {
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
    allDestinationJson {
      nodes {
        name
        id
      }
    }
  }
`

export default DestinationPage