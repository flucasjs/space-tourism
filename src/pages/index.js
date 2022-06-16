import React, { useState, useEffect } from 'react'
import styled, {css} from 'styled-components'
import Layout from '../components/Layout'
import { StaticImage} from 'gatsby-plugin-image'

import backgroundMobile from "../assets/home/background-home-mobile.jpg"
import backgroundTablet from "../assets/home/background-home-tablet.jpg"
import backgroundDesktop from "../assets/home/background-home-desktop.jpg"

const PrimaryHeader = styled.header`
`

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

// markup
const IndexPage = () => {
  const [isNavHidden, setNavHidden] = useState(true);

  const handleClick = () => {
    setNavHidden(p => !p)
  }

  useEffect(() => {
    console.log(isNavHidden);
  }, [isNavHidden])

  return (
    <div className="home pseudo-body" css={backgroundStyles}>
      <Layout pageTitle="Frontend Mentor">
        <PrimaryHeader className="flex">
            <div>
              <StaticImage
                alt="Space Tourism Logo"
                src="../assets/shared/logo.svg"
              />
            </div>
            <button className="mobile-nav-toggle" onClick={handleClick} aria-controls="primary-navigation">
              <span className="sr-only" aria-expanded="false">Menu</span>
            </button>
            <nav>
                <ul id="primary-navigation" className="primary-navigation underline-indicators flex" style={isNavHidden ? {transform: "translateX(0)"} : {transform: "translateX(100%)"}}>
                    <li className="active"><a href="#" className="uppercase text-white letter-spacing-2"><span>00</span>Home</a></li>
                    <li><a href="#" className="ff-sans-cond uppercase text-white letter-spacing-2"><span>01</span>Destination</a></li>
                    <li><a href="#" className="ff-sans-cond uppercase text-white letter-spacing-2"><span>02</span>Crew</a></li>
                    <li><a href="#" className="ff-sans-cond uppercase text-white letter-spacing-2"><span>03</span>Technology</a></li>
                </ul>
            </nav>
        </PrimaryHeader>

        <div className="grid-container grid-container--home">
          <div>
            <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to <span className="fs-900 ff-serif text-white d-block">Space</span>
            </h1>
            <p>
              Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div>
            <a href="#" className="large-button ff-serif uppercase letter-spacing-3 bg-white text-dark">Explore</a>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage


/* 
00 Home
01 Destination
02 Crew
03 Technology

So, you want to travel to
Space
Let’s face it; if you want to go to space, you might as well genuinely go to 
outer space and not hover kind of on the edge of it. Well sit back, and relax 
because we’ll give you a truly out of this world experience!

Explore 
*/