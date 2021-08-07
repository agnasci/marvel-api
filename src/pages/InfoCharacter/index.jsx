import React from 'react'

import { MainContainer, CardsContainer } from './styles'

import HeaderInfo from '../../components/HeaderInfo'
import CharacterCard from '../../components/CharacterCard'

function Home() {
  return (
    <MainContainer>
      <HeaderInfo />

      <CardsContainer>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </CardsContainer>
    </MainContainer>
  )
}

export default Home
