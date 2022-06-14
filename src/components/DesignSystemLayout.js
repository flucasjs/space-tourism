import React from "react"
import { createGlobalStyle, css } from "styled-components"
import hamburgerIcon from "../assets/shared/icon-hamburger.svg"

const customCSSProperties = css`
  :root {
    /* colors */
    --clr-dark: 230 35% 7%;
    --clr-light: 231 77% 90%;
    --clr-white: 0 0% 100%;
    
    /* font-sizes */
    --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
    --fs-800: 3.5rem;
    --fs-700: 1.5rem;
    --fs-600: 1rem;
    --fs-500: 1.75rem;
    --fs-400: 0.9375rem;
    --fs-300: 1rem;
    --fs-200: 0.875rem;
    
    /* font-families */
    --ff-serif: "Bellefair", serif;
    --ff-sans-cond: "Barlow Condensed", sans-serif;
    --ff-sans-normal: "Barlow", sans-serif;
  }

  @media (min-width: 35em) {
      :root {
          --fs-800: 5rem;
          --fs-700: 2.5rem;
          --fs-600: 1.5rem;
          --fs-400: 1rem;
      }
  }

  @media (min-width: 45em) {
      :root {
          /* font-sizes */
          --fs-800: 6.25rem;
          --fs-700: 3.5rem;
          --fs-600: 2rem;
          --fs-400: 1.125rem;
      }
  }
`

const resets = css`
/* https://piccalil.li/blog/a-modern-css-reset/ */
  
/* Box sizing */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Reset margins */
body,
h1,
h2,
h3,
h4,
h5,
p,
figure,
picture {
    margin: 0; 
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    font-weight: 400;
}

/* set up the body */
body {
    font-family: var(--ff-sans-normal);
    font-size: var(--fs-400);
    color: hsl( var(--clr-white) );
    background-color: hsl( var(--clr-dark) );
    line-height: 1.5;
    min-height: 100vh;
}

/* make images easier to work with */
img,
picture {
    max-width: 100%;
    display: block;
}

/* make form elements easier to work with */
input,
button,
textarea,
select {
    font: inherit;
}

/* remove animations for people who've turned them off */
@media (prefers-reduced-motion: reduce) {  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`

const utilityClasses = css`
  /* general */

  .flex {
      display: flex;
      gap: var(--gap, 1rem);
  }

  .grid {
      display: grid;
      gap: var(--gap, 1rem);
  }

  .d-block {
    display: block;
  }

  .flow > :where(:not(:first-child)) {
    margin-top: var(--flow-space, 1rem);
  }

  .container {
    padding-inline: 2em;
    margin-inline: auto;
    max-width: 80rem;
  }

  .grid-container {
    display: grid;
    text-align: center;
    place-items: center;
    padding-inline: 2rem;
  }

  .grid-container * {
    max-width: 50ch;
  }

  @media (min-width: 45rem) {
    .grid-container {
      text-align: left;
      grid-template-columns: minmax(2rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(2rem, 1fr);
      column-gap: var(--container-gap, 2rem);
    }

    .grid-container > *:first-child {
      grid-column: 2;
    }

    .grid-container > *:last-child {
      grid-column: 3;
    }

    .grid-container--home {
      padding-bottom: max(6rem, 20vh);
      align-items: end;
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap; /* added line */
    border: 0;
  }

  /* colors */

  .bg-dark { background-color: hsl( var(--clr-dark) ); }
  .bg-accent { background-color: hsl( var(--clr-light) ); }
  .bg-white { background-color: hsl( var(--clr-white) ); }

  .text-dark { color: hsl( var(--clr-dark) ); }
  .text-accent { color: hsl( var(--clr-light) ); }
  .text-white { color: hsl( var(--clr-white) ); }

  /* typography */

  .ff-serif { font-family: var(--ff-serif); } 
  .ff-sans-cond { font-family: var(--ff-sans-cond); } 
  .ff-sans-normal { font-family: var(--ff-sans-normal); } 

  .letter-spacing-1 { letter-spacing: var(--ls-1); } 
  .letter-spacing-2 { letter-spacing: var(--ls-2); } 
  .letter-spacing-3 { letter-spacing: var(--ls-3); } 

  .uppercase { text-transform: uppercase; }

  .fs-900 { font-size: var(--fs-900); }
  .fs-800 { font-size: var(--fs-800); }
  .fs-700 { font-size: var(--fs-700); }
  .fs-600 { font-size: var(--fs-600); }
  .fs-500 { font-size: var(--fs-500); }
  .fs-400 { font-size: var(--fs-400); }
  .fs-300 { font-size: var(--fs-300); }
  .fs-200 { font-size: var(--fs-200); }

  .fs-900,
  .fs-800,
  .fs-700,
  .fs-600 {
      line-height: 1.1;
  }

  .numbered-title {
    font-family: var(--ff-sans-cond);
    text-transform: uppercase;
    font-size: var(--fs-500);
    letter-spacing: var(--ls-3);
  }

  .numbered-title span {
    margin-right: 0.5em;
    font-weight: 700;
    color: hsl( var(--clr-light) / 0.25 );
  }

  .outline {
    border: 3px solid var(--clr-oline, blue);
  }
`

