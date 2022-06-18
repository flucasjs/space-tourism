import React from 'react'
import styled from 'styled-components'

import MenuButton from './MenuButton'
import hamburgerIcon from '../assets/shared/icon-hamburger.svg'

const BurgerButton = styled(MenuButton)`
  @media (max-width: 35rem) {
    background-image: url(${hamburgerIcon});
  }
`

export default BurgerButton