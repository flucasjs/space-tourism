import styled from 'styled-components'

const SkipToContentButton = styled.a`
  position: absolute;
  z-index: 9999;
  background-color: hsl( var(--clr-white) );
  color: hsl( var(--clr-dark) );
  padding: .5em 1em;
  margin-inline: auto;
  transform: translateY(-100%);
  transition: transform 250ms ease-out;

  &:focus {
    transform: translateY(0);
  }
`

export default SkipToContentButton