const componentClasses = css`
  .pseudo-body {
    display: grid;
    min-height: 100vh;
    grid-template-rows: min-content 1fr;
  }

  .large-button {
    font-size: 2rem;
    display: inline-grid;
    position: relative;
    place-items: center;
    padding: 0 2em;
    border-radius: 50%;
    aspect-ratio: 1;
    text-decoration: none;
  }

  .large-button::after {
    content: '';
    position: absolute;
    border-radius: inherit;
    inset: 0;
    background-color: hsl( var(--clr-white) / 0. );
    opacity: 0;
    transition: opacity 500ms linear, transform 750ms ease-in-out;
  }

  .large-button:hover::after, 
  .large-button:focus::after {
    opacity: 1;
    transform: scale(1.5);
  }

  .primary-navigation {
      --underline-gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
      background-color: hsl( var(--clr-dark) / 0.95 );
  }

  @supports (backdrop-filter: blur(1.5rem)) {
    .primary-navigation {
      background-color: hsl( var(--clr-white) / 0.05 );
      backdrop-filter: blur(1.5rem);
    }
  }

  .mobile-nav-toggle {
    display: none;
  }

  @media (max-width: 35rem) {
    .primary-navigation {
      --underline-gap: 0.5rem;
      position: fixed;
      z-index: 1000;
      inset: 0 0 0 30%;
      list-style: none;
      padding: min(20rem, 15vh) 2rem;
      margin: 0;
      flex-direction: column;
    }

    .primary-navigation.underline-indicator > .active {
      border: 0;
    }

    .mobile-nav-toggle {
      cursor: pointer;
      display: block;
      position: absolute;
      z-index: 2000;
      top: 2rem;
      right: 1rem;
      background-color: transparent;
      background-image: url(${hamburgerIcon});
      background-repeat: no-repeat;
      width: 1.5rem;
      aspect-ratio: 1;
      border: 0;
    }
  }

  .primary-navigation a {
      text-decoration: none;
  }
 
  .primary-navigation a > span {
      margin-right: 0.5em;
      font-weight: 700;
  }

  .underline-indicators > * {
    cursor: pointer;
    padding: var(--underline-gap, 1rem) 0;
    border: 0;
    border-bottom: 0.2rem solid hsl( var(--clr-white) / 0 );
  }

  .underline-indicators > *:hover, 
  .underline-indicators > *:focus {
    border-bottom: 0.2rem solid hsl( var(--clr-white) / 0.5 );
  }

  .underline-indicators > .active,
  .underline-indicators > [aria-selected="true"] {
    color: hsl( var(--clr-white) / 1 );
    border-bottom: 0.2rem solid hsl( var(--clr-white) / 1 );
  }

  .tab-list {
      --gap: 2rem;
  }

  .dot-indicators > * {
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    aspect-ratio: 1;
    padding: 0.5em;
    background-color: hsl( var(--clr-light) / 0.25 );
  }

  .dot-indicators > *:hover,
  .dot-indicators > *:focus {
      background-color: hsl( var(--clr-light) / 0.5 );
  }

  .dot-indicators > [aria-selected="true"] {
      background-color: hsl( var(--clr-white) / 1);
  }

  .number-indicators > * {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl( var(--clr-dark) / 1 );
    color: hsl( var(--clr-white) / 1 );
    border: 0.1rem solid hsl( var(--clr-white) / 1 );
    border-radius: 50%;
    aspect-ratio: 1;
    padding: 1em;
  }

  .number-indicators > *:hover,
  .number-indicators > *:focus {
    border: 0.1rem solid hsl( var(--clr-white) / 0.5 );
    background-color: hsl( var(--clr-dark) / 1);
    color: hsl( var(--clr-white) / 1);
  }

  .number-indicators > [aria-selected="true"] {
    background-color: hsl( var(--clr-white) / 1 );
    color: hsl( var(--clr-dark) / 1 );
  }
`
export const GlobalStyle = createGlobalStyle`
  ${customCSSProperties}
  ${resets}
  ${utilityClasses}
  ${componentClasses}
`

export default function DesignSystemLayout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="container">
          <h1 className="uppercase">Design system</h1>
          
          <section id="colors" style={{margin: "4rem 0"}}>
              <h2 className="numbered-title"><span>01</span> Pick Your Destination</h2>
              <div className="flex">
                  <div style={{flexGrow: "1"}}>
                      <div className="bg-dark text-white ff-serif fs-500" style={{padding: "3rem 1rem 1rem", border: "1px solid white"}}>#0B0D17</div>
                      <p><span className="text-accent">RGB</span> 11, 13, 23</p>
                      <p><span className="text-accent">HSL</span> 230°, 35%, 7%</p>
                  </div>
                  <div style={{flexGrow: "1"}}>
                      <div className="bg-accent text-dark ff-serif fs-500" style={{padding: "3rem 1rem 1rem", border: "1px solid white"}}>#D0D6F9</div>
                      <p><span className="text-accent">RGB</span> 208, 214, 249</p>
                      <p><span className="text-accent">HSL</span> 231°, 77%, 90%</p>
                  </div>
                  <div style={{flexGrow: "1"}}>
                      <div className="bg-white text-dark ff-serif fs-500" style={{padding: "3rem 1rem 1rem", border: "1px solid white"}}>#FFFFFF</div>
                      <p><span className="text-accent">RGB</span> 255, 255, 255</p>
                      <p><span className="text-accent">HSL</span> 0°, 0%, 100%</p>
                  </div>
              </div>
          </section>
          
          <section id="typography" style={{margin: "4rem 0"}}>
              <h2 className="numbered-title"><span>02 </span>Typography</h2>
              <div className="flex">
                  <div className="flow" style={{flexBasis: "100%"}}>
                      <div> 
                          <p className="text-accent">Heading 1 - Bellefair Regular - 150px</p>
                          <p className="fs-900 ff-serif uppercase">Earth</p>
                      </div>
                      <div> 
                          <p className="text-accent">Heading 2 - Bellefair Regular - 100px</p>
                          <p className="fs-800 ff-serif uppercase">Venus</p>
                      </div>
                      <div> 
                          <p className="text-accent">Heading 3 - Bellefair Regular - 56px</p>
                          <p className="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
                      </div>
                      <div> 
                          <p className="text-accent">Heading 4 - Bellefair Regular - 32px</p>
                          <p className="fs-600 ff-serif uppercase">Uranus, Neptune, & Pluto</p>
                      </div>
                      <div> 
                          <p className="text-accent">Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                          <p className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to space</p>
                      </div>
                  
                  </div>
                  
                  <div style={{flexBasis: "100%"}}>
                      <div> 
                          <p className="text-accent">Subheading 1 - Bellefair Regular - 28px</p>
                          <p className="fs-500 ff-serif uppercase">384,400 km</p>
                      </div>
                      <div> 
                          <p className="text-accent">Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                          <p className="fs-200 uppercase ff-sans-cond letter-spacing-3">Avg. Distance</p>
                      </div>
                      <div> 
                          <p className="text-accent">Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                          <p className="fs-300 uppercase ff-sans-cond letter-spacing-2">Europa</p>
                      </div>
                      <div> 
                          <p className="text-accent">Body Text</p>
                          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                      </div> 
                  </div>
              </div>
          </section>
          
          <section className="flow" id="interactive-elements">
                <h2 className="numbered-title "><span>03</span> Interactive elements</h2>
                
                {/* navigation  */}
                <div>
                    <nav>
                        <ul className="primary-navigation underline-indicators flex">
                            <li className="active"><a href="#" className="uppercase text-white letter-spacing-2"><span>00</span>Active</a></li>
                            <li><a href="#" className="uppercase text-white letter-spacing-2"><span>01</span>Hovered</a></li>
                            <li><a href="#" className="uppercase text-white letter-spacing-2"><span>02</span>Idle</a></li>
                        </ul>
                    </nav>
                </div>
                
                <div className="flex">
                    <div style={{marginTop: "5rem"}}>
                        {/* explore button */}
                        <a href="#" className="large-button ff-serif fs-600 uppercase letter-spacing-3 bg-white text-dark">Explore</a>
                    </div>
                    
                    <div className="flow" style={{ marginBottom: "50vh", "--flow-space": "4rem" }}>
                        {/* Tabs */}
                        <div role="tablist" className="tab-list underline-indicators flex">
                            <button role="tab" aria-selected="true" className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Moon</button>
                            <button role="tab" aria-selected="false" className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Mars</button>
                            <button role="tab" aria-selected="false" className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Europa</button>
                        </div>
                        
                        {/* Dots */}
                        <div role="tablist" className="dot-indicators flex">
                            <button role="tab" aria-selected="true"><span className="sr-only">Slide title</span></button>
                            <button role="tab" aria-selected="false"><span className="sr-only">Slide title</span></button>
                            <button role="tab" aria-selected="false"><span className="sr-only">Slide title</span></button>
                        </div>

                        {/* Numbers */}
                        <div role="tablist" className="number-indicators flow">
                            <button role="tab" className="ff-serif fs-600"aria-selected="true">1</button>
                            <button role="tab" className="ff-serif fs-600"aria-selected="false">2</button>
                            <button role="tab" className="ff-serif fs-600"aria-selected="false">3</button>
                        </div>
                    </div>
                </div>
                
            </section>
          
      </div>
      {children}
    </React.Fragment>
  )
}
