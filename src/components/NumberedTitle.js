import styled from 'styled-components'

const NumberedTitle = styled.h1`
    & {
    font-family: var(--ff-sans-cond);
    text-transform: uppercase;
    font-size: var(--fs-500);
    letter-spacing: var(--ls-3);
    grid-area: title;
  }

  & span {
    margin-right: 0.5em;
    font-weight: 700;
    color: hsl( var(--clr-light) / 0.25 );
  }

  .grid-container--technology > & {
      padding-left: 2rem;
    }

  @media (min-width: 35rem) {
    & {
      justify-self: start;
      margin-top: 2rem;
    }
  }

  @media (min-width: 45rem) {
    .grid-container--technology > & {
      padding-left: 0;
    }

    .grid-container--crew > & {
      justify-self: start;
    }
  }
`

export default NumberedTitle