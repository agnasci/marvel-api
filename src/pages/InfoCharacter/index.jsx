import React, { useEffect, useState } from 'react'

import {
  MainContainer,
  ContentContainer,
  CharacterImg,
  CharacterName,
  InformationDiv,
  SeriesDiv,
  SeriesListBox,
} from './styles'

import HeaderInfo from '../../components/HeaderInfo'

import { useSelector } from 'react-redux'

function InfoCharacter({ match }) {
  const [characterInfo, setCharacterInfo] = useState({})

  const { characterList } = useSelector(state => ({
    characterList: state.characterStore.characterList,
  }))

  const {
    params: { id },
  } = match

  useEffect(() => {
    const currCharacter = characterList.find(character => +character.id === +id)

    setCharacterInfo(currCharacter)
  }, [])

  return (
    <MainContainer>
      <HeaderInfo />

      <ContentContainer>
        <InformationDiv>
          <CharacterImg>
            <img src={characterInfo.imgInfo} alt={characterInfo.name} />
          </CharacterImg>

          <CharacterName>{characterInfo.name}</CharacterName>
        </InformationDiv>

        <SeriesDiv>
          <SeriesListBox>
            <h1>Séries</h1>
            <ul>
              {characterInfo.series ? (
                <>
                  {characterInfo.series.map((character, idx) => (
                    <>{idx < 5 && <li key={idx}>{character.name}</li>}</>
                  ))}
                </>
              ) : (
                <li>Carregando...</li>
              )}
            </ul>
          </SeriesListBox>
        </SeriesDiv>
      </ContentContainer>
    </MainContainer>
  )
}

export default InfoCharacter
