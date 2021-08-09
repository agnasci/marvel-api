import React, { useEffect } from 'react'

import { fetchMarvelCharacters } from '../../actions/characters'

import { MainContainer, CardsContainer } from './styles'

import { useSelector, useDispatch } from 'react-redux'

import NavBar from '../../components/NavBar'
import CharacterCard from '../../components/CharacterCard'

function Home() {
  const dispatch = useDispatch()
  const { characterList } = useSelector(state => ({
    characterList: state.characterStore.characterList,
  }))

  useEffect(() => {
    dispatch(fetchMarvelCharacters())
  }, [])

  return (
    <MainContainer>
      {characterList ? (
        <>
          <NavBar />

          <CardsContainer>
            {characterList.length > 0 &&
              characterList.map((item, index) => {
                return <CharacterCard key={index} character={item} />
              })}
          </CardsContainer>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </MainContainer>
  )
}

export default Home
