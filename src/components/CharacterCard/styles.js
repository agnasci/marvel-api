import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  height: 495px;
  width: 300px;
  border-radius: 8px;
  margin-bottom: 50px;
  }
  `
export const NameDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 2px solid var(--blue);

  span {
    color: var(--black);
    font-family: 'Inter', sans-serif;
    font-weight: 800;
`

export const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;
  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
`
