import React from 'react'

import { MainContainer, NavDiv } from './styles'

const NavBar = () => {
  return (
    <MainContainer>
      <NavDiv>
        <img src="images/marvel-logo.svg" alt="Logo Marvel" />
      </NavDiv>

      <NavDiv>
        <form>
          <input type="text" />
        </form>
      </NavDiv>
    </MainContainer>
  )
}

export default NavBar
