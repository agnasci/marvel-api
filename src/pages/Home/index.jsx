import React from 'react'

import { MainContainer, CardsContainer } from './styles'

import NavBar from '../../components/NavBar'
import CharacterCard from '../../components/CharacterCard'

function Home() {
  return (
    <MainContainer>
      <NavBar />

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
