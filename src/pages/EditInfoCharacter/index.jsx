import React, { useEffect, useState } from 'react'

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

import { useSelector } from 'react-redux'

function InfoCharacter({ match }) {
  const [characterInfo, setCharacterInfo] = useState({})

  const {
    params: { id },
  } = match

  const { characterList } = useSelector(state => {
    console.log(state)
    return {
      characterList: state.characterStore.characterList,
    }
  })

  useEffect(() => {
    console.log(characterList)
    console.log(id)
    const currCharacter = characterList.find(character => +character.id === +id)

    setCharacterInfo(currCharacter)
    console.log(currCharacter)
  }, [])

  return (
    <MainContainer>
      <HeaderInfo />

      <ContentContainer>
        <InformationDiv>
          <CharacterImg>
            <img src={characterInfo.imgInfo} alt={characterInfo.name} />
          </CharacterImg>

          <form>
            <CharacterName value={characterInfo.name} type="text" />
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
