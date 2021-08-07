import React from 'react'

import {
  MainContainer,
  ContentContainer,
  CharacterImg,
  CharacterName,
  InformationDiv,
  SeriesDiv,
  SeriesListBox,
  EditTag,
} from './styles'

import HeaderInfo from '../../components/HeaderInfo'

function InfoCharacter() {
  return (
    <MainContainer>
      <HeaderInfo />

      <ContentContainer>
        <InformationDiv>
          <CharacterImg />

          <CharacterName>Personagem</CharacterName>

          <EditTag href="/">Editar</EditTag>
        </InformationDiv>

        <SeriesDiv>
          <SeriesListBox>
            <ul>
              <li>Teste</li>
              <li>Teste</li>
            </ul>
          </SeriesListBox>
        </SeriesDiv>
      </ContentContainer>
    </MainContainer>
  )
}

export default InfoCharacter
