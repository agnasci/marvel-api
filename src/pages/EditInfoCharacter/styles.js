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
`

export const CharacterName = styled.input`
  padding: 10px;
  background-color: var(--white);
  color: var(--black);
  border: none;
  border-radius: 8px;
  font: 14px 'Inter', sans-serif;
  width: 250px;
  margin-top: 15px;

  &:focus {
    outline: none;
  }
`

export const EditButton = styled.button`
  font-family: 'Inter', sans-serif;
  color: var(--black);
  font-size: 16px;
  margin-top: 15px;
  font-weight: 700;
  border: 2px solid var(--blue);
  padding: 5px;
  border-radius: 8px;
  background-color: var(--white);

  &:hover {
    cursor: pointer;
  }
`

export const SeriesDiv = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 50%;
`

export const SeriesListBox = styled.textarea`
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
  padding: 20px;

  &:focus {
    outline: none;
  }
`
