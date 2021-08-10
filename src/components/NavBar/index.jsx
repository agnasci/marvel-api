import React, { useState } from 'react'

import { MainContainer, NavDiv } from './styles'

import { useDispatch } from 'react-redux'

import { searchByName } from '../../actions/getResult'

import logoMarvel from '../../images/marvel-logo.svg'

const NavBar = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const handleChange = event => {
    setInputValue(event.target.value)
  }

  const searchCharacter = event => {
    event.preventDefault()
    dispatch(searchByName(inputValue))

    setInputValue('')
  }

  return (
    <MainContainer>
      <NavDiv>
        <img src={logoMarvel} alt="Logo Marvel" />
      </NavDiv>

      <NavDiv>
        <form onSubmit={searchCharacter}>
          <input type="text" onChange={handleChange} value={inputValue} />
        </form>
      </NavDiv>
    </MainContainer>
  )
}

export default NavBar
