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

import backgroundMobile from '../../assets/technology/background-technology-mobile.jpg'
import backgroundTablet from '../../assets/technology/background-technology-tablet.jpg'
import backgroundDesktop from '../../assets/technology/background-technology-desktop.jpg'


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

const TechnologyIndex = ({data}) => {
  const [isNavHidden, setNavHidden] = useState(true);

  const image = getImage(data.technologyJson.images.landscape)
  const imagePortrait = getImage(data.technologyJson.images.portrait)

  const handleClick = () => {
    setNavHidden(p => !p)
  }

  return (
    <div className="crew pseudo-body" css={backgroundStyles}>
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
                    <Link to={`/destination`} className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">01</span>Destination</Link>
                    <Link to={`/crew`} className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">02</span>Crew</Link>
                    <Link to={`/technology`} className="active ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">03</span>Technology</Link>
                </PrimaryNavigation>
            </PrimaryNavigationWrapper>
        </PrimaryHeader>

        <main id="main" className="grid-container grid-container--technology flow">
          <NumberedTitle><span aria-hidden="true">03</span>Space Launch 101</NumberedTitle>

          <div className="image-wrapper">
            <GatsbyImage 
              image={image}
              alt="tech."
            />
          </div>
          <div className="image-wrapper-portrait">
            <GatsbyImage 
              image={imagePortrait}
              alt="tech."
            />
          </div>
          
          <div role="tablist" className="number-indicators">
            {
              data.allTechnologyJson.nodes.map((node, i) => (
                <Link 
                  to={`/technology/${node.name.toLowerCase().split(' ').join('-')}`} 
                  role="tab" 
                  className="no-underline ff-serif fs-600" 
                  aria-selected={node.name === 'Launch vehicle'}
                >
                  {i + 1}
                </Link>
              ))
            }
          </div>  

          <article className="technology-info flow">
            <div className="flow flow--space-small">
              <h2 className="uppercase text-accent fs-200 ff-sans-cond">The Terminology...</h2>
              <p className="uppercase fs-700 ff-serif">{data.technologyJson.name}</p>
            </div>
            <p className="text-accent fs-400 ff-sans-normal">{data.technologyJson.description}</p>
          </article>
        </main>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query($name: String) {
    technologyJson(name: {eq: $name}) {
      id
      images {
        landscape {
          childImageSharp {
            gatsbyImageData
          }
        }
        portrait {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      name
      description
    }
    allTechnologyJson {
      nodes {
        name
        id
      }
    }
  }
`

export default TechnologyIndex