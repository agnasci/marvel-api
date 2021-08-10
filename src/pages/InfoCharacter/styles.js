import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  max-width: 100vw;
  background-color: var(--grey);
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 95vw;
  flex-wrap: wrap;
`
export const InformationDiv = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 50%;
`

export const CharacterImg = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 8px;
  background-color: var(--white);
  overflow: hidden;
`

export const CharacterName = styled.span`
  font-family: 'Inter', sans-serif;
  color: var(--white);
  font-size: 24px;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const SeriesDiv = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 50%;
  margin-bottom: 15px;
`

export const SeriesListBox = styled.div`
  height: 500px;
  width: 500px;
  border-radius: 8px;
  background-color: var(--white);
  border: 3px solid var(--blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--black);
  font-size: 18px;
  font-family: 'Inter', sans-serif;
  flex-wrap: wrap;

  h1 {
    font-size: 32px;
    font-family: 'Inter', sans-serif;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;

    li {
      margin-top: 10px;
    }
  }
`
