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

const CrewPage = ({data, location}) => {
  const [isNavHidden, setNavHidden] = useState(true);

  const currentPageName = location.pathname.slice(6, location.pathname.length);
  const image = getImage(data.crewJson.images.webp) || getImage(data.crewJson.images.png)

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
                    <Link to={`/crew`} className="active ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">02</span>Crew</Link>
                    <Link to={`/technology`} className="ff-sans-cond uppercase text-white letter-spacing-2"><span aria-hidden="true">03</span>Technology</Link>
                </PrimaryNavigation>
            </PrimaryNavigationWrapper>
        </PrimaryHeader>

        <main id="main" className="grid-container grid-container--crew flow">
          <NumberedTitle><span aria-hidden="true">02</span>Meet Your crew</NumberedTitle>

          <div role="tablist" className="dot-indicators flex" aria-label="crew member list">
            {
              data.allCrewJson.nodes.map(node => {
                const crewName = node.name.toLowerCase().split(' ').join('-')

                return (
                  <Link 
                    key={node.id} 
                    to={`/crew/${crewName}`} 
                    aria-selected={crewName === currentPageName}
                    className="no-underline"
                  >
                    <span className="sr-only">{`${node.name}`}</span>
                  </Link>
                )
              })
            }
          </div>

          <article className="crew-info flow" role="tabpanel">
            <header className="flow flow--space-small">
              <h2 className="uppercase fs-600 ff-serif">{data.crewJson.role}</h2>
              <p className="uppercase fs-700 ff-serif">{data.crewJson.name}</p>
            </header>
            <p className="text-accent fs-400 ff-sans-normal">{data.crewJson.bio}</p>
          </article>

          <div className="image-wrapper">
            <GatsbyImage 
              image={image}
              alt={data.crewJson.alt}
            />
          </div>
        </main>
      </Layout>
    </div>
  )
}

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
      alt
    }
    allCrewJson {
      nodes {
        name
        id
      }
    }
  }
`

export default CrewPage