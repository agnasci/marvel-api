import React from 'react'

import { Link } from 'react-router-dom'

import { MainContainer, NameDiv, ImgDiv } from './styles'

const CharacterCard = ({ character }) => {
  return (
    <Link
      data-testid="character-card"
      style={{ textDecoration: 'none' }}
      to={`/info/${character.id}`}
    >
      <MainContainer>
        <NameDiv>
          <span>{character.name}</span>
        </NameDiv>

        <ImgDiv>
          <img src={character.imgCard} alt={character.name + ' ' + 'image.'} />
        </ImgDiv>
      </MainContainer>
    </Link>
  )
}

export default CharacterCard
