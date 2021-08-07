import React from 'react'

import {
  MainContainer,
  ContentContainer,
  CharacterImg,
  CharacterName,
} from './styles'

import HeaderInfo from '../../components/HeaderInfo'

function InfoCharacter() {
  return (
    <MainContainer>
      <HeaderInfo />

      <ContentContainer>
        <CharacterImg />

        <CharacterName>Personagem</CharacterName>
      </ContentContainer>
    </MainContainer>
  )
}

export default InfoCharacter
