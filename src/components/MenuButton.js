import React from 'react'
import styled from 'styled-components'

const MenuButton =  styled.button`
  display: none;

  @media (max-width: 35rem) {
    cursor: pointer;
    display: block;
    position: absolute;
    z-index: 2000;
    top: 2rem;
    right: 1rem;
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    width: 1.5rem;
    aspect-ratio: 1;
    border: 0;
  }

  &:focus-visible {
    outline: 5px solid white;
    outline-offset: 5px;
  }
`

export default MenuButton