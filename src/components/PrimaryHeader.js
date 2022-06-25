import styled from 'styled-components'

const PrimaryHeader = styled.header`
  justify-content: space-between;
  align-items: center;

  @media (min-width: 45rem) {
    &::after {
      content: '';
      display: block;
      position: relative;
      height: 1px;
      width: 100%;
      order: 1;
      margin-right: -2.5rem;
      background-color: hsl( var(--clr-white) / 0.25 );
    }
  }
`

export default PrimaryHeader