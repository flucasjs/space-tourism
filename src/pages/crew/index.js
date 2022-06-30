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

import backgroundMobile from '../../assets/crew/background-crew-mobile.jpg'
import backgroundTablet from '../../assets/crew/background-crew-tablet.jpg'
import backgroundDesktop from '../../assets/crew/background-crew-desktop.jpg'


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

const Crew = ({data}) => {
  console.log(data);

  const [isNavHidden, setNavHidden] = useState(true);

  const handleClick = () => {
    setNavHidden(p => !p)
  }

  const image = getImage(data.crewJson.images.webp) || getImage(data.crewJson.images.png)

  return (
    // home => crew
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
                    <li className="active"><a href="#" className="uppercase text-white letter-spacing-2"><span aria-hidden="true">00</span>Home</a></li>
                    <li><a href="#" className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">01</span>crew</a></li>
                    <li><a href="#" className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">02</span>Crew</a></li>
                    <li><a href="#" className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">03</span>Technology</a></li>
                </PrimaryNavigation>
            </PrimaryNavigationWrapper>
        </PrimaryHeader>

        {/* grid-container--home => grid-container--crew */}
        <main id="main" className="grid-container grid-container--crew flow">
          <h1 className="numbered-title"><span aria-hidden="true">01</span>Meet Your crew</h1>

          <div role="tablist" className="dot-indicators flex">
            <button aria-selected="true"><span class="sr-only">The commander</span></button>
            <button aria-selected="false"><span class="sr-only">The mission specialist</span></button>
            <button aria-selected="false"><span class="sr-only">The pilot</span></button>
            <button aria-selected="false"><span class="sr-only">The crew engineer</span></button>
          </div>

          <article className="crew-info flow">
            <header className="flow flow--space-small">
              <h2 className="uppercase fs-600 ff-serif">{data.crewJson.role}</h2>
              <p className="uppercase fs-700 ff-serif">{data.crewJson.name}</p>
            </header>
            <p className="text-accent">{data.crewJson.bio}</p>
          </article>

          <div className="image-wrapper">
            <GatsbyImage 
              image={image}
              alt="An image of commander Douglas Hurley."
            />
          </div>
        </main>
      </Layout>
    </div>
  )
}

{/* <h2 className="uppercase fs-800 ff-serif">{data.crewJson.name}</h2>

<p>{data.crewJson.description}</p>

<div className="crew-meta flex">
  <div>
    <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
    <p className="uppercase ff-serif">{data.crewJson.distance}</p>
  </div>
  <div>
    <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
    <p className="uppercase ff-serif">{data.crewJson.travel}</p>
  </div>
</div> */}

export const query = graphql`
  query($name: String) {
    crewJson(name: {eq: $name}) {
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
      bio
      name
      role
    }
  }
`

export default Crew