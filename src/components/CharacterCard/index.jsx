import React from 'react'

import { MainContainer, NameDiv, ImgDiv } from './styles'

const CharacterCard = ({ character }) => {
  return (
    <MainContainer>
      <NameDiv>
        <span>{character.name}</span>
      </NameDiv>

      <ImgDiv>
        <img src={character.imgCard} alt={character.name + ' ' + 'image.'} />
      </ImgDiv>
    </MainContainer>
  )
}

export default CharacterCard
