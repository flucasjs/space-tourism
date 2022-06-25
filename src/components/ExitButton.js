import styled from 'styled-components'

import MenuButton from './MenuButton'
import closeIcon from '../assets/shared/icon-close.svg'

const ExitButton = styled(MenuButton)`
  @media (max-width: 35rem) {
    background-image: url(${closeIcon});
  }
`

export default ExitButton