import React from 'react'
import styled from 'styled-components'
import hamburgerIcon from "../assets/shared/icon-hamburger.svg"

const PrimaryNavigation = styled.ul`
  --underline-gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: hsl( var(--clr-dark) / 0.95 );

  @supports (backdrop-filter: blur(1.5rem)) {
    & {
      background-color: hsl( var(--clr-white) / 0.05 );
      backdrop-filter: blur(1.5rem);
    }
  }

  &.mobile-nav-toggle {
    display: none;
  }

  @media (max-width: 35rem) {
    & {
      --underline-gap: 0.5rem;
      position: fixed;
      z-index: 1000;
      inset: 0 0 0 30%;
      list-style: none;
      padding: min(20rem, 15vh) 2rem;
      margin: 0;
      flex-direction: column;
      transform: translateX(100%);
    }

    &.underline-indicator > .active {
      border: 0;
    }

    &.mobile-nav-toggle {
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

  & a {
      text-decoration: none;
  }

  & a > span {
      margin-right: 0.5em;
      font-weight: 700;
  }
`

export default PrimaryNavigation