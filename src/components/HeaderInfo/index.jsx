import React from 'react'

import { useHistory } from 'react-router-dom'

import { MainContainer } from './styles'

const NavBar = () => {
  const history = useHistory()

  function handleClick() {
    history.push('/')
  }

  return (
    <MainContainer>
      <img
        onClick={handleClick}
        src="images/marvel-logo.svg"
        alt="Logo Marvel"
      />
    </MainContainer>
  )
}

export default NavBar
