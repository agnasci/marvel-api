import React from 'react'

import { Link } from 'react-router-dom'

import { MainContainer } from './styles'

import logoMarvel from '../../images/marvel-logo.svg'

const NavBar = () => {
  return (
    <MainContainer>
      <Link to="/">
        <img src={logoMarvel} alt="Logo Marvel" />
      </Link>
    </MainContainer>
  )
}

export default NavBar
