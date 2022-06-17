import styled from 'styled-components'

const PrimaryNavigation = styled.ul`
  --gap: clamp(1.5rem, 5vw, 3.5rem);
  --underline-gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: hsl( var(--clr-dark) / 0.95 );

  @supports (backdrop-filter: blur(1rem)) {
    & {
      background-color: hsl( var(--clr-white) / 0.05 );
      backdrop-filter: blur(1.5rem);
    }
  }
  
  & a {
    text-decoration: none;
  }

  & a > span {
    margin-right: 0.5em;
    font-weight: 700;
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
      transform: ${props => props.isNavHidden ? "translateX(100%)" : "translateX(0)"};
      transition: transform 250ms ease-out;
    }

    &.underline-indicator > .active {
      border: 0;
    }
  }

  @media (min-width: 35rem) {
    paddin-inline: clamp(3rem, 7vw, 7rem);
  }

  @media (min-width: 35rem) and (max-width: 45rem) {
    & a > span {
      display: none;
    }
  }

  @media (min-width: 45rem) {
    & {
      margin-block: 2rem;
    }
  }
`

export default PrimaryNavigation