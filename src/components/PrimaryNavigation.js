import styled from 'styled-components'

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
      transition: transform 250ms ease-out;
    }

    &.underline-indicator > .active {
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