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
`

export const EditTag = styled.span`
  font-family: 'Inter', sans-serif;
  color: var(--black);
  font-size: 16px;
  margin-top: 15px;
  text-decoration: none;
  font-weight: 700;
  border: 2px solid var(--blue);
  padding: 5px;
  border-radius: 8px;
  background-color: var(--white);
`

export const SeriesDiv = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 50%;
`

export const SeriesListBox = styled.div`
  height: 500px;
  width: 500px;
  border-radius: 8px;
  background-color: var(--white);
  border: 4px solid var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black);
  font-size: 24px;
  font-family: 'Inter', sans-serif;

  ul {
    list-style-type: none;

    li {
      margin-top: 10px;
    }
  }
`
