import React, { useState } from 'react'
import { graphql } from 'gatsby'
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

import backgroundMobile from '../../assets/home/background-home-mobile.jpg'
import backgroundTablet from '../../assets/home/background-home-tablet.jpg'
import backgroundDesktop from '../../assets/home/background-home-desktop.jpg'


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

const Destination = ({data}) => {
  console.log(data);

  const [isNavHidden, setNavHidden] = useState(true);

  const handleClick = () => {
    setNavHidden(p => !p)
  }

  const image = getImage(data.destinationJson.images.webp)

  return (
    // home => destination
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
                    <li className="active"><a href="#" className="uppercase text-white letter-spacing-2"><span aria-hidden="true">00</span>Home</a></li>
                    <li><a href="#" className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">01</span>Destination</a></li>
                    <li><a href="#" className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">02</span>Crew</a></li>
                    <li><a href="#" className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">03</span>Technology</a></li>
                </PrimaryNavigation>
            </PrimaryNavigationWrapper>
        </PrimaryHeader>

        {/* grid-container--home => grid-container--destination */}
        <main id="main" className="grid-container grid-container--destination">
          <h1 className={"numbered-title"}><span aria-hidden="true">01</span>Pick Your Destination</h1>
          <GatsbyImage 
            image={image}
            placeholder="blurred"
            alt="Moon"
          />

          <div role="tablist" className="tab-list underline-indicators flex">
            <button role="tab" aria-selected="true" className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Moon</button>
            <button role="tab" aria-selected="false" className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Mars</button>
            <button role="tab" aria-selected="false" className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Europa</button>
            <button role="tab" aria-selected="false" className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Titan</button>
          </div>

          <article>
            <h2 className="uppercase fs-800 ff-serif">{data.destinationJson.name}</h2>

            <p>{data.destinationJson.description}</p>

            <div className="flex">
              <div>
                <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
                <p className="uppercase fs-500 ff-serif">{data.destinationJson.distance}</p>
              </div>
              <div>
                <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
                <p className="uppercase fs-500 ff-serif">{data.destinationJson.travel}</p>
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
      }
      description
      distance
      travel
      name
    }
  }
`

export default Destination

// 00 Home
// 01 Destination
// 02 Crew
// 03 Technology

// 01 Pick your destination

// Moon
// Mars
// Europa
// Titan

// Moon

// See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
// regain perspective and come back refreshed. While you’re there, take in some history 
// by visiting the Luna 2 and Apollo 11 landing sites.

// Avg. distance
// 384,400 km

// Est. travel time
// 3 days