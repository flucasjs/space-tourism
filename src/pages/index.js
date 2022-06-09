import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const PrimaryHeader = styled.header`
`

// markup
const IndexPage = () => {
  return (
    <div className="home pseudo-body">
      <Layout pageTitle="Frontend Mentor">
        <PrimaryHeader className="flex">
            <div>
              <StaticImage
                alt="Space Tourism Logo"
                src="../assets/shared/logo.svg"
              />
            </div>
            <nav>
                <ul className="primary-navigation underline-indicators flex">
                    <li className="active"><a href="#" className="uppercase text-white letter-spacing-2"><span>00</span>Home</a></li>
                    <li><a href="#" className="ff-sans-cond uppercase text-white letter-spacing-2"><span>01</span>Destination</a></li>
                    <li><a href="#" className="ff-sans-cond uppercase text-white letter-spacing-2"><span>02</span>Crew</a></li>
                    <li><a href="#" className="ff-sans-cond uppercase text-white letter-spacing-2"><span>03</span>Technology</a></li>
                </ul>
            </nav>
        </PrimaryHeader>

        <div className="grid-container outline" style={{"--clr-oline": "green"}}>
          <div className="outline" style={{"--clr-oline": "red"}}>
            <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to <span className="fs-900 ff-serif text-white">Space</span>
            </h1>
            <p>
              Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div className="outline" style={{"--clr-oline": "red"}}>
            <a href="#" className="large-button ff-serif fs-600 uppercase letter-spacing-3 bg-white text-dark">Explore</a>
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