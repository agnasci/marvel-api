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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 95vw;
  flex-wrap: wrap;
`

export const CharacterImg = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 8px;
  background-color: var(--white);
`

export const CharacterName = styled.span`
  font-family: 'Inter', sans-serif;
  color: var(--white);
  font-size: 24px;
  margin-top: 15px;
`
