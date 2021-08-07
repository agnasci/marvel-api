import React, { useState, useEffect } from 'react'

import { MainContainer, CardsContainer } from './styles'

import axios from 'axios'

import NavBar from '../../components/NavBar'
import CharacterCard from '../../components/CharacterCard'

function Home() {
  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    getCharacters()
  }, [])

  const getCharacters = () => {
    const charactersArray = []

    axios
      .get(
        'http://gateway.marvel.com/v1/public/characters?limit=100&ts=100&apikey=48a29bbf9d161265dbba4308d4a4161c&hash=73f90b2ea4b854e631b542d080f6f002'
      )
      .then(response => {
        response.data.data.results.forEach(item => {
          charactersArray.push({
            id: item.id,
            imgCard:
              item.thumbnail.path +
              '/portrait_uncanny' +
              '.' +
              item.thumbnail.extension,
            imgInfo:
              item.thumbnail.path +
              '/standard_fantastic' +
              '.' +
              item.thumbnail.extension,
            name: item.name,
            series: item.series.items,
          })
        })
        setCharacterList(charactersArray)
        // console.log(response)
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  return (
    <MainContainer>
      <NavBar />

      <CardsContainer>
        {console.log(characterList)}
        {characterList.length > 0 &&
          characterList.map((item, index) => {
            return <CharacterCard key={index} character={item} />
          })}
      </CardsContainer>
    </MainContainer>
  )
}

export default Home
