import React from 'react'

import { MainContainer, ContentContainer } from './styles'

import HeaderInfo from '../../components/HeaderInfo'

function InfoCharacter() {
  return (
    <MainContainer>
      <HeaderInfo />

      <ContentContainer>
        <form>
          <input type="text" />
          <span>Teste</span>
          <input type="text" />
        </form>
      </ContentContainer>
    </MainContainer>
  )
}

export default InfoCharacter
