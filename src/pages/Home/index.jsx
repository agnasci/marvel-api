import React, { useEffect } from 'react'

import { fetchMarvelCharacters } from '../../actions/getCharacters'

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
    const hasLocalStorage = localStorage.getItem('persist:root')
    hasLocalStorage || dispatch(fetchMarvelCharacters())
  }, [])

  return (
    <MainContainer>
      {filteredCharacterList ? (
        <>
          <NavBar />

          <CardsContainer>
            {filteredCharacterList.length > 0 &&
              filteredCharacterList.map((item, index) => {
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
