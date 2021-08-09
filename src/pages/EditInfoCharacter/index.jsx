import React from 'react'

import {
  MainContainer,
  ContentContainer,
  CharacterImg,
  CharacterName,
  InformationDiv,
  SeriesDiv,
  SeriesListBox,
  EditButton,
} from './styles'

import HeaderInfo from '../../components/HeaderInfo'

function InfoCharacter() {
  return (
    <MainContainer>
      <HeaderInfo />

      <ContentContainer>
        <InformationDiv>
          <CharacterImg />

          <form>
            <CharacterName type="text" />
          </form>

          <EditButton>Editar</EditButton>
        </InformationDiv>

        <SeriesDiv>
          <form>
            <SeriesListBox />
          </form>
        </SeriesDiv>
      </ContentContainer>
    </MainContainer>
  )
}

export default InfoCharacter